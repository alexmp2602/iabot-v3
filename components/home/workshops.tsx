import { CourseFinder } from "@/components/site/course-finder";

export function Workshops() {
  return (
    <section id="talleres" className="section container">
      <div className="section-heading">
        <div>
          <div className="eyebrow">01 / NUESTROS TALLERES</div>
          <h2>
            Talleres para
            <br />
            cada edad.
          </h2>
        </div>
        <p>
          Desde el primer robot hasta un videojuego propio. Propuestas que
          acompañan su edad, sus intereses y sus ganas de descubrir.
        </p>
      </div>
      <CourseFinder />
    </section>
  );
}
