"use client";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export default function ContactFooter() {
  const { d } = useLang();
  const c = d.contact;
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="contact" id="contact">
        <div className="shell">
          <div className="mono reveal" style={{ textAlign: "center" }}>{c.label}</div>
          <h2 className="giant reveal">{c.g1}<em>{c.g2}</em></h2>
          <p className="reveal" style={{ textAlign: "center", color: "var(--muted)", marginTop: 12 }}>{c.sub}</p>
          <div className="steps-mini reveal" style={{ maxWidth: 860, margin: "22px auto 0" }}>
            {c.steps.map((s) => <div key={s.b}><b>{s.b}</b>{s.p}</div>)}
          </div>
          <div className="c-grid">
            <div className="card reveal">
              <h3>{c.direct}</h3>
              <div style={{ fontFamily: "Fraunces,serif", fontSize: 26 }}>{c.sharp}</div>
              <a className="clink" href={`mailto:${c.mail}`}>✉ {c.mail} <span>↗</span></a>
              <a className="clink" href="tel:+200000000000">◷ +20 00 000 0000 <span style={{ fontSize: 11, color: "var(--muted)" }}>{c.replace}</span></a>
              <a className="clink" href="https://wa.me/200000000000" target="_blank" rel="noreferrer">{c.fastest} <span>↗</span></a>
              <div className="mono" style={{ marginTop: 14, color: "var(--muted)" }}>{c.avail}</div>
            </div>
            <form
              className="card reveal"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const n = fd.get("name"), m = fd.get("msg");
                window.location.href = `mailto:${c.mail}?subject=${encodeURIComponent("Brief from " + n)}&body=${encodeURIComponent(m)}`;
                setSent(true);
              }}
            >
              <h3>{c.brief}</h3>
              <div className="f2">
                <div className="field"><label>{c.name}</label><input name="name" required placeholder={c.namePh} /></div>
                <div className="field"><label>{c.reach}</label><input required placeholder={c.reachPh} /></div>
              </div>
              <div className="f2">
                <div className="field"><label>{c.need}</label><select>{c.needs.map((n) => <option key={n}>{n}</option>)}</select></div>
                <div className="field"><label>{c.budget}</label><select>{c.budgets.map((n) => <option key={n}>{n}</option>)}</select></div>
              </div>
              <div className="field"><label>{c.msg}</label><textarea name="msg" required placeholder={c.msgPh} /></div>
              <button className="btn btn-gold shine" style={{ width: "100%", justifyContent: "center", padding: 15 }} type="submit">{c.send}</button>
              {sent && <div className="mono" style={{ marginTop: 10 }}>{c.sent}</div>}
            </form>
          </div>
        </div>
      </section>
      <footer>
        <div className="shell">
          <div className="f-row">
            <span>{d.footer.r}</span>
            <span>{d.footer.built}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
