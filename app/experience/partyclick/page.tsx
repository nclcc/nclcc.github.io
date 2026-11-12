import ExperienceLayout from "@/components/ExperienceLayout";

export const metadata = {
  title: "PartyClick — marketplace for parties · Nicolò Ciccarone",
  description:
    "Ongoing work as technical lead and end-to-end developer of PartyClick, a marketplace for parties.",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Events marketplace"
      title="PartyClick — marketplace for parties"
      role="Technical lead & end-to-end developer"
      period="Ongoing"
    >
      <h2>The project</h2>
      <p>
        PartyClick is a marketplace for parties. The project is ongoing.
      </p>

      <h2>My role</h2>
      <p>
        I lead the technical direction and develop PartyClick end to end, combining
        technical leadership with hands-on product development.
      </p>

      <p>
        <a
          href="https://partyclic.events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit PartyClick
        </a>
      </p>
    </ExperienceLayout>
  );
}
