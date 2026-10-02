"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SectionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function SectionLink({ href, onClick, ...props }: SectionLinkProps) {
  function navigate(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (
      event.defaultPrevented || event.button !== 0 || event.metaKey ||
      event.ctrlKey || event.shiftKey || event.altKey || props.target === "_blank"
    ) return;

    const destination = new URL(href, window.location.href);
    if (destination.pathname !== window.location.pathname || !destination.hash) return;

    const section = document.getElementById(destination.hash.slice(1));
    if (!section) return;
    event.preventDefault();
    window.history.pushState(null, "", destination.hash);
    // Let the mobile dialog release its scroll lock before moving the page.
    requestAnimationFrame(() => requestAnimationFrame(() => {
      section.scrollIntoView({ block: "start" });
      section.setAttribute("tabindex", "-1");
      section.focus({ preventScroll: true });
    }));
  }

  return <a {...props} href={href} onClick={navigate} />;
}
