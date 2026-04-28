"use client";

import { useRef, useState, type FormEvent } from "react";
import { IconCheck, IconShield } from "./icons";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "success" }
  | { kind: "error"; message: string };

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

export function Newsletter() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus({
        kind: "error",
        message:
          "Newsletter signup isn't wired up yet. Email hello@cicanda.com to be added manually.",
      });
      return;
    }

    setStatus({ kind: "sending" });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: new FormData(e.currentTarget),
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
            "We couldn't sign you up just now. Please try again in a moment.",
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
          {status.kind !== "success" ? (
            <form
              ref={formRef}
              action={ENDPOINT}
              method="POST"
              onSubmit={onSubmit}
              className="subscribe"
            >
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input
                type="hidden"
                name="subject"
                value="New CICANDA newsletter signup"
              />
              <input type="hidden" name="from_name" value="CICANDA Website" />
              <input
                type="hidden"
                name="redirect"
                value="https://cicanda.com/?subscribed=1"
              />
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                aria-label="Email address"
                required
              />
              <button type="submit" disabled={pending}>
                {pending ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          ) : (
            <div className="subscribe is-success">
              <IconCheck size={18} stroke={2.4} />
              <span style={{ marginLeft: 10 }}>
                You&rsquo;re in. Watch for our first note from{" "}
                <strong>hello@cicanda.com</strong>.
              </span>
            </div>
          )}
          {status.kind === "error" ? (
            <div
              className="subscribe__note"
              role="alert"
              style={{ color: "#FECACA" }}
            >
              {status.message}
            </div>
          ) : (
            <div className="subscribe__note">
              <IconShield size={14} /> We respect your inbox. Unsubscribe
              anytime.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
