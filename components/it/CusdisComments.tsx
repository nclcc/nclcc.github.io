import Link from "next/link";

/** No third-party comments are loaded, even if an old Cusdis env var is set. */
export default function CusdisComments({ title }: { title: string }) {
  return (
    <section className="mt-14 prose-bk" aria-label="Discussione">
      <h2>Parliamo di questo articolo</h2>
      <p>
        Invia le tue riflessioni su “{title}” a{" "}
        <a href="mailto:niciccarone@gmail.com">niciccarone@gmail.com</a>.
        I messaggi sono privati e non vengono pubblicati come commenti.
      </p>
      <p className="text-sm">
        Leggi l’ <Link href="/it/privacy/">informativa privacy</Link> prima di scrivere.
      </p>
    </section>
  );
}
