import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  title: {
    default: "IABOT | Robótica y programación para chicos",
    template: "%s | IABOT",
  },
  description:
    "Talleres de robótica con LEGO, programación, impresión 3D y videojuegos para chicos desde los 5 años. Conocé las propuestas y sedes de IABOT.",
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "IABOT",
    images: [{ url: "/images/family-day-encuentro.webp", width: 960, height: 1280, alt: "Jornada de robótica de IABOT" }],
    title: "IABOT | Robótica y programación para chicos",
    description:
      "Robótica, programación y diseño para chicos y jóvenes. Encontrá el taller para su próxima idea.",
  },
  icons: { icon: "/images/favicon.png" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>
        <Link prefetch={false} className="skip-link" href="#contenido">
          Saltar al contenido
        </Link>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
