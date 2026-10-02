"use client";
import Link from "next/link";
import { SectionLink } from "@/components/site/section-link";
import { useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
const links = [
  ["Talleres", "/#talleres"],
  ["Cómo aprendemos", "/#metodologia"],
  ["Sedes", "/#sedes"],
  ["Instituciones", "/#instituciones"],
];
export function Header() {
  const [open, setOpen] = useState(false);
  const navigating = useRef(false);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          prefetch={false}
          href="/"
          aria-label="IABOT, inicio"
          className="brand"
        >
          <img src="/images/logo.webp" alt="IABOT" width="640" height="184" />
          <span>ROBÓTICA EDUCATIVA</span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {links.map(([label, url]) => (
            <SectionLink key={url} href={url}>
              {label}
            </SectionLink>
          ))}
        </nav>
        <SectionLink
          className="button button-small header-contact"
          href="/#contacto"
        >
          Hablemos <ArrowUpRight size={16} />
        </SectionLink>
        <div className="mobile-nav">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="menu-button" aria-label="Abrir menú">
                <Menu />
              </button>
            </SheetTrigger>
            <SheetContent className="mobile-sheet" showCloseButton={false}
              onCloseAutoFocus={(event) => {
                if (navigating.current) {
                  event.preventDefault();
                  navigating.current = false;
                }
              }}
            >
              <SheetClose asChild>
                <button className="sheet-close" aria-label="Cerrar menú">
                  <X size={22} />
                </button>
              </SheetClose>
              <SheetTitle>Explorá IABOT</SheetTitle>
              <SheetDescription>
                Talleres de robótica, programación y diseño.
              </SheetDescription>
              <nav aria-label="Navegación móvil">
                {[...links, ["Contacto", "/#contacto"]].map(([label, url]) => (
                  <SectionLink
                    key={url}
                    href={url}
                    onClick={() => {
                      navigating.current = true;
                      setOpen(false);
                    }}
                  >
                    {label}
                    <ArrowUpRight size={20} />
                  </SectionLink>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
