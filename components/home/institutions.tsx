import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Institutions() {
  return (
    <section
      id="instituciones"
      className="section container institution-section"
    >
      <div className="section-heading">
        <div>
          <div className="eyebrow">04 / APRENDER TAMBIÉN ES COMPARTIR</div>
          <h2>
            Fuera del taller,
            <br />
            más posibilidades.
          </h2>
        </div>
        <p>
          Llevamos la robótica a las aulas y a los encuentros entre equipos y
          familias.
        </p>
      </div>
      <div className="institution-grid">
        <Link
          prefetch={false}
          className="institution-card"
          href="/capacitacion-docente"
        >
          <img
            src="/images/capacitacion_docente.webp"
            alt="Docentes trabajando con kits de robótica en una capacitación de IABOT"
            width="600"
            height="400"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">PARA DOCENTES E INSTITUCIONES</span>
            <h3>
              La robótica entra al aula.
              <ArrowUpRight />
            </h3>
            <p>
              Herramientas y formación práctica para incorporar LEGO Education
              y programación a tus clases.
            </p>
          </div>
        </Link>
        <Link
          prefetch={false}
          className="institution-card"
          href="/family-day-empresas"
        >
          <img
            src="/images/family-day-encuentro.webp"
            srcSet="/images/family-day-encuentro-small.webp 480w, /images/family-day-encuentro.webp 960w"
            sizes="(max-width: 760px) 100vw, 50vw"
            alt="Familias participando en un Family Day de robótica con IABOT"
            width="600"
            height="400"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">PARA EMPRESAS</span>
            <h3>
              Un Family Day para crear.
              <ArrowUpRight />
            </h3>
            <p>
              Una jornada para construir robots y compartir un desafío entre
              compañeros y familias.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
