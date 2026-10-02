import { Hero } from "@/components/home/hero";
import { Highlights } from "@/components/home/highlights";
import { Workshops } from "@/components/home/workshops";
import { Methodology } from "@/components/home/methodology";
import { Testimonial } from "@/components/home/testimonial";
import { Locations } from "@/components/home/locations";
import { Institutions } from "@/components/home/institutions";
import { Questions } from "@/components/home/questions";
import { TrustedBrands } from "@/components/site/trusted-brands";
import { Contact } from "@/components/home/contact";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <main id="contenido">
      <Hero />
      <Highlights />
      <Workshops />
      <Methodology />
      <Testimonial />
      <Locations />
      <Institutions />
      <TrustedBrands />
      <Questions />
      <Contact />
    </main>
  );
}
