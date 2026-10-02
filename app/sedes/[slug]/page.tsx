import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin, ArrowUpRight } from "lucide-react";
import { locations, whatsapp } from "@/lib/content";
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((l) => l.slug === slug);
  return {
    alternates: { canonical: `/sedes/${slug}/` },
    title: l ? `Sede ${l.name}` : "Sede no encontrada",
    description: l
      ? `Talleres de robótica y programación en ${l.name}. Conocé la ubicación y consultá horarios y grupos disponibles.`
      : undefined,
  };
}
export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const l = locations.find((l) => l.slug === slug);
  if (!l) notFound();
  return (
    <main id="contenido">
      <nav className="container breadcrumb" aria-label="Ruta de navegación">
        <Link prefetch={false} href="/">
          Inicio
        </Link>
        <span>/</span>
        <Link prefetch={false} href="/#sedes">
          Sedes
        </Link>
        <span>/</span>
        <span aria-current="page">{l.name}</span>
      </nav>
      <section className="location-hero">
        <div className="container">
          <div className="eyebrow">IABOT · BUENOS AIRES</div>
          <h1>Nos vemos en {l.name}.</h1>
          <p>
            Un espacio para aprender robótica y programación construyendo
            proyectos, resolviendo desafíos y trabajando en equipo.
          </p>
        </div>
      </section>
      <section className="container location-info">
        <div>
          <h2>Encontrá su lugar para crear.</h2>
          <p>
            Los talleres acompañan diferentes edades y experiencias. Consultanos
            por las propuestas y grupos disponibles en esta sede.
          </p>
          <p>
            Para orientarte, contanos la edad del alumno y qué actividad le
            interesa. Te confirmamos horarios, aranceles y cupos antes de
            inscribirte.
          </p>
          <Link
            prefetch={false}
            className="button"
            href={whatsapp(
              `¡Hola IABOT! Quisiera información sobre los talleres disponibles en la sede ${l.name}.`,
            )}
          >
            Consultar por esta sede <ArrowUpRight size={18} />
          </Link>
        </div>
        <div className="address-box">
          <MapPin size={30} />
          <h2>{l.address}</h2>
          <p>{l.name}, provincia de Buenos Aires.</p>
          <Link
            prefetch={false}
            className="text-link"
            href={l.map}
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar en Google Maps <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <nav className="container related-links" aria-label="Seguir explorando">
        <Link prefetch={false} href="/#sedes">
          Ver todas las sedes
        </Link>
        <Link prefetch={false} href="/#talleres">
          Explorar los talleres
        </Link>
      </nav>
    </main>
  );
}
