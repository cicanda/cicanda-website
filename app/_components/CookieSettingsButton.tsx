"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="cookie-settings-btn"
      onClick={() =>
        window.dispatchEvent(new CustomEvent("cicanda:open-cookie-settings"))
      }
    >
      Cookie Settings
    </button>
  );
}
