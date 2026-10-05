"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function Strip() {
  const { d } = useLang();
  return (
    <div style={{ borderBottom: "1px solid var(--line2)", background: "#090910", overflow: "hidden", padding: "16px 0" }} aria-hidden="true">
      <div className="mono" style={{ textAlign: "center", marginBottom: 10, color: "var(--faint)" }}>{d.strip.label}</div>
      <div className="names">
        {[0, 1].map((k) => (
          <span key={k} style={{ display: "inline-flex" }}>
            {d.strip.names.map((n) => <span key={n}><b>✦</b> {n}</span>)}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Interlude() {
  const { d } = useLang();
  const t = d.inter;
  return (
    <section className="interlude">
      <div className="shell">
        <div className="mono reveal">{t.label}</div>
        <h2 className="huge reveal" style={{ marginTop: 14 }}>{t.h1}<br /><em>{t.h2}</em></h2>
        <p className="reveal" style={{ color: "var(--muted)", maxWidth: 520, margin: "16px auto 0", lineHeight: 1.75, fontSize: 15 }}>{t.p}</p>
        <div className="reveal" style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 22, flexWrap: "wrap" }}>
          <a href="#archive" className="btn btn-gold shine">{t.c1}</a>
          <a href="#contact" className="btn btn-line">{t.c2}</a>
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const { d } = useLang();
  const t = d.testi;
  return (
    <section style={{ padding: "clamp(50px,7vw,90px) 0" }}>
      <div className="shell">
        <div className="sec-head reveal">
          <div><div className="mono">{t.label}</div><h2>{t.t1}<br /><em>{t.t2}</em></h2></div>
          <span className="mono" style={{ border: "1px solid var(--line)", padding: "8px 14px" }}>{t.tag}</span>
        </div>
        <div className="testis">
          {t.items.map((x) => (
            <div className="testi reveal" key={x.n}>
              <span className="q">”</span>
              <div className="stars">★★★★★</div>
              <p>“{x.q}”</p>
              <small>— {x.n}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const { d } = useLang();
  const t = d.faq;
  const [open, setOpen] = useState(0);
  return (
    <section style={{ paddingBottom: "clamp(40px,6vw,70px)" }}>
      <div className="shell">
        <div className="mono reveal">{t.label}</div>
        <h2 className="reveal" style={{ fontFamily: "Fraunces,serif", fontSize: "clamp(28px,4vw,46px)", marginTop: 10 }}>{t.t1}<em style={{ color: "var(--gold2)" }}>{t.t2}</em></h2>
        <div className="faq reveal" style={{ marginTop: 18 }}>
          {t.items.map((f, i) => (
            <div className="faq-item" key={f.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{f.q}</span><span style={{ border: "1px solid var(--line2)", borderRadius: "50%", width: 30, height: 30, display: "grid", placeItems: "center", flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
              </button>
              <div className={`faq-a ${open === i ? "open" : ""}`}><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
