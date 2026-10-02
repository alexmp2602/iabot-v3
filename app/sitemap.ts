import type { MetadataRoute } from "next";
import { courses, locations } from "@/lib/content";
import { siteUrl } from "@/lib/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/capacitacion-docente/", "/family-day-empresas/", "/inscription/",
    ...courses.map((c) => `/cursos/${c.slug}/`), ...locations.map((l) => `/sedes/${l.slug}/`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}` }));
}
