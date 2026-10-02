import { ProgramPage } from "@/components/site/program-page";
import { WorkshopGallery } from "@/components/site/workshop-gallery";
export const metadata = {
  alternates: { canonical: "/family-day-empresas/" },
  title: "Family Day para empresas",
  description:
    "Jornadas de robótica para empresas y familias. Construcción y programación de robots LEGO con acompañamiento del equipo de IABOT.",
};
export default function Page() {
  return (
    <ProgramPage
      title="Un Family Day para crear juntos."
      label="ROBÓTICA PARA EMPRESAS Y FAMILIAS"
      description="Una jornada en la que empleados y familias comparten un desafío: construir un robot y hacerlo funcionar. Tecnología, juego y trabajo en equipo en una misma experiencia."
      image="family-day-encuentro.webp"
      alt="Familias construyendo robots con kits LEGO en una jornada de IABOT"
      cta="Consultar una fecha"
      items={[
        {
          title: "Un proyecto compartido",
          body: "Cada grupo construye y programa su propio robot LEGO, poniendo en común ideas y soluciones.",
        },
        {
          title: "Para distintas edades",
          body: "Una experiencia lúdica que invita a participar a empleados y familiares.",
        },
        {
          title: "Acompañamiento durante la jornada",
          body: "El equipo de IABOT facilita la actividad y acompaña a los grupos en sus proyectos.",
        },
      ]}
    >
      <WorkshopGallery />
    </ProgramPage>
  );
}
