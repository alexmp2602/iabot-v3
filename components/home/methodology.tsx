import { Blocks, Code2, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Blocks,
    title: "Construir para entender",
    description: "Los kits LEGO permiten explorar mecanismos, motores y sensores con las propias manos.",
  },
  {
    number: "02",
    Icon: Code2,
    title: "Programar para darle vida",
    description: "Una secuencia de instrucciones se convierte en movimiento. La lógica tiene un resultado que pueden ver.",
  },
  {
    number: "03",
    Icon: Users,
    title: "Probar, equivocarse y compartir",
    description: "Resolver desafíos en grupo también enseña a escuchar, explicar una idea y volver a intentarlo.",
  },
];

export function Methodology() {
  return (
    <section id="metodologia" className="method-section">
      <div className="container method-grid">
        <div className="method-intro">
          <div className="eyebrow">02 / ASÍ APRENDEMOS</div>
          <h2>
            Las manos crean.
            <br />
            La cabeza conecta.
          </h2>
          <p>
            En IABOT, la tecnología se entiende experimentando. Cada proyecto
            invita a pensar una solución, probarla y compartir lo aprendido.
          </p>
          <div className="method-photo">
            <img
              src="/images/teleferico.webp"
              alt="Teleférico construido con LEGO junto a su programa en una tablet"
              width="650"
              height="500"
              loading="lazy"
            />
            <span>Del armado al programa: todo está conectado.</span>
          </div>
        </div>
        <div className="method-steps">
          {steps.map(({ number, Icon, title, description }) => (
            <div className="method-step" key={number}>
              <span className="step-number">{number}</span>
              <div>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
          <div className="method-footnote">
            Clases grupales · Proyectos prácticos · Acompañamiento docente
          </div>
        </div>
      </div>
    </section>
  );
}
