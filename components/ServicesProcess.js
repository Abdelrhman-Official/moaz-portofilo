"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/i18n";

export default function ServicesProcess() {
  const { d } = useLang();
  const s = d.svc, m = d.method;
  const [open, setOpen] = useState(0);
  return (
    <>
      <section id="services" style={{ padding: "20px 0 60px" }}>
        <div className="shell">
          <div className="sec-head reveal">
            <div><div className="mono">{s.label}</div><h2>{s.t1}<em>{s.t2}</em></h2></div>
            <span className="mono" style={{ border: "1px solid var(--line)", padding: "8px 14px" }}>{s.tag}</span>
          </div>
          <div className="serv reveal" style={{ marginTop: 20 }}>
            {s.items.map((it, i) => (
              <div className="acc" key={it.t}>
                <button className="acc-head" onClick={() => setOpen(open === i ? -1 : i)}>
                  <span className="n">/{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{it.t}</span>
                  <span style={{ border: "1px solid var(--line2)", borderRadius: "50%", width: 36, height: 36, display: "grid", placeItems: "center", flexShrink: 0 }}>{open === i ? "−" : "+"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45 }} style={{ overflow: "hidden" }}>
                      <div className="acc-inner">{it.d}<div className="chips">{it.tags.map((t) => <span key={t}>{t}</span>)}</div></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="method" id="method">
        <div className="shell">
          <div className="sec-head reveal" style={{ paddingTop: 34 }}>
            <div><div className="mono">{m.label}</div><h2>{m.t1}<em>{m.t2}</em></h2></div>
            <span className="mono">{m.drag}</span>
          </div>
          <div className="hscroll reveal">
            {m.steps.map((st, i) => (
              <div className="step" key={st.t}><b>{String(i + 1).padStart(2, "0")}</b><h4>{st.t}</h4><p>{st.d}</p><div className="mono" style={{ marginTop: 14, color: "inherit", opacity: .7 }}>{m.phase} {String(i + 1).padStart(2, "0")} — {m.fixed}</div></div>
            ))}
            <div className="step" style={{ borderStyle: "dashed" }}><b>✦</b><h4>{m.yourT}</h4><p>{m.yourD}</p><a href="#contact" className="btn btn-gold" style={{ marginTop: 14 }}>{m.avail}</a></div>
          </div>
        </div>
      </section>
    </>
  );
}
