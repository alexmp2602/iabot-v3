import { ProgramPage } from "@/components/site/program-page";
export const metadata = {
  alternates: { canonical: "/capacitacion-docente/" },
  title: "Capacitación docente en robótica",
  description:
    "Formación práctica para incorporar LEGO Education, Scratch y programación al aula. Modalidad presencial o virtual y certificado de participación IABOT.",
};
export default function Page() {
  return (
    <ProgramPage
      title="Robótica para llevar al aula."
      label="CAPACITACIÓN DOCENTE"
      description="Aprendé a integrar robótica y programación en tus clases con LEGO Education y herramientas digitales. Podés empezar sin experiencia previa."
      image="capacitacion_docente.webp"
      alt="Docentes participando en una capacitación de robótica de IABOT"
      cta="Consultar capacitación"
      items={[
        {
          title: "Presencial o virtual",
          body: "Capacitaciones en tu escuela o de forma virtual, adaptadas a los horarios y necesidades de la institución.",
        },
        {
          title: "Herramientas para tus clases",
          body: "Trabajo práctico con LEGO Education, Scratch y recursos digitales para incorporar a tu propuesta educativa.",
        },
        {
          title: "Certificado de participación",
          body: "Al finalizar, recibís un certificado de participación emitido por IABOT.",
        },
      ]}
    />
  );
}
