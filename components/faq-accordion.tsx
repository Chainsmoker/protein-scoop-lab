"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-list">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className={`faq-item ${isOpen ? "is-open" : ""}`}
          >
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${index}`}
              id={`faq-header-${index}`}
            >
              <span>{faq.question}</span>
              <span className={`faq-icon ${isOpen ? "is-rotated" : ""}`} aria-hidden="true">
                <Plus size={20} />
              </span>
            </button>
            <div
              id={`faq-content-${index}`}
              role="region"
              aria-labelledby={`faq-header-${index}`}
              className="faq-collapse"
            >
              <div className="faq-collapse-inner">
                <p>{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
