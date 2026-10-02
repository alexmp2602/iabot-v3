import Link from "next/link";
export const metadata = {
  title: "Inscripción a talleres",
  description: "Completá el formulario de inscripción a los talleres de IABOT.",
  alternates: { canonical: "/inscription/" },
};
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdOqv7K6jisyiLCJLVaXudGCL6BHCZAoo2DCNjW-XlSP99MwQ/viewform";
export default function InscriptionPage() {
  return <main id="contenido" className="section container">
    <div className="section-heading"><div><div className="eyebrow">TALLERES IABOT</div><h1>Inscripción</h1></div>
      <p>Completá tus datos en el formulario. El equipo de IABOT se pondrá en contacto para confirmar tu cupo.</p></div>
    <Link className="text-link" href={formUrl} target="_blank" rel="noopener noreferrer">Abrir el formulario en otra pestaña</Link>
    <iframe className="inscription-frame" title="Formulario de inscripción a IABOT" src={`${formUrl}?embedded=true`} loading="lazy" />
  </main>;
}
