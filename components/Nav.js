"use client";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";

const IDS = ["archive", "services", "method", "atelier", "journey"];

function CairoClock() {
  const [t, setT] = useState("--:--");
  useEffect(() => {
    const f = () => {
      try {
        setT(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Africa/Cairo" }).format(new Date()));
      } catch { setT(""); }
    };
    f();
    const id = setInterval(f, 30000);
    return () => clearInterval(id);
  }, []);
  return <span className="mono hide-m" style={{ color: "var(--faint)", border: "1px solid var(--line2)", borderRadius: 100, padding: "8px 12px" }}>CAIRO {t}</span>;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { lang, d, toggle } = useLang();
  const first = d.name.split(" ")[0], rest = d.name.split(" ").slice(1).join(" ");
  return (
    <>
      <div className="topbar">
        <a href="#top" className="wordmark" aria-label="Moaz Hussein — home">
          {first} <em>{rest}</em>
          <span className="wm-badge">{d.nav.badge}</span>
        </a>
        <nav>
          {d.nav.links.map((l, i) => <a key={l} href={"#" + IDS[i]}>{l}</a>)}
        </nav>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <CairoClock />
          <button className="lang-toggle" onClick={toggle} aria-label="switch language">
            <span className={lang === "en" ? "on" : ""}>EN</span>
            <span className={lang === "ar" ? "on" : ""}>عربي</span>
          </button>
          <a href="#contact" className="btn btn-gold shine">{d.nav.cta}</a>
          <button className="burger" onClick={() => setOpen(!open)} aria-label="menu">☰</button>
        </div>
      </div>
      {open && (
        <div style={{ background: "#050508", borderBottom: "1px solid var(--line2)", padding: 20, display: "flex", flexDirection: "column", gap: 14, fontSize: 22 }}>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-gold shine" style={{ justifyContent: "center" }}>{d.nav.cta}</a>
          {IDS.map((id, i) => (
            <a key={id} href={"#" + id} onClick={() => setOpen(false)}>{d.nav.links[i]}</a>
          ))}
        </div>
      )}
    </>
  );
}
