# IABOT 4.0

Sitio público de IABOT: talleres de robótica, programación y diseño para chicos y jóvenes, sedes y propuestas para instituciones.

## Desarrollo

Requisitos: Node.js 22.13 o superior y pnpm 11.25.

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

Abrir http://localhost:3000.

## Validación y publicación

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Next.js genera el sitio estático en `out/`. Publicar esa carpeta en un proveedor con soporte para rutas de directorio y `404.html`. No requiere un servidor Node.js en producción. `pnpm dev` inicia el servidor para desarrollo.

La indexación está habilitada. `SITE_URL` permite configurar la URL pública durante el build; por defecto usa `https://www.iabot.com.ar`. El sitemap y los canonical se generan con esa base. `vercel.json` define Next.js, la instalación y el directorio de salida para reemplazar la configuración anterior de Astro.

La ruta `/inscription/` conserva el formulario de inscripción de la versión anterior.

## Organización

- `app/`: rutas, metadatos y estilos globales. La portada compone las secciones.
- `components/home/`: hero, talleres, metodología, testimonio, sedes, instituciones, preguntas y contacto.
- `components/site/`: navegación, footer, filtros, formulario y presentación compartida de programas.
- `components/ui/`: controles accesibles reutilizables.
- `lib/content.ts`: contenido tipado de talleres, sedes y contacto.
- `public/`: fotografías WebP y fuentes locales.

Las páginas de talleres y sedes se generan desde el contenido, sin duplicar layouts. Los componentes son de servidor salvo donde necesitan interacción. Las imágenes tienen dimensiones explícitas y variantes responsive; las fuentes se sirven localmente.

## Contacto

El formulario valida los datos y abre WhatsApp con un mensaje preparado. La persona revisa y envía el mensaje desde WhatsApp. El sitio no almacena consultas ni simula envíos a un servidor.

## Recursos

Las fotografías y el logo pertenecen al material de IABOT. El contenido fue tomado del sitio institucional y debe mantenerse actualizado por sus responsables. Los paquetes de terceros conservan sus propias licencias.

### Marcas e imágenes

`lib/brands.ts` reúne las organizaciones confirmadas en la web institucional. `TrustedBrands` muestra la misma sección en la portada y en las propuestas para instituciones y empresas. Para agregar una organización, confirmar su relación con IABOT y sumar su logo en `public/images/brands/`.

El logo de IABOT se exportó desde `public/assets/img/logo/PNG/iabot-PNG-06.png` del repositorio `iabot-v3`, quitando márgenes transparentes y conservando la proporción. La versión WebP tiene 640 píxeles de ancho y compresión sin pérdida. Los logos de organizaciones se tomaron de `public/assets/img/marcas/webp/` de la web institucional, conservando su color y proporción.

Las tarjetas de talleres usan `srcSet` para elegir entre las miniaturas de 480 píxeles y las fotografías grandes según el ancho y la densidad de la pantalla. Evitar reemplazar el original por una miniatura o agrandar archivos pequeños: no recupera detalle.
