"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/content";
export function Faq() {
  return (
    <Accordion type="single" collapsible className="faq-list">
      {faqs.map(([q, a], i) => (
        <AccordionItem value={`q${i}`} key={q}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
