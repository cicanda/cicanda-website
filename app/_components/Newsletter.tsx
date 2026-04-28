"use client";

import { useState, type FormEvent } from "react";
import { IconCheck, IconShield } from "./icons";

type State = "idle" | "loading" | "done";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setState("loading");
    setTimeout(() => setState("done"), 700);
  };

  return (
    <section className="newsletter" id="newsletter">
      <div className="container newsletter__inner">
        <div>
          <div
            className="section__kicker"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            <span style={{ background: "var(--c-orange)" }} />
            Stay in the loop
          </div>
          <h2>Updates from the CICANDA desk. Once a month, no noise.</h2>
          <p>
            Brief notes on what we&rsquo;re shipping, what we&rsquo;re seeing in
            the market, and the occasional perspective worth your inbox.
          </p>
        </div>
        <div>
          {state !== "done" ? (
            <form className="subscribe" onSubmit={submit}>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
                required
              />
              <button type="submit" disabled={state === "loading"}>
                {state === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          ) : (
            <div className="subscribe is-success">
              <IconCheck size={18} stroke={2.4} />
              <span style={{ marginLeft: 10 }}>
                You&rsquo;re in. Watch for our first note from{" "}
                <strong>info@cicanda.com</strong>.
              </span>
            </div>
          )}
          <div className="subscribe__note">
            <IconShield size={14} /> We respect your inbox. Unsubscribe anytime.
          </div>
        </div>
      </div>
    </section>
  );
}
