import { IconFB, IconIG, IconLI, IconX } from "./icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/cicanda-logo.svg" alt="CICANDA" />
            <p>
              Creating reliable solutions across Information Technology, Media
              &amp; PR, and Reseller partnerships. From Abuja, Nigeria.
            </p>
          </div>
          <div className="footer__col">
            <h5>Services</h5>
            <ul>
              <li>
                <a href="#services">Information Technology</a>
              </li>
              <li>
                <a href="#services">Media &amp; PR</a>
              </li>
              <li>
                <a href="#services">Reseller &amp; Partnerships</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#newsletter">Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Get in touch</h5>
            <ul>
              <li>
                <a href="mailto:hello@cicanda.com">hello@cicanda.com</a>
              </li>
              <li>
                <a href="tel:+2347065622760">+234 706 562 2760</a>
              </li>
              <li>
                <span style={{ color: "rgba(255,255,255,0.55)" }}>
                  Aco Housing Estate, Abuja
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 CICANDA Limited. All rights reserved.</span>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">
              <IconLI />
            </a>
            <a href="#" aria-label="X">
              <IconX />
            </a>
            <a href="#" aria-label="Instagram">
              <IconIG />
            </a>
            <a href="#" aria-label="Facebook">
              <IconFB />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
