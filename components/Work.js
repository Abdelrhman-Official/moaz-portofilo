"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang, projects } from "@/lib/i18n";

const KEYS = ["all", "skincare", "spec", "fashion"];
function matchCat(p, f, filters) {
  const i = filters.indexOf(f);
  if (i <= 0) return true;
  const cat = (p.cat + " " + p.arCat).toLowerCase();
  if (KEYS[i] === "skincare") return cat.includes("skincare") || cat.includes("سكين");
  if (KEYS[i] === "spec") return cat.includes("spec") || cat.includes("تجريبي") || cat.includes("concept") || cat.includes("كونسبت");
  return cat.includes("fashion") || cat.includes("فاشون");
}

function Piece({ p }) {
  const [dead, setDead] = useState(false);
  if (!p.img || dead) {
    return (
      <div style={{ minHeight: 300, display: "grid", placeItems: "center", textAlign: "center", padding: "34px 22px", background: "linear-gradient(150deg,#1c1408,#3a2a12 60%,#E8C15A 140%)" }}>
        <div>
          <div className="mono" style={{ color: "rgba(0,0,0,.6)", marginBottom: 8 }}>{p.id} — {p.title}</div>
          <div className="bt" style={{ color: "#0a0a0a" }}>{p.title}</div>
        </div>
      </div>
    );
  }
  return <img src={p.img} alt={p.title} loading="lazy" onError={() => setDead(true)} style={{ width: "100%", height: "100%", minHeight: 300, maxHeight: 480, objectFit: "cover", display: "block" }} />;
}

export default function Work() {
  const { lang, d } = useLang();
  const w = d.work;
  const [open, setOpen] = useState("02");
  const [f, setF] = useState(w.filters[0]);
  const list = useMemo(() => projects.filter((p) => matchCat(p, f, w.filters)), [f, w.filters]);
  const countLine = `${list.length} ${f !== w.filters[0] ? `${w.in} ${f}` : w.total} — ${w.desc}`;

  return (
    <section className="work" id="archive">
      <div className="shell">
        <div className="sec-head reveal">
          <div>
            <div className="mono">{w.label}</div>
            <h2>{w.t1}<br /><em>{w.t2}</em></h2>
          </div>
          <div className="filters">
            {w.filters.map((x) => (
              <button key={x} className={f === x ? "on" : ""} onClick={() => { setF(x); setOpen(null); }}>{x}</button>
            ))}
          </div>
        </div>
        <p className="reveal" style={{ maxWidth: 600, color: "var(--muted)", fontSize: 14, lineHeight: 1.7, marginTop: 10 }}>{countLine}</p>

        <div className="index reveal">
          {list.map((p) => (
            <div key={p.id}>
              <div className="row" onClick={() => setOpen(open === p.id ? null : p.id)}>
                <span className="n">{p.id}</span>
                <span className="t">{p.title}<small>{lang === "ar" ? p.arMeta : p.meta}</small></span>
                <span className="cat hide-m">{lang === "ar" ? p.arCat : p.cat}</span>
                <span className="yr hide-m">{p.year}</span>
                <span className="go">{open === p.id ? "−" : "+"}</span>
              </div>
              <AnimatePresence initial={false}>
                {open === p.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div className="preview-inner">
                      <div className="browser">
                        <div className="browser-bar"><i /><i /><i /><span className="browser-url">{w.site}/{p.id} — {p.year}</span></div>
                        <Piece p={p} />
                      </div>
                      <div className="pd">
                        <span className="mono">{lang === "ar" ? p.arCat : p.cat} • {p.year}</span>
                        <p style={{ fontFamily: "Fraunces,serif", fontSize: 19, color: "var(--cream)", lineHeight: 1.5, marginTop: 10 }}>“{lang === "ar" ? p.arNote : p.note}”</p>
                        <div className="chips"><span>{w.before}</span><span>{w.mock}</span><span>{w.src}</span></div>
                        <div className="steps-mini">
                          <div><b>{w.role}</b>{w.roleV}</div>
                          <div><b>{w.stack}</b>{w.stackV}</div>
                          <div><b>{w.out}</b>{w.outV}</div>
                        </div>
                        <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                          <a className="btn btn-gold shine" href="#contact">{w.use}</a>
                          <button className="btn btn-line" onClick={() => setOpen(null)}>{w.close}</button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {list.length === 0 && <p style={{ color: "var(--muted)", padding: 20 }}>{w.empty}</p>}
      </div>
    </section>
  );
}
