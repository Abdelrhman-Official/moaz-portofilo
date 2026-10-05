"use client";
import { useEffect, useRef } from "react";
import { useLang } from "@/lib/i18n";

export default function Manifesto() {
  const { d } = useLang();
  const m = d.mani;
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".dim");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("lit"); }),
      { threshold: 0.6 }
    );
    words.forEach((w, i) => { w.style.transitionDelay = (i * 40) + "ms"; io.observe(w); });
    return () => io.disconnect();
  }, [d]);

  return (
    <section className="manifesto">
      <div className="giant-bg" aria-hidden="true">15</div>
      <div className="shell">
        <div className="mono reveal">{m.label}</div>
        <p className="mani-text" ref={ref} style={{ marginTop: 16 }}>
          <em>{m.lead}</em>{" "}
          {m.words.map((w, i) => <span key={i} className="dim">{w} </span>)}
        </p>
        <div className="mani-foot">
          {m.minis.map((x) => (
            <div className="mini reveal" key={x.b}><b>{x.b}</b><p>{x.p}</p></div>
          ))}
        </div>
      </div>
    </section>
  );
}
