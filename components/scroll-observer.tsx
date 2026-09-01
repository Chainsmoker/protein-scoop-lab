"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveals
    const revealElements = document.querySelectorAll(".reveal, .reveal-scale, .reveal-left, .reveal-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Optional: unobserve once revealed for performance
            // observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => observer.observe(el));

    // 2. Header Scroll Glassmorphism State
    const header = document.querySelector(".site-header");
    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 40) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
