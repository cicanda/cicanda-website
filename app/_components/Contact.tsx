"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  IconCheck,
  IconMail,
  IconPhone,
  IconPin,
  IconSendPlane,
} from "./icons";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus({
        kind: "error",
        message:
          "The contact form isn't configured yet. Please email hello@cicanda.com directly.",
      });
      return;
    }

    setStatus({ kind: "sending" });

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New CICANDA contact form submission");
    formData.append("from_name", "CICANDA Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = (await res.json()) as { success?: boolean; message?: string };

      if (data.success) {
        setStatus({ kind: "success" });
        formRef.current?.reset();
      } else {
        setStatus({
          kind: "error",
          message:
            data.message ??
            "We couldn't send your message. Please try again in a moment.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message:
          "We couldn't reach our mail service. Please check your connection and try again.",
      });
    }
  };

  const pending = status.kind === "sending";

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__head">
          <div>
            <div className="section__kicker">Contact</div>
            <h2 className="section__title">
              Tell us what you&rsquo;re building. We&rsquo;ll come back within{" "}
              <span className="hl">one business day</span>.
            </h2>
          </div>
          <p className="section__lede">
            For new engagements, partnership requests or a quick question, the
            form below routes straight to the team. Prefer a call or an email?
            Details are on the right.
          </p>
        </div>
        <div className="contact-grid">
          <form ref={formRef} onSubmit={onSubmit}>
            {status.kind === "success" && (
              <div className="form-success">
                <IconCheck size={18} stroke={2.4} />
                <span>Thanks. Your note is on its way to the team.</span>
              </div>
            )}
            {status.kind === "error" && (
              <div className="form-error" role="alert">
                <span>{status.message}</span>
              </div>
            )}
            <div className="field__row">
              <label className="field">
                <span className="field__label">Your name</span>
                <input
                  className="field__input"
                  name="name"
                  placeholder="Jane Adeyemi"
                  required
                />
              </label>
              <label className="field">
                <span className="field__label">Email</span>
                <input
                  className="field__input"
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  required
                />
              </label>
            </div>
            <label className="field">
              <span className="field__label">Service of interest</span>
              <select className="field__select" name="service" defaultValue="">
                <option value="">Select a service…</option>
                <option>Information Technology</option>
                <option>Media &amp; PR</option>
                <option>Reseller &amp; Partnerships</option>
                <option>Not sure yet, let&rsquo;s talk</option>
              </select>
            </label>
            <label className="field">
              <span className="field__label">How can we help?</span>
              <textarea
                className="field__textarea"
                name="message"
                placeholder="A few lines about what you're working on, and any timing we should know about."
                required
              />
            </label>
            <button type="submit" className="btn btn--primary" disabled={pending}>
              {pending ? "Sending…" : "Send message"} <IconSendPlane />
            </button>
          </form>
          <aside className="contact-card">
            <h3>Reach the team directly.</h3>
            <p className="lede">
              Office hours run Monday to Friday, 09:00 – 18:00 WAT.
              International calls are routed to our Zagreb line outside those
              hours.
            </p>
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-item__icon">
                  <IconPin />
                </span>
                <div>
                  <div className="contact-item__label">Headquarters</div>
                  <div className="contact-item__value">
                    Aco Housing Estate Complex
                    <br />
                    Abuja, Nigeria
                  </div>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-item__icon">
                  <IconPhone />
                </span>
                <div>
                  <div className="contact-item__label">Phone</div>
                  <div className="contact-item__value">
                    <a href="tel:+2347065622760">+234 706 562 2760</a>{" "}
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>· NG</span>
                    <br />
                    <a href="tel:+385925067719">+385 92 506 7719</a>{" "}
                    <span style={{ color: "rgba(255,255,255,0.4)" }}>· HR</span>
                  </div>
                </div>
              </li>
              <li className="contact-item">
                <span className="contact-item__icon">
                  <IconMail />
                </span>
                <div>
                  <div className="contact-item__label">Email</div>
                  <div className="contact-item__value">
                    <a href="mailto:hello@cicanda.com">hello@cicanda.com</a>
                  </div>
                </div>
              </li>
            </ul>
            <div className="contact-card__footer">
              <span className="pulse" />
              <span>Currently accepting new engagements for Q2 / Q3 2026</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
