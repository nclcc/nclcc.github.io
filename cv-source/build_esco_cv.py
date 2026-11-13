"""Apply ESCO-aligned copy to the original PDF without changing its design.

Run: python3 cv-source/build_esco_cv.py
The original reference PDF is the template. All original headings, rules,
contact links, employment metadata and education entries remain in place.
Replacement copy uses the original embedded Latin Modern fonts, font sizes,
baselines, bullet indents and paragraph allocations.
"""
from pathlib import Path
from collections import Counter
import re
import fitz

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / 'Nicolo_Ciccarone_CV_Reference_Style.pdf'
OUTPUT = ROOT / 'output/pdf/Nicolo_Ciccarone_CV_ESCO_ATS.pdf'
doc = fitz.open(SOURCE)
# Full OpenType versions of the same Latin Modern typeface avoid embedding
# subset Type 1 fonts in a new Unicode text stream.
font_root = Path.home() / 'Library/Caches/TectonicProject.Tectonic/bundles/data'
fonts = {
    weight: fitz.Font(fontfile=str(next(font_root.glob(f'*/lmroman10-{weight}.otf'))))
    for weight in ('regular', 'bold')
}

# Source paragraph positions and line counts are fixed, rather than reflowing
# the document into a different template or rearranging its sections.
changes = [
    (0, 3, 0, 5, 'Senior data scientist and applied statistician with an econometrics background, building predictive models and production machine learning systems. Applies causal inference, survival analysis and time-series forecasting to climate, financial risk and business decisions. Develops data processing applications using Python, SQL, Spark and AWS, with APIs, cloud orchestration and monitoring. Delivers analytics across staffing, retail, aviation and financial services.'),
    (0, 5, 0, 2, '<b>Statistical Modeling:</b> Statistics, econometrics, causal inference, survival and mixture-cure models, score-driven (GAS) models, time-series forecasting, Hawkes processes, climate risk, gradient boosting.'),
    (0, 5, 2, 2, '<b>Programming & Data:</b> Python, R, SQL query languages, Polars, PySpark / Apache Spark, Julia (basic), GIS, spatial data, MongoDB; quantitative data management.'),
    (0, 5, 4, 2, '<b>Machine Learning:</b> PyTorch, mixture-of-experts (MoE), natural language processing (NLP), predictive models for customer lifetime value (CLTV), churn and demand forecasting.'),
    (0, 5, 6, 2, '<b>MLOps, Cloud & Serving:</b> AWS SageMaker, ECS, EKS, ECR, CloudWatch; Docker, Kubernetes, FastAPI, Celery, Grafana; model deployment, production inference, distributed workflows.'),
    (0, 5, 8, 2, '<b>Additional Platforms:</b> Databricks; Microsoft Azure ML, Pipelines and Fabric; Google Cloud Platform (GCP) Vertex AI Workbench and Colab Enterprise.'),
    (0, 7, 4, 1, 'Deliver statistical modeling and production analytics for enterprise clients with over €1B in revenue.'),
    (0, 7, 5, 3, 'Built and deployed a time-to-fill forecasting engine on AWS SageMaker using score-driven discrete-time survival models (GAS), right-censored vacancy-day panels and time-varying recruitment funnel data.'),
    (0, 7, 8, 2, 'Built customer lifetime value (CLTV) models with mixture-cure survival, gradient-boosted margin regression and calibrated segmentation for revenue forecasting and next-best-product targeting.'),
    (0, 7, 10, 2, 'Designed and deployed a macroeconomic scenario simulator to forecast business impacts under changing market conditions, supported by distributed workflow orchestration.'),
    (0, 7, 12, 3, 'Optimized distributed data processing pipelines with PySpark joins, window functions and broadcast optimization, <b>reducing execution time by 70%;</b> deployed natural language processing (NLP) applications as Python FastAPI microservices.'),
    (0, 8, 4, 2, 'Developed and deployed causal artificial intelligence (AI) models for pricing optimization and demand forecasting at Adidas International B.V.; the pricing algorithm remains in production use.'),
    (0, 8, 6, 2, 'Developed and maintained gradient boosting machine (GBM) models to predict customer churn and litigation for LATAM Airlines.'),
    (1, 0, 4, 3, 'Designed and deployed a proprietary mixture-of-experts (MoE) engine for real-time inventory optimization, routing spatial Internet of Things (IoT) sensor data to specialist models; used by a startup. Forecast performance evaluated using mean absolute percentage error (MAPE).'),
    (1, 1, 4, 2, 'Developed and deployed an initial climate-risk model for a commercial real-estate portfolio, applying scenario-based stress testing aligned with NGFS / IPCC pathways.'),
]


def words_with_fonts(text):
    bold = False
    words = []
    for chunk in re.split('(<b>|</b>)', text):
        if chunk == '<b>':
            bold = True
        elif chunk == '</b>':
            bold = False
        else:
            words.extend((word, fonts['bold' if bold else 'regular']) for word in chunk.split())
    return words


