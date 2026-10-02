import { SectionLink } from "@/components/site/section-link";
import { Faq } from "@/components/site/faq";

export function Questions() {
  return (
    <section id="preguntas" className="section container faq-section">
      <div>
        <div className="eyebrow">PREGUNTAS FRECUENTES</div>
        <h2>
          Antes de elegir
          <br />
          un taller.
        </h2>
        <p>
          Y si te queda alguna más,
          <br />
          <SectionLink className="inline-link" href="#contacto">
            estamos para ayudarte.
          </SectionLink>
        </p>
      </div>
      <Faq />
    </section>
  );
}
