"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, SlidersHorizontal, RotateCcw } from "lucide-react";
import { NativeSelect } from "@/components/ui/native-select";
import { SectionLink } from "@/components/site/section-link";
import { courses } from "@/lib/content";
export function CourseFinder() {
  const [age, setAge] = useState("");
  const visible = courses.filter(
    (c) => !age || (Number(age) >= c.min && Number(age) <= c.max),
  );
  return (
    <>
      <div className="course-toolbar">
        <div className="age-filter">
          <SlidersHorizontal size={18} />
          <label htmlFor="age">Buscá por edad</label>
          <NativeSelect
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          >
            <option value="">Todas las edades</option>
            {Array.from({ length: 10 }, (_, i) => i + 5).map((a) => (
              <option key={a} value={a}>
                {a} años
              </option>
            ))}
          </NativeSelect>
        </div>
        <span className="result-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "taller" : "talleres"} para
          explorar
        </span>
      </div>
      <div className="course-grid">
        {visible.map((c) => (
          <Link
            prefetch={false}
            href={`/cursos/${c.slug}`}
            className={`course-card ${c.tone}`}
            key={c.slug}
          >
            <div className="course-image">
              <img
                src={`/images/${c.image.replace(".webp", "-small.webp")}`}
                srcSet={`/images/${c.image.replace(".webp", "-small.webp")} 480w, /images/${c.image} ${c.slug === "impresion-3d" || c.slug === "roblox-studio" ? 1200 : 1000}w`}
                sizes="(max-width: 450px) calc(100vw - 44px), (max-width: 760px) calc((100vw - 62px) / 2), (max-width: 1500px) calc((100vw - 140px) / 3), 400px"
                alt={c.alt}
                loading="lazy"
                width="480"
                height={c.slug === "impresion-3d" || c.slug === "roblox-studio" ? 320 : 480}
              />
              <span className="age-badge">
                {c.min}–{c.max} años
              </span>
              <span className="course-number" aria-hidden="true">
                0{courses.indexOf(c) + 1}
              </span>
            </div>
            <div className="course-copy">
              <div className="eyebrow">
                {c.category} ·{" "}
                {c.slug === "roblox-studio" ? "Virtual en vivo" : "Presencial"}
              </div>
              <h3>
                {c.name}
                <ArrowUpRight size={24} />
              </h3>
              <p>{c.description}</p>
              <div className="course-bottom">
                <span>{c.kit}</span>
                <span>Conocer el taller</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {age && (
        <button className="text-button reset-filter" onClick={() => setAge("")}>
          <RotateCcw size={15} /> Mostrar todos los talleres
        </button>
      )}
      <p className="course-note">
        Cada chico aprende a su ritmo. Si tenés dudas sobre el grupo,{" "}
        <SectionLink href="#contacto">
          te ayudamos a elegir
        </SectionLink>
        .
      </p>
    </>
  );
}
