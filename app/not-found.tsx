import Link from "next/link";
export default function NotFound() {
  return (
    <main id="contenido" className="not-found">
      <div className="eyebrow">404 / PÁGINA NO ENCONTRADA</div>
      <h1>Por acá no era.</h1>
      <p>
        La página que buscás no existe. Podés volver al inicio para explorar los
        talleres y sedes de IABOT.
      </p>
      <Link prefetch={false} className="button" href="/">
        Volver al inicio
      </Link>
    </main>
  );
}
