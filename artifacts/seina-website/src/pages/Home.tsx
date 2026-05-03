import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero container">
        <ScrollReveal>
          <div className="hero__badges">
            <span className="tag">Lead Operations Center</span>
          </div>
          <h1>Built for marketing agencies that outperform.</h1>
          <p className="lede">
            Three AI models profile, vet, and audience-map any LinkedIn creator — turning days of strategic research into a single, audit-ready report.
          </p>
          <div className="hero__cta">
            <Link href="/book-demo" className="btn btn--primary" data-testid="link-hero-start">
              Get Started <span className="arrow">→</span>
            </Link>
            <Link href="/product" className="btn btn--secondary" data-testid="link-hero-product">
              Why seina
            </Link>
          </div>
        </ScrollReveal>
      </header>

      {/* PROBLEM (DARK) */}
      <section className="section section--dark">
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <span className="label-mono"><i className="pin"></i> The Problem</span>
              <h2 style={{ marginTop: 24 }}>The strategist vetted. The shortlist shipped. Then everything fell apart.</h2>
            </div>
          </ScrollReveal>

          <div className="cards3">
            {/* Card 1: Manual vetting bottleneck */}
            <ScrollReveal>
              <div className="card-illus">
                <div className="screws"><span></span><span></span><span></span><span></span></div>
                <svg viewBox="0 0 320 280" width="78%" style={{ overflow: "visible" }}>
                  <g>
                    <rect x="40" y="40" width="220" height="40" rx="3" fill="#1F1F1F" stroke="#3A3A3A" />
                    <circle cx="60" cy="60" r="8" fill="#FFE600" />
                    <rect x="78" y="52" width="100" height="6" rx="1" fill="#7A7A7A" />
                    <rect x="78" y="64" width="60" height="5" rx="1" fill="#3A3A3A" />
                    <text x="240" y="65" fill="#BFEB5F" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600">✓</text>
                  </g>
                  <g>
                    <rect x="40" y="92" width="220" height="40" rx="3" fill="#1F1F1F" stroke="#3A3A3A" />
                    <circle cx="60" cy="112" r="8" fill="#F8C4A6" />
                    <rect x="78" y="104" width="100" height="6" rx="1" fill="#7A7A7A" />
                    <rect x="78" y="116" width="60" height="5" rx="1" fill="#3A3A3A" />
                    <text x="240" y="117" fill="#FF6B35" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600">?</text>
                  </g>
                  <g>
                    <rect x="40" y="144" width="220" height="40" rx="3" fill="#1F1F1F" stroke="#3A3A3A" />
                    <circle cx="60" cy="164" r="8" fill="#B8E4F2" />
                    <rect x="78" y="156" width="100" height="6" rx="1" fill="#7A7A7A" />
                    <rect x="78" y="168" width="60" height="5" rx="1" fill="#3A3A3A" />
                    <text x="240" y="169" fill="#FF6B35" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600">?</text>
                  </g>
                  <g>
                    <rect x="40" y="196" width="220" height="40" rx="3" fill="#1F1F1F" stroke="#3A3A3A" opacity="0.5" />
                    <rect x="40" y="248" width="220" height="20" rx="3" fill="#1F1F1F" stroke="#3A3A3A" opacity="0.25" />
                  </g>
                </svg>
                <span className="pix-tag pix-tag--orange" style={{ position: "absolute", top: "8%", right: "8%" }}>Hours</span>
                <span className="pix-tag pix-tag--yellow" style={{ position: "absolute", bottom: "8%", left: "8%" }}>1 / 200</span>
              </div>
            </ScrollReveal>

            {/* Card 2: Engagement fraud */}
            <ScrollReveal>
              <div className="card-illus">
                <div className="screws"><span></span><span></span><span></span><span></span></div>
                <svg viewBox="0 0 320 260" width="80%" style={{ overflow: "visible" }}>
                  <line x1="20" y1="200" x2="300" y2="200" stroke="#3A3A3A" strokeWidth="1" />
                  <path d="M30 180 Q70 60 120 100 Q170 140 220 50 Q260 30 290 90" fill="none" stroke="#FF6B35" strokeWidth="2.5" className="flow-stroke" />
                  <path d="M30 180 L290 170" fill="none" stroke="#BFEB5F" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="220" y1="55" x2="240" y2="190" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="2 3" />
                  <text x="246" y="195" fill="#FF6B35" fontFamily="var(--font-mono)" fontSize="11" fontWeight="600">CRASH</text>
                </svg>
                <span className="pix-tag pix-tag--orange" style={{ position: "absolute", top: "14%", left: "8%" }}>Pods</span>
                <span className="pix-tag pix-tag--peach" style={{ position: "absolute", top: "14%", right: "8%" }}>Bots</span>
                <span className="pix-tag pix-tag--lime" style={{ position: "absolute", bottom: "8%", left: "8%" }}>Real Reach</span>
              </div>
            </ScrollReveal>

            {/* Card 3: ICP proof */}
            <ScrollReveal>
              <div className="card-illus">
                <div className="screws"><span></span><span></span><span></span><span></span></div>
                <svg viewBox="0 0 320 260" width="80%" style={{ overflow: "visible" }}>
                  <circle cx="120" cy="130" r="80" fill="none" stroke="#3A3A3A" strokeWidth="1.5" />
                  <text x="60" y="48" fill="#9A9A9A" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500" letterSpacing="1">FOLLOWERS</text>
                  <circle cx="220" cy="130" r="46" fill="none" stroke="#FFE600" strokeWidth="2" />
                  <text x="195" y="100" fill="#FFE600" fontFamily="var(--font-mono)" fontSize="10" fontWeight="600" letterSpacing="1">ICP?</text>
                  <ellipse cx="178" cy="130" rx="14" ry="38" fill="none" stroke="#FF6B35" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="170" y="135" fill="#FF6B35" fontFamily="var(--font-mono)" fontSize="20" fontWeight="700">?</text>
                </svg>
                <span className="pix-tag pix-tag--peach" style={{ position: "absolute", bottom: "8%", left: "8%" }}>Reactions</span>
                <span className="pix-tag pix-tag--yellow" style={{ position: "absolute", bottom: "8%", right: "8%" }}>Buyers</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="cards3__captions">
            <ScrollReveal>
              <h3>Manual creator vetting doesn't scale.</h3>
              <p>Strategists spend hours hand-reading LinkedIn profiles to judge persona, niche, and brand-voice fit. With hundreds of candidates per brief and dozens of briefs, this becomes the binding constraint on agency throughput.</p>
            </ScrollReveal>
            <ScrollReveal>
              <h3>Engagement fraud surfaces post-campaign.</h3>
              <p>Pods, generic comment rings, and bought connections inflate metrics until a brand campaign ships. Then the campaign underperforms, the brand asks why, and the agency absorbs refunds or relationship damage.</p>
            </ScrollReveal>
            <ScrollReveal>
              <h3>Brand clients demand ICP proof.</h3>
              <p>B2B brand clients ask who engages with a creator. Sales Navigator screenshots are not proof. Vanity metrics — followers, reactions — do not translate to buyer reach.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3 MODELS THAT DRIVE */}
      <section className="section" id="how" style={{ background: "var(--surface-50)" }}>
        <div className="container">
          <ScrollReveal>
            <div className="section__head">
              <span className="label-mono"><i className="pin"></i> 3 Models</span>
              <h2 style={{ marginTop: 24 }}>Three models that turn days of research into one audit-ready report.</h2>
            </div>
          </ScrollReveal>

          <div className="cards3">
            <ScrollReveal>
              <article className="model-card">
                <div className="badge"><span className="num">1</span> Model 01</div>
                <div className="illustration">
                  <svg viewBox="0 0 200 110" style={{ width: "80%" }}>
                    <rect x="20" y="20" width="160" height="14" rx="2" fill="#7B66E8" opacity="0.85" />
                    <rect x="20" y="40" width="120" height="10" rx="2" fill="#0F0F0F" opacity="0.15" />
                    <rect x="20" y="56" width="90" height="10" rx="2" fill="#0F0F0F" opacity="0.15" />
                    <rect x="20" y="72" width="140" height="10" rx="2" fill="#0F0F0F" opacity="0.15" />
                    <rect x="20" y="88" width="60" height="10" rx="2" fill="#0F0F0F" opacity="0.15" />
                  </svg>
                </div>
                <div className="name-row"><h3>Persona</h3><span className="alt">Profile Intelligence</span></div>
                <p>Reads a LinkedIn creator's profile and the last 90 days of activity, then returns a structured profile your team can act on.</p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="model-card">
                <div className="badge"><span className="num">2</span> Model 02</div>
                <div className="illustration">
                  <svg viewBox="0 0 200 110" style={{ width: "80%" }}>
                    <path d="M30 90 A70 70 0 0 1 170 90" fill="none" stroke="#0F0F0F" strokeWidth="1" opacity="0.15" />
                    <path d="M30 90 A70 70 0 0 1 130 32" fill="none" stroke="#FFE600" strokeWidth="6" strokeLinecap="round" />
                    <text x="100" y="76" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-pixel)" fontSize="34">78</text>
                    <text x="100" y="94" textAnchor="middle" fill="#9A9A9A" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.2">/100</text>
                  </svg>
                </div>
                <div className="name-row"><h3>Pulse</h3><span className="alt">Authenticity Check</span></div>
                <p>Uses the engager-comment data Persona has already pulled, plus the persona-type, to compare against cohort baselines for fraud detection.</p>
              </article>
            </ScrollReveal>

            <ScrollReveal>
              <article className="model-card">
                <div className="badge"><span className="num">3</span> Model 03</div>
                <div className="illustration">
                  <svg viewBox="0 0 200 110" style={{ width: "80%" }}>
                    <rect x="20" y="20" width="20" height="80" fill="#BFEB5F" />
                    <rect x="50" y="40" width="20" height="60" fill="#BFEB5F" opacity="0.85" />
                    <rect x="80" y="56" width="20" height="44" fill="#BFEB5F" opacity="0.7" />
                    <rect x="110" y="68" width="20" height="32" fill="#BFEB5F" opacity="0.55" />
                    <rect x="140" y="80" width="20" height="20" fill="#BFEB5F" opacity="0.4" />
                    <line x1="14" y1="100" x2="180" y2="100" stroke="#0F0F0F" strokeWidth="1" />
                    <text x="14" y="14" fill="#9A9A9A" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.2">ICP OVERLAP</text>
                  </svg>
                </div>
                <div className="name-row"><h3>Reach</h3><span className="alt">Audience X-ray</span></div>
                <p>Uses Persona's audience-proxy embedding for engager classification and ICP matching.</p>
              </article>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div style={{ marginTop: 48, textAlign: "center" }}>
              <Link href="/product" className="btn btn--secondary" data-testid="link-home-more">
                See How Each Model Works <span className="arrow">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bigcta">
        <div className="container">
          <ScrollReveal>
            <div className="bigcta__box">
              <h2>Convert influencer marketing from an assertion into a measurement — <span className="muted">at the creator layer, the engagement layer, and the audience layer.</span></h2>
              <Link href="/book-demo" className="btn btn--primary" data-testid="link-home-footer-cta">
                Get Started <span className="arrow">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
