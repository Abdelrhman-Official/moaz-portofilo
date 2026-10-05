"use client";
import { useEffect, useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Work from "@/components/Work";
import ServicesProcess from "@/components/ServicesProcess";
import AtelierJourney from "@/components/AtelierJourney";
import ContactFooter from "@/components/ContactFooter";
import { Strip, Interlude, Testimonials, Faq } from "@/components/Extra";
import { LangProvider, useLang } from "@/lib/i18n";

function Ticker() {
  const { d } = useLang();
  const parts = d.ticker[0];
  const line = parts.map((p, i) => (i === 0 || i === parts.length - 1 ? <b key={i}>{p}</b> : p)).reduce((a, p, i) => (i === 0 ? [p] : [...a, " — ", p]), []);
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-inner">
        <span>{line}&nbsp;</span>
        <span>{line}&nbsp;</span>
      </div>
    </div>
  );
}

function Site() {
  const [glow, setGlow] = useState({ x: -600, y: -600 });
  const [prog, setProg] = useState(0);

  useEffect(() => {
    let lenis;
    (async () => {
      try {
        const Lenis = (await import("lenis")).default;
        lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
        const raf = (t) => {
          lenis.raf(t);
          requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
      } catch {}
    })();

    const onMove = (e) => setGlow({ x: e.clientX, y: e.clientY });
    const onScroll = () => {
      const h = document.documentElement;
      setProg(h.scrollTop / (h.scrollHeight - h.clientHeight || 1));
    };
    addEventListener("mousemove", onMove, { passive: true });
    addEventListener("scroll", onScroll, { passive: true });

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.transition = "all .8s cubic-bezier(.16,1,.3,1)";
            e.target.style.opacity = 1;
            e.target.style.transform = "none";
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    const watch = () => document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    watch();
    return () => {
      io.disconnect();
      removeEventListener("mousemove", onMove);
      removeEventListener("scroll", onScroll);
      try { lenis?.destroy(); } catch {}
    };
  }, []);

  return (
    <>
      <div className="progress" style={{ width: prog * 100 + "%" }} />
      <div className="cursor-glow" style={{ left: glow.x, top: glow.y }} aria-hidden="true" />
      <Ticker />
      <Nav />
      <main>
        <Hero />
        <Strip />
        <Manifesto />
        <Work />
        <Interlude />
        <ServicesProcess />
        <AtelierJourney />
        <Testimonials />
        <Faq />
        <ContactFooter />
      </main>
    </>
  );
}

export default function Page() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  );
}
