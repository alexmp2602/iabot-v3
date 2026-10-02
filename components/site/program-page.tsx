import Link from "next/link";
import { TrustedBrands } from "@/components/site/trusted-brands";
import { Check, ArrowUpRight } from "lucide-react";
import { whatsapp } from "@/lib/content";
export function ProgramPage({
  title,
  label,
  description,
  image,
  alt,
  items,
  cta,
  children,
}: {
  title: string;
  label: string;
  description: string;
  image: string;
  alt: string;
  items: { title: string; body: string }[];
  cta: string;
  children?: React.ReactNode;
}) {
  return (
    <main id="contenido">
      <nav className="container breadcrumb" aria-label="Ruta de navegación">
        <Link prefetch={false} href="/">
          Inicio
        </Link>
        <span>/</span>
        <span aria-current="page">{title}</span>
      </nav>
      <section className="container detail-hero">
        <div>
          <div className="eyebrow">{label}</div>
          <h1>{title}</h1>
          <p className="lead">{description}</p>
          <Link
            prefetch={false}
            className="button"
            href={whatsapp(
              `¡Hola IABOT! Me interesa conocer la propuesta de ${title}.`,
            )}
          >
            {cta}
            <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          src={`/images/${image}`}
          className="detail-image"
          alt={alt}
          width="650"
          height="650"
          fetchPriority="high"
        />
      </section>
      <section className="container detail-body">
        <div>
          <h2>
            Una experiencia
            <br />
            para aprender juntos.
          </h2>
          <ul className="learning-list">
            {items.map((i) => (
              <li key={i.title}>
                <Check size={20} />
                <div>
                  <h3>{i.title}</h3>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--gray)",
                      marginTop: 10,
                    }}
                  >
                    {i.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="details-facts">
          <h3>Conversemos sobre tu propuesta</h3>
          <p>
            Contanos de qué institución o empresa sos, cuántas personas
            participarían y qué fechas tenés en mente.
          </p>
          <p>
            Con esa información podemos coordinar la modalidad y el alcance de
            la actividad.
          </p>
          <Link
            prefetch={false}
            className="text-link"
            href={whatsapp(
              `¡Hola IABOT! Quisiera coordinar una propuesta de ${title}.`,
            )}
          >
            Hablar con IABOT <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      {children}
      <TrustedBrands />
    </main>
  );
}
