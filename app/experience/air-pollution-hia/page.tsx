import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "Air-pollution mortality Health Impact Assessment · Nicolò Ciccarone",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Public research"
      title="Air-pollution mortality Health Impact Assessment"
      role="Quantitative researcher"
      period="2025 – present"
    >
      <figure className="mb-8 -mt-2">
        <div
          className="overflow-hidden rounded-md border"
          style={{ borderColor: "var(--bk-rule)" }}
        >
          <img
            src="/experience/air-pollution-3d.png?v=2"
            alt="Screenshot from the Aria Pulita 3D game: neighbourhoods on the map, coloured by how much the air needs help"
            className="block w-full h-auto"
          />
        </div>
        <figcaption
          className="mt-3 text-sm font-mono leading-relaxed"
          style={{ color: "var(--bk-eyebrow)" }}
        >
          From the 3D game built for this work — a playable map of the city, not a mock.
        </figcaption>
      </figure>

      <h2>The problem</h2>
      <p>
        A defensible estimate of mortality attributable to urban air pollution, under
        alternative traffic scenarios, that can sit in front of policy stakeholders.
      </p>

      <h2>Approach</h2>
      <p>
        A standard epidemiological Health Impact Assessment: exposure–response functions
        linked to population exposure and baseline mortality, with traceable assumptions
        that can be inspected and re-run. Complementary causal work on how people perceive
        local air quality.
      </p>

      <h2>Outcome</h2>
      <p>
        Scenario-conditional mortality-burden estimates, plus the 3D game that lets people
        explore the city on the map instead of only reading a table.
      </p>
    </ExperienceLayout>
  );
}
