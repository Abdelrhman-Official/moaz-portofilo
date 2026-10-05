"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

function Counter({ to, suffix }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        let s = null;
        const tick = (t) => {
          if (!s) s = t;
          const p = Math.min((t - s) / 1400, 1);
          setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{v}<i>{suffix}</i></b>;
}

export default function Hero() {
  const { lang, d } = useLang();
  const h = d.hero;
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <header
      className="hero"
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div className="beam" aria-hidden="true" />
      <div className="orb" aria-hidden="true" style={{ left: "4%", top: "22%", width: 300, height: 300, background: "rgba(232,193,90,.16)", transform: `translate(${tilt.x * 40}px,${tilt.y * 30}px)` }} />
      <div className="orb" aria-hidden="true" style={{ right: "4%", top: "60%", width: 240, height: 240, background: "rgba(110,140,255,.12)", animationDelay: "-4s" }} />
      <div className="shell">
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
            <div className="kicker">
              <span className="tag">{h.avail}</span>
              <span className="tag dim">{h.loc}</span>
              <span className="tag dim">{h.est}</span>
            </div>
            <h1 className="display">
              <span className="l1">{h.l1}</span>
              <span className="l2">{h.l2}</span>
              <span className="l3">{h.l3a}<em>{h.l3b}</em></span>
            </h1>
            <p className="lede">{h.ledeA}<b>{h.ledeB}</b>{h.ledeC}</p>
            <div className="hero-actions">
              <a href="#archive" className="btn btn-gold shine">{h.cta1}</a>
              <a href="#contact" className="btn btn-line">{h.cta2}</a>
            </div>
            <div className="hero-meta">
              {h.stats.map((s) => (
                <div key={s.l}><Counter to={s.n} suffix={s.s} /><span>{s.l}</span></div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="arch-wrap"
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
              <defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <circle cx="50" cy="50" r="48" fill="#0b0b12" stroke="#E8C15A" strokeWidth="1" />
              <text fontSize="10.5" fill="#E8C15A" fontFamily="JetBrains Mono" letterSpacing="2"><textPath href="#c">{lang === "ar" ? "• معاذ حسين • ATELIER NOIR •" : "ATELIER NOIR • SINCE 2023 • MOAZ HUSSEIN •"}</textPath></text>
              <text x="50" y="58" textAnchor="middle" fontSize="24" fill="#F8DE8A" fontFamily="Fraunces" fontStyle="italic">M</text>
            </svg>
            <div className="float-chip chip-a" style={{ top: 40, left: -70, animationDelay: "-2s" }}>{h.chips[0].t}<small>{h.chips[0].s}</small></div>
            <div className="float-chip chip-b" style={{ top: "46%", right: -56, animationDelay: "-3.5s" }}>{h.chips[1].t}<small>{h.chips[1].s}</small></div>
            <div className="float-chip chip-c" style={{ bottom: 90, left: -56, animationDelay: "-1s" }}>{h.chips[2].t}<small>{h.chips[2].s}</small></div>
            <div className="arch">
              <img src="/moaz.jpg" alt="Moaz Hussein — portrait" />
              <div className="shade" aria-hidden="true" />
              <div className="arch-cap"><span>{h.fig}</span><span>{h.fig2}</span></div>
            </div>
            <span className="hand" style={{ position: "absolute", bottom: -14, insetInlineStart: -30, zIndex: 4 }}>{lang === "ar" ? "← أيوه، ده أنا" : "yep, that's me →"}</span>
          </motion.div>
        </div>
        <div className="hero-strip">
          {h.strip.map((s) => <div key={s}>{s}</div>)}
        </div>
      </div>
      <div className="bigmarq" aria-hidden="true">
        <div className="bigmarq-track">
          {[0, 1].map((k) => (
            <span key={k}>{h.marq.map((m, i) => <span key={m}>{m} <b>✦</b>{i < h.marq.length - 1 ? " " : ""}</span>)}&nbsp;</span>
          ))}
        </div>
      </div>
    </header>
  );
}
