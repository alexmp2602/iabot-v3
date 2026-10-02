"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { NativeSelect } from "@/components/ui/native-select";
import { Textarea } from "@/components/ui/textarea";
import { courses, locations, whatsapp } from "@/lib/content";
export function ContactForm() {
  const [opened, setOpened] = useState(false);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const d = new FormData(e.currentTarget);
        const message = `¡Hola IABOT! Soy ${String(d.get("name")).trim()}. Me interesa ${d.get("interest")}. Sede o modalidad: ${d.get("location")}.${d.get("age") ? ` Edad del alumno: ${d.get("age")} años.` : ""}${d.get("message") ? ` Consulta: ${String(d.get("message")).trim()}` : ""}`;
        setOpened(true);
        window.location.assign(whatsapp(message));
      }}
    >
      <div className="form-row">
        <div>
          <label htmlFor="name">Tu nombre</label>
          <Input
            id="name"
            name="name"
            autoComplete="given-name"
            pattern={".*\\S.*"}
            placeholder="¿Cómo te llamás?"
            required
            maxLength={80}
          />
        </div>
        <div>
          <label htmlFor="child-age">
            Edad del alumno <span>(opcional)</span>
          </label>
          <Input
            id="child-age"
            name="age"
            type="number"
            min={1}
            max={99}
            inputMode="numeric"
            placeholder="En años"
          />
        </div>
      </div>
      <div className="form-row">
        <div>
          <label htmlFor="interest">Me interesa</label>
          <NativeSelect
            id="interest"
            name="interest"
            defaultValue="Orientación para elegir un taller"
          >
            <option>Orientación para elegir un taller</option>
            {courses.map((c) => (
              <option key={c.slug}>{c.name}</option>
            ))}
            <option>Capacitación docente</option>
            <option>Family Day para empresas</option>
          </NativeSelect>
        </div>
        <div>
          <label htmlFor="location">Sede o modalidad</label>
          <NativeSelect
            id="location"
            name="location"
            defaultValue="Todavía no lo sé"
          >
            <option>Todavía no lo sé</option>
            {locations.map((l) => (
              <option key={l.slug}>{l.name}</option>
            ))}
            <option>Virtual</option>
          </NativeSelect>
        </div>
      </div>
      <label htmlFor="message">
        ¿Qué te gustaría saber? <span>(opcional)</span>
      </label>
      <Textarea
        id="message"
        name="message"
        rows={3}
        maxLength={1000}
        placeholder="Contanos un poco para poder orientarte."
      />
      <button className="button" type="submit">
        Continuar en WhatsApp <ArrowUpRight size={18} />
      </button>
      <p className="form-hint" role="status">
        {opened
          ? "Tu consulta está preparada. Revisala y enviala desde WhatsApp."
          : "Se abrirá WhatsApp con tu consulta preparada. Vos decidís cuándo enviarla."}
      </p>
    </form>
  );
}
