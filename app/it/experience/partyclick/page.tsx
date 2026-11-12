import ExperienceLayout from "@/components/it/ExperienceLayout";

export const metadata = {
  title: "PartyClick — marketplace per feste · Nicolò Ciccarone",
  description:
    "Attività in corso come responsabile tecnico e sviluppatore end-to-end di PartyClick, un marketplace per feste.",
};

export default function Page() {
  return (
    <ExperienceLayout
      sector="Marketplace di eventi"
      title="PartyClick — marketplace per feste"
      role="Responsabile tecnico e sviluppatore end-to-end"
      period="In corso"
    >
      <h2>Il progetto</h2>
      <p>
        PartyClick è un marketplace per feste. Il progetto è in corso.
      </p>

      <h2>Il mio ruolo</h2>
      <p>
        Guido la direzione tecnica e sviluppo PartyClick end-to-end, unendo la responsabilità tecnica allo sviluppo concreto del prodotto.
      </p>

      <p>
        <a
          href="https://partyclic.events"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita PartyClick
        </a>
      </p>
    </ExperienceLayout>
  );
}
