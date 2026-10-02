import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { courses, whatsapp } from "@/lib/content";
export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = courses.find((c) => c.slug === slug);
  return {
    alternates: { canonical: `/cursos/${slug}/` },
    title: c ? `${c.name}: ${c.min} a ${c.max} años` : "Taller no encontrado",
    description: c?.description,
  };
}
export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = courses.find((c) => c.slug === slug);
  if (!c) notFound();
  return (
    <main id="contenido">
      <nav className="container breadcrumb" aria-label="Ruta de navegación">
        <Link prefetch={false} href="/">
          Inicio
        </Link>
        <span>/</span>
        <Link prefetch={false} href="/#talleres">
          Talleres
        </Link>
        <span>/</span>
        <span aria-current="page">{c.name}</span>
      </nav>
      <section className="container detail-hero">
        <div>
          <div className="eyebrow">
            {c.category} · {c.kit}
          </div>
          <h1>{c.name}</h1>
          <p className="lead">{c.description}</p>
          <div className="detail-badges">
            <span>
              {c.min} a {c.max} años
            </span>
            <span>{c.mode}</span>
          </div>
          <Link
            prefetch={false}
            href={whatsapp(
              `¡Hola IABOT! Quisiera consultar horarios, aranceles y disponibilidad del taller ${c.name}.`,
            )}
            className="button"
          >
            Consultar por este taller <ArrowUpRight size={18} />
          </Link>
        </div>
        <img
          className="detail-image"
          src={`/images/${c.image}`}
          alt={c.alt}
          width="650"
          height="650"
          fetchPriority="high"
        />
      </section>
      <section className="container detail-body">
        <div>
          <div className="eyebrow">APRENDER CON UN PROYECTO ENTRE MANOS</div>
          <h2 style={{ marginTop: 16 }}>¿Qué van a aprender?</h2>
          <ul className="learning-list">
            {c.learning.map((t) => (
              <li key={t}>
                <Check size={20} />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="details-facts">
          <h3>Experiencia previa</h3>
          <p>{c.previous}</p>
          <h3>Materiales y equipos</h3>
          <p>{c.materials}</p>
          <h3>Duración y horarios</h3>
          <p>{c.duration}</p>
        </div>
      </section>
      <section className="cta-strip">
        <div className="container">
          <div>
            <h2>¿Es el taller para tu hijo?</h2>
            <p>
              Contanos su edad y experiencia. Te ayudamos a elegir el grupo.
            </p>
          </div>
          <Link
            prefetch={false}
            className="button button-light"
            href={whatsapp(
              `¡Hola IABOT! Necesito orientación sobre el taller ${c.name}.`,
            )}
          >
            Hablemos por WhatsApp <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <nav className="container related-links" aria-label="Seguir explorando">
        <Link prefetch={false} href="/#talleres">
          Explorar todos los talleres
        </Link>
        <Link prefetch={false} href="/#sedes">
          Conocer las sedes
        </Link>
      </nav>
    </main>
  );
}
