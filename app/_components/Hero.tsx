import { IconArrow } from "./icons";

function DotMap() {
  const cols = 28,
    rows = 14,
    sx = 28,
    sy = 28;
  const dots: React.ReactElement[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * sx + 14;
      const y = r * sy + 14;
      const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
      const f = seed - Math.floor(seed);
      if (f < 0.55) continue;
      const radius = f > 0.85 ? 2.4 : f > 0.7 ? 1.8 : 1.3;
      dots.push(<circle key={`${r}-${c}`} cx={x} cy={y} r={radius} />);
    }
  }
  return (
    <svg
      className="hero__map"
      viewBox={`0 0 ${cols * sx} ${rows * sy}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {dots}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <DotMap />
        <span className="float-tri" style={{ top: "22%", left: "6%" }} />
        <span
          className="float-tri"
          style={{
            top: "70%",
            left: "40%",
            transform: "rotate(18deg)",
            opacity: 0.35,
          }}
        />
      </div>
      <div className="container hero__inner">
        <div>
          <span className="eyebrow">
            <span className="dot" />
            Now operating · Abuja, Nigeria
          </span>
          <h1>
            Reliable solutions,
            <br />
            <span className="accent">delivered</span> with intent
            <span className="tri" />
          </h1>
          <div className="hero__tagline">&ldquo;creating reliable solutions.&rdquo;</div>
          <p className="hero__lead">
            CICANDA is a Nigerian firm building dependable Information
            Technology, Media &amp; PR, and Reseller capability for
            organisations that need to move forward with confidence.
          </p>
          <div className="hero__ctas">
            <a href="#contact" className="btn btn--primary">
              Get in touch <IconArrow className="arrow" />
            </a>
            <a href="#services" className="btn btn--ghost">
              Explore services
            </a>
          </div>
          <div className="hero__strip">
            <div className="hero__strip-item">
              <div className="k">3</div>
              <div className="v">Service lines</div>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <div className="k">2</div>
              <div className="v">Continents served</div>
            </div>
            <div className="hero__strip-divider" />
            <div className="hero__strip-item">
              <div className="k">24/7</div>
              <div className="v">Partner support</div>
            </div>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card hero-card--main">
            <div className="label">Live engagement</div>
            <h3>
              Building infrastructure for Nigeria&rsquo;s next chapter, quietly,
              reliably, every day.
            </h3>
            <div className="meta">
              <span>Abuja</span>
              <span className="sep" />
              <span>Lagos</span>
              <span className="sep" />
              <span>Zagreb</span>
            </div>
          </div>
          <span className="hero-tri" />
        </div>
      </div>
    </section>
  );
}
