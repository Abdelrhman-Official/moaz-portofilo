"use client";
import { useLang } from "@/lib/i18n";

export default function AtelierJourney() {
  const { d } = useLang();
  const a = d.atelier, j = d.journey;
  return (
    <>
      <section className="atelier shell" id="atelier">
        <div className="pattern reveal">
          <div className="arch-sm" style={{ background: "linear-gradient(170deg,#12372a,#65c9a8 60%,#f3e0b8)" }}>
            <div style={{ textAlign: "center", padding: 16 }}>
              <div className="mono" style={{ color: "#0a0a0a" }}>{a.ptag}</div>
              <div style={{ fontFamily: "Fraunces,serif", fontStyle: "italic", fontSize: 24, color: "#0a0a0a", lineHeight: 1.1 }}>Repeat,<br />cut, sew</div>
            </div>
          </div>
          <div className="mono" style={{ position: "absolute", bottom: 14, left: 14, right: 14, display: "flex", justifyContent: "space-between" }}>
            <span>{a.reptile}</span><span>{a.ph}</span>
          </div>
        </div>
        <div className="reveal">
          <div className="mono">{a.label}</div>
          <h2 style={{ fontFamily: "Fraunces,serif", fontSize: "clamp(32px,4.5vw,58px)", lineHeight: 1, marginTop: 12 }}>{a.a1}<em style={{ color: "var(--gold2)" }}>{a.a2}</em> {a.a3}</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.75, marginTop: 14, fontSize: 15 }}>{a.p}</p>
          <div className="chips" style={{ marginTop: 16 }}><span className="mono" style={{ border: "1px solid var(--line2)", borderRadius: 100, padding: "8px 14px", color: "var(--muted)" }}>{a.chip}</span></div>
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            <a href="#contact" className="btn btn-gold shine">{a.c1}</a>
            <a href="#archive" className="btn btn-line">{a.c2}</a>
          </div>
        </div>
      </section>

      <section className="shell journey" id="journey">
        <div className="card reveal">
          <h3>◉ {j.label}</h3>
          <p style={{ fontFamily: "Fraunces,serif", fontSize: 22, marginBottom: 6 }}>{j.t}</p>
          {j.jobs.map((job) => (
            <div className="job" key={job.h}>
              <h4>{job.h}</h4><small>{job.s}</small>
              {job.ul ? <ul>{job.ul.map((li) => <li key={li}>{li}</li>)}</ul> : <p>{job.p}</p>}
              {job.ph && <span className="ph-note">{job.ph}</span>}
            </div>
          ))}
        </div>
        <div className="card reveal">
          <h3>{j.stackT} <span style={{ float: "inline-end", color: "var(--faint)" }}>{j.stackSub}</span></h3>
          <div className="stack-grid">
            {j.tools.map(([t, v]) => (
              <div className="tool" key={t}><div><span>{t}</span><span>{v}%</span></div><div className="bar"><span style={{ width: v + "%" }} /></div></div>
            ))}
          </div>
          <span className="ph-note">{j.honest}</span>
          <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
            <span className="mono" style={{ border: "1px solid var(--line)", padding: "8px 12px", borderRadius: 100 }}>{j.formats}</span>
            <span className="mono" style={{ border: "1px solid var(--line2)", padding: "8px 12px", borderRadius: 100, color: "var(--muted)" }}>{j.aren}</span>
          </div>
        </div>
      </section>
    </>
  );
}
