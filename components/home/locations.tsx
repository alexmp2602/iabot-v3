import Link from "next/link";
import { MapPin, ArrowUpRight, Code2 } from "lucide-react";
import { locations } from "@/lib/content";

export function Locations() {
  return (
    <section id="sedes" className="section locations-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">03 / CERCA DE CASA</div>
            <h2>
              Nos encontramos
              <br />
              en el taller.
            </h2>
          </div>
          <p>
            Cinco sedes en la provincia de Buenos Aires. Encontrá la tuya y
            consultá las propuestas disponibles.
          </p>
        </div>
        <div className="locations-list">
          {locations.map((l, i) => (
            <Link
              prefetch={false}
              href={`/sedes/${l.slug}`}
              key={l.slug}
              className="location-row"
            >
              <span className="location-index">0{i + 1}</span>
              <h3>{l.name}</h3>
              <span className="location-address">
                <MapPin size={16} />
                {l.address}
              </span>
              <span className="location-note">{l.note}</span>
              <ArrowUpRight size={24} />
            </Link>
          ))}
        </div>
        <div className="virtual-note">
          <Code2 size={22} />
          <p>
            <strong>¿Te queda lejos?</strong> Roblox Studio también se aprende
            desde casa, con clases virtuales en vivo.
          </p>
          <Link
            prefetch={false}
            href="/cursos/roblox-studio"
            className="text-link"
          >
            Conocer el taller <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