writers = {i: fitz.TextWriter(page.rect) for i, page in enumerate(doc)}
for pi, bi, start, count, copy in changes:
    page = doc[pi]
    lines = page.get_text('dict')['blocks'][bi]['lines'][start:start+count]
    bullet = pi != 0 or bi != 3
    size = lines[0]['spans'][-1]['size']
    baseline = lines[0]['spans'][0]['origin'][1]
    indent = 57.885 if bullet else 43.937
    right = 551.34
    for word, font in words_with_fonts(copy):
        assert all(font.has_glyph(ord(c)) for c in word), word
    space = fonts['regular'].text_length(' ', fontsize=size)
    wrapped = [[]]
    width = 0
    for word, font in words_with_fonts(copy):
        w = font.text_length(word, fontsize=size)
        if wrapped[-1] and width + space + w > right-indent:
            wrapped.append([])
            width = 0
        wrapped[-1].append((word, font, w))
        width += (space if len(wrapped[-1]) > 1 else 0) + w
    assert len(wrapped) <= count, (pi, bi, start, len(wrapped), count)
    for line in lines:
        # Remove only old paragraph text; headings, rules and metadata stay.
        page.add_redact_annot(fitz.Rect(line['bbox']), fill=(1, 1, 1))
    writer = writers[pi]
    if bullet:
        writer.append((43.945, baseline), '•', font=fonts['regular'], fontsize=size)
    for index, line in enumerate(wrapped):
        x = indent
        gap = ((right-indent-sum(item[2] for item in line))/(len(line)-1)
               if index < len(wrapped)-1 and len(line)>1 else space)
        for word, font, w in line:
            writer.append((x, baseline+13.549*index), word, font=font, fontsize=size)
            x += w+gap

# The previous MAPE edit was a separate text span on the last MOOS line.
for rect in doc[1].search_for('(MAPE).'):
    doc[1].add_redact_annot(rect, fill=(1, 1, 1))
for pi, page in enumerate(doc):
    page.apply_redactions(images=0, graphics=0)
    writers[pi].write_text(page)

# Keep the visible business domain and the personal-site destination distinct.
website = 'complexalabs.com'
website_size = 9.86247
website_font = fonts['regular']
website_width = website_font.text_length(website, fontsize=website_size)
website_x = (doc[0].rect.width - website_width) / 2
website_writer = fitz.TextWriter(doc[0].rect)
website_writer.append((website_x, 98), website, font=website_font,
                      fontsize=website_size)
website_writer.write_text(doc[0])
doc[0].insert_link({'kind': fitz.LINK_URI,
                    'from': fitz.Rect(website_x, 88, website_x + website_width, 101),
                    'uri': 'https://nclcc.github.io'})

# Make room for secondary education before the final languages section.
# Copy the complete section, including its rule, to preserve the reference design.
section_source = fitz.open(stream=doc.tobytes(), filetype='pdf')
section_clip = fitz.Rect(0, 432, doc[1].rect.width, 505)
doc[1].add_redact_annot(section_clip, fill=(1, 1, 1))
doc[1].apply_redactions(images=0, graphics=2)
doc[1].show_pdf_page(section_clip + (0, 52, 0, 52), section_source, 1,
                     clip=section_clip)
section_source.close()
education_writer = fitz.TextWriter(doc[1].rect)
education_writer.append((43.937, 443), 'Classical High School (Liceo Classico)',
                        font=fonts['bold'], fontsize=10.9091)
education_writer.append((43.937, 457),
                        'Diploma di maturità classica (Classical Studies Diploma)',
                        font=fonts['regular'], fontsize=10.9091)
education_writer.append((43.937, 471), 'Grade: 100/100.',
                        font=fonts['regular'], fontsize=10.9091)
education_writer.write_text(doc[1])

# Use regular weight throughout, including headings and emphasized statistics.
for page in doc:
    original_characters = Counter(c for c in page.get_text() if not c.isspace())
    regular_writer = fitz.TextWriter(page.rect)
    has_bold = False
    for block in page.get_text('dict')['blocks']:
        for line in block.get('lines', []):
            for span in line['spans']:
                if 'bold' not in span['font'].lower():
                    continue
                has_bold = True
                # A narrow strip intersects this line's glyphs only: full font
                # boxes can overlap the neighboring tightly spaced lines.
                bbox = fitz.Rect(span['bbox'][0] + 0.2, span['origin'][1] - 5,
                                 span['bbox'][2] - 0.2, span['origin'][1] - 2)
                page.add_redact_annot(bbox, fill=(1, 1, 1))
                regular_writer.append(span['origin'], span['text'],
                                      font=fonts['regular'], fontsize=span['size'])
    if has_bold:
        page.apply_redactions(images=0, graphics=0)
        regular_writer.write_text(page)
        assert Counter(c for c in page.get_text() if not c.isspace()) == original_characters
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc.save(OUTPUT, garbage=4, deflate=True)
doc.close()
(ROOT / 'public/cv.pdf').write_bytes(OUTPUT.read_bytes())
check = fitz.open(OUTPUT)
assert len(check) == 2
# Sort by position because revised paragraphs are appended to PDF page streams.
text = '\n\n'.join(page.get_text(sort=True) for page in check)
assert '90%' not in text and 'MAPE' in text and '70%' in text
(ROOT / 'cv-source/cv-esco-ats.txt').write_text(text, encoding='utf-8')
print(OUTPUT)
