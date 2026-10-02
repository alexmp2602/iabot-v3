import { trustedBrands } from "@/lib/brands";

export function TrustedBrands() {
  return (
    <section className="trusted-section" aria-labelledby="trusted-title">
      <div className="container">
        <div className="trusted-heading">
          <div>
            <p className="eyebrow">TALLERES QUE CONECTAN COMUNIDADES</p>
            <h2 id="trusted-title">Confían en IABOT.</h2>
          </div>
          <p>
            Empresas, colegios y organizaciones que eligieron IABOT para
            desarrollar talleres y propuestas educativas.
          </p>
        </div>
        <ul className="trusted-grid">
          {trustedBrands.map((brand) => (
            <li key={brand.name}>
              <div className={`trusted-logo${"darkBackground" in brand && brand.darkBackground ? " trusted-logo-dark" : ""}`}>
                <img
                  src={`/images/brands/${brand.image}`}
                  alt=""
                  width={brand.width}
                  height={brand.height}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <span>{brand.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
