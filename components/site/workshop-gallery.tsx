const photos = [
  { image: "family-day-construccion", alt: "Dos participantes construyen un robot con piezas LEGO", caption: "Construir entre compañeros" },
  { image: "family-day-equipo", alt: "Un grupo explora kits de robótica alrededor de una mesa", caption: "Compartir ideas y materiales" },
  { image: "family-day-programacion", alt: "Una participante usa una tablet para controlar su robot", caption: "Programar y probar" },
  { image: "family-day-proyecto", alt: "Tres participantes observan su robot junto a una tablet", caption: "Resolver desafíos en equipo" },
  { image: "family-day-robot", alt: "Una participante ensambla su proyecto con un kit de robótica", caption: "Darle forma a un proyecto" },
];

export function WorkshopGallery() {
  return (
    <section className="section container" aria-labelledby="gallery-title">
      <div className="section-heading">
        <div>
          <div className="eyebrow">ASÍ SE VIVE UN FAMILY DAY</div>
          <h2 id="gallery-title">Manos a la robótica.</h2>
        </div>
        <p>Construir, programar y probar juntos. Algunas escenas de nuestras jornadas con familias.</p>
      </div>
      <div className="workshop-gallery">
        {photos.map((photo) => (
          <figure key={photo.image}>
            <img src={`/images/${photo.image}.webp`}
              srcSet={`/images/${photo.image}-small.webp 480w, /images/${photo.image}.webp 960w`}
              sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw"
              width={960} height={1280} loading="lazy" alt={photo.alt} />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
