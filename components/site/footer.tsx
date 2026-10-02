import Link from "next/link";
import { SectionLink } from "@/components/site/section-link";
import { contact, whatsapp } from "@/lib/content";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link prefetch={false} href="/" aria-label="IABOT, inicio">
            <img src="/images/logo.webp" alt="IABOT" width="640" height="184" />
          </Link>
          <p>
            Un espacio para construir,
            <br />
            programar y aprender juntos.
          </p>
          <span className="small">Robótica educativa desde 2021.</span>
        </div>
        <div>
          <h2>Explorá</h2>
          <SectionLink href="/#talleres">
            Talleres por edad
          </SectionLink>
          <SectionLink href="/#metodologia">
            Cómo aprendemos
          </SectionLink>
          <SectionLink href="/#sedes">
            Nuestras sedes
          </SectionLink>
        </div>
        <div>
          <h2>Más propuestas</h2>
          <Link prefetch={false} href="/capacitacion-docente">
            Capacitación docente
          </Link>
          <Link prefetch={false} href="/family-day-empresas">
            Family Day para empresas
          </Link>
          <SectionLink href="/#preguntas">
            Preguntas frecuentes
          </SectionLink>
        </div>
        <div>
          <h2>Sigamos en contacto</h2>
          <Link prefetch={false} href={whatsapp()}>
            WhatsApp
          </Link>
          <Link prefetch={false} href={`mailto:${contact.email}`}>
            {contact.email}
          </Link>
          <Link
            prefetch={false}
            href={contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram ↗
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IABOT</span>
        <span>Mercedes · Luján · San Andrés de Giles · 9 de Julio · General Rodríguez</span>
        <span>Buenos Aires, Argentina</span>
      </div>
    </footer>
  );
}
