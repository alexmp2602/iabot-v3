import { MoveUpRight } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { contact } from "@/lib/content";

export function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow">EL PRIMER PASO ES UNA CHARLA</div>
          <h2>
            Contanos qué
            <br />
            le da curiosidad.
          </h2>
          <p>
            Te ayudamos a encontrar un taller y te contamos los horarios,
            aranceles y lugares disponibles.
          </p>
          <a
            className="email-link"
            href={`mailto:${contact.email}`}
          >
            ¿Preferís escribir por mail?
            <br />
            <strong>{contact.email}</strong> <MoveUpRight size={19} />
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
