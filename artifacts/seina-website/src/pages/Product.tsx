import { Link } from "wouter";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Product() {
  return (
    <>
      {/* HERO */}
      <header className="hero hero--split">
        <div className="container">
          <ScrollReveal>
            <div className="hero__inner">
              <div>
                <span className="tag">Platform</span>
                <h1>We Make It Convert.</h1>
                <p className="lede">
                  Seina plugs into your website and CRM, segments visitors in real time, and turns one LinkedIn URL into <b>three parallel intelligence streams</b> — profile, authenticity, audience.
                </p>
                <div className="hero__cta">
                  <Link href="/book-demo" className="btn btn--primary" data-testid="link-product-demo">
                    See It In Action <span className="arrow">→</span>
                  </Link>
                </div>
              </div>

              {/* Flow illustration */}
              <div className="float float--d2">
                <svg viewBox="0 0 520 460" style={{ width: "100%", height: "auto" }}>
                  <g>
                    <rect x="180" y="20" width="160" height="56" rx="8" fill="#0F0F0F" />
                    <text x="260" y="44" textAnchor="middle" fill="#9A9A9A" fontFamily="var(--font-mono)" fontSize="10" letterSpacing="1.5">LINKEDIN URL</text>
                    <text x="260" y="62" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="11">/in/creator</text>
                  </g>
                  <path d="M260 76 L100 180" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" />
                  <path d="M260 76 L260 180" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" style={{ animationDelay: ".4s" }} />
                  <path d="M260 76 L420 180" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" style={{ animationDelay: ".8s" }} />
                  <g>
                    <rect x="36" y="180" width="128" height="92" rx="6" fill="#7B66E8" />
                    <text x="100" y="216" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-display)" fontSize="20" fontWeight="600">Persona</text>
                    <text x="100" y="240" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5" opacity="0.85">PROFILE</text>
                  </g>
                  <g>
                    <rect x="196" y="180" width="128" height="92" rx="6" fill="#FFE600" />
                    <text x="260" y="216" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-display)" fontSize="20" fontWeight="600">Pulse</text>
                    <text x="260" y="240" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5" opacity="0.7">AUTHENTICITY</text>
                  </g>
                  <g>
                    <rect x="356" y="180" width="128" height="92" rx="6" fill="#BFEB5F" />
                    <text x="420" y="216" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-display)" fontSize="20" fontWeight="600">Reach</text>
                    <text x="420" y="240" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5" opacity="0.7">AUDIENCE</text>
                  </g>
                  <path d="M100 272 L260 380" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" />
                  <path d="M260 272 L260 380" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" style={{ animationDelay: ".4s" }} />
                  <path d="M420 272 L260 380" stroke="#CFCFCF" strokeWidth="1.5" fill="none" className="flow-stroke" style={{ animationDelay: ".8s" }} />
                  <g>
                    <rect x="160" y="380" width="200" height="60" rx="8" fill="#FFFFFF" stroke="#0F0F0F" strokeWidth="1.5" />
                    <text x="260" y="404" textAnchor="middle" fill="#9A9A9A" fontFamily="var(--font-mono)" fontSize="9" letterSpacing="1.5">OUTPUT</text>
                    <text x="260" y="424" textAnchor="middle" fill="#0F0F0F" fontFamily="var(--font-display)" fontSize="14" fontWeight="500">Audit-ready report</text>
                  </g>
                  <circle cx="260" cy="128" r="3" fill="#FF6B35" className="flow-dot" />
                  <circle cx="180" cy="328" r="3" fill="#FF6B35" className="flow-dot" style={{ animationDelay: ".6s" }} />
                  <circle cx="340" cy="328" r="3" fill="#FF6B35" className="flow-dot" style={{ animationDelay: "1.2s" }} />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      {/* PERSONA */}
      <section className="section section--cyan" id="persona">
        <div className="container">
          <ScrollReveal>
            <div className="split">
              <div>
                <div className="float" style={{ background: "#FFFFFF", borderRadius: 12, padding: 24, boxShadow: "0 1px 0 rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span className="pix-tag pix-tag--purple" style={{ borderColor: "transparent" }}>Persona</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>Output · 90 days</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em", fontWeight: 500 }}>Persona Type</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 600, color: "#0F0F0F", margin: "4px 0 22px", letterSpacing: "-0.015em" }}>Practitioner Operator</div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>Topic Distribution</div>
                  <div style={{ display: "flex", height: 10, borderRadius: 4, overflow: "hidden", marginBottom: 18 }}>
                    <div style={{ flex: 6, background: "#7B66E8" }}></div>
                    <div style={{ flex: 3, background: "#FFE600" }}></div>
                    <div style={{ flex: 2, background: "#BFEB5F" }}></div>
                    <div style={{ flex: 1, background: "#F8C4A6" }}></div>
                  </div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>Tone Vector · 6 dimensions</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6, marginBottom: 18, height: 42, alignItems: "end" }}>
                    <div style={{ height: "85%", background: "#0F0F0F", borderRadius: 2 }}></div>
                    <div style={{ height: "55%", background: "#0F0F0F", borderRadius: 2 }}></div>
                    <div style={{ height: "100%", background: "#0F0F0F", borderRadius: 2 }}></div>
                    <div style={{ height: "70%", background: "#0F0F0F", borderRadius: 2 }}></div>
                    <div style={{ height: "40%", background: "#0F0F0F", borderRadius: 2 }}></div>
                    <div style={{ height: "78%", background: "#0F0F0F", borderRadius: 2 }}></div>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>Cadence</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#0F0F0F" }}>4.2 / week</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>Insight Density</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 600, color: "#0F0F0F" }}>High</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="label-mono"><i className="pin"></i> Persona · Model 01</span>
                <h2 style={{ margin: "24px 0" }}>Read 47 LinkedIn pages without reading 47 LinkedIn pages.</h2>
                <p>Persona reads a creator's last 90 days of activity — profile, posts, comments, engagement metadata — and returns a structured profile your team can act on.</p>
                <ul className="spec-list">
                  <li><span className="dot"></span> 7-class persona type</li>
                  <li><span className="dot"></span> Topic distribution across B2B niches</li>
                  <li><span className="dot"></span> Tone vector across 6 dimensions</li>
                  <li><span className="dot"></span> Posting cadence and content-type mix</li>
                  <li><span className="dot"></span> Signature phrases & insight density</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PULSE */}
      <section className="section section--dark" id="pulse">
        <div className="container">
          <ScrollReveal>
            <div className="split split--reverse">
              <div>
                <div className="float float--d2" style={{ background: "#141414", border: "1px solid #2A2A2A", borderRadius: 12, padding: 28 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                    <span className="pix-tag pix-tag--yellow" style={{ borderColor: "transparent" }}>Pulse</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: ".08em" }}>Authenticity Composite</span>
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-end", gap: 18, marginBottom: 28 }}>
                    <div style={{ fontFamily: "var(--font-pixel)", fontSize: 120, lineHeight: 0.85, color: "#FFE600" }}>62</div>
                    <div style={{ paddingBottom: 14 }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: ".08em" }}>Score / 100</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "#FFFFFF", marginTop: 2 }}>Moderate Risk</div>
                    </div>
                  </div>

                  <div style={{ height: 6, background: "#2A2A2A", borderRadius: 3, overflow: "hidden", marginBottom: 24 }}>
                    <div style={{ width: "62%", height: "100%", background: "linear-gradient(90deg,#FFE600,#FF6B35)" }}></div>
                  </div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#7A7A7A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 12 }}>Detected Flags · 6 detectors</div>
                  <div style={{ display: "grid", gap: 10 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "8px 1fr auto", gap: 12, alignItems: "center" }}>
                      <span style={{ width: 8, height: 8, background: "#FF6B35", borderRadius: "50%" }}></span>
                      <span style={{ color: "#FFFFFF", fontSize: 14 }}>Engagement-pod reciprocity</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FF6B35" }}>HIGH</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "8px 1fr auto", gap: 12, alignItems: "center" }}>
                      <span style={{ width: 8, height: 8, background: "#FFE600", borderRadius: "50%" }}></span>
                      <span style={{ color: "#FFFFFF", fontSize: 14 }}>Generic-comment ratio</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FFE600" }}>MED</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "8px 1fr auto", gap: 12, alignItems: "center" }}>
                      <span style={{ width: 8, height: 8, background: "#BFEB5F", borderRadius: "50%" }}></span>
                      <span style={{ color: "#FFFFFF", fontSize: 14 }}>Connection-velocity anomaly</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#BFEB5F" }}>LOW</span>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "8px 1fr auto", gap: 12, alignItems: "center" }}>
                      <span style={{ width: 8, height: 8, background: "#FFE600", borderRadius: "50%" }}></span>
                      <span style={{ color: "#FFFFFF", fontSize: 14 }}>Comment timing-burst</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#FFE600" }}>MED</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="label-mono"><i className="pin"></i> Pulse · Model 02</span>
                <h2 style={{ margin: "24px 0" }}>Six detectors. One Authenticity Composite Score.</h2>
                <p>Pulse runs six independent detectors across 90 days of activity. Each targets a different fraud signature. Results combine into one Authenticity Composite Score with severity-ranked, evidence-backed flags.</p>
                <ul className="spec-list">
                  <li><span className="dot"></span> Generic-comment ratio</li>
                  <li><span className="dot"></span> Engagement-pod reciprocity graph</li>
                  <li><span className="dot"></span> Connection-velocity anomaly</li>
                  <li><span className="dot"></span> Audience–creator coherence</li>
                  <li><span className="dot"></span> Comment timing-burst detection</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* REACH */}
      <section className="section section--cyan" id="reach">
        <div className="container">
          <ScrollReveal>
            <div className="split">
              <div>
                <div className="float float--d3" style={{ background: "#FFFFFF", borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span className="pix-tag pix-tag--lime" style={{ borderColor: "transparent" }}>Reach</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>500 Engagers Sampled</span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 24 }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>ICP Overlap</div>
                      <div style={{ fontFamily: "var(--font-pixel)", fontSize: 64, lineHeight: 0.9, color: "#0F0F0F" }}>73<span style={{ fontSize: 32, color: "#9A9A9A" }}>%</span></div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em" }}>Account Reach</div>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 600, color: "#0F0F0F" }}>~2,140</div>
                    </div>
                  </div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>Seniority · 6 levels</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 6, marginBottom: 18, alignItems: "end", height: 60 }}>
                    <div style={{ height: "30%", background: "#B8E4F2", borderRadius: 2 }}></div>
                    <div style={{ height: "55%", background: "#7B66E8", borderRadius: 2 }}></div>
                    <div style={{ height: "90%", background: "#7B66E8", borderRadius: 2 }}></div>
                    <div style={{ height: "75%", background: "#7B66E8", borderRadius: 2 }}></div>
                    <div style={{ height: "45%", background: "#B8E4F2", borderRadius: 2 }}></div>
                    <div style={{ height: "20%", background: "#B8E4F2", borderRadius: 2 }}></div>
                  </div>

                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#9A9A9A", textTransform: "uppercase", letterSpacing: ".08em", marginBottom: 10 }}>Top Industries</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    <span className="pix-tag pix-tag--cyan" style={{ borderColor: "transparent" }}>SaaS · 38%</span>
                    <span className="pix-tag" style={{ background: "#F2F2F2", borderColor: "transparent" }}>Fintech · 22%</span>
                    <span className="pix-tag" style={{ background: "#F2F2F2", borderColor: "transparent" }}>Cybersec · 14%</span>
                    <span className="pix-tag" style={{ background: "#F2F2F2", borderColor: "transparent" }}>+57</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="label-mono"><i className="pin"></i> Reach · Model 03</span>
                <h2 style={{ margin: "24px 0" }}>Sample 500 real engagers. Score them against your ICP.</h2>
                <p>Reach samples up to 500 of the creator's actual engagers — the people who comment, react, and repost. Each is classified across five dimensions and aggregated into a distributional analysis. Pass your target ICP and get an overlap score per dimension.</p>
                <ul className="spec-list">
                  <li><span className="dot"></span> Title distribution</li>
                  <li><span className="dot"></span> Seniority distribution across 6 levels</li>
                  <li><span className="dot"></span> Industry distribution across 60 B2B classes</li>
                  <li><span className="dot"></span> Company-size and geography</li>
                  <li><span className="dot"></span> ICP overlap scoring · ABM account-reach estimation</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BRIDGE */}
      <div className="bridge">
        <ScrollReveal>
          <p>All three work from the same LinkedIn URL. <span className="accent">In parallel.</span></p>
        </ScrollReveal>
      </div>

      {/* BOTTOM CTA */}
      <section className="bigcta">
        <div className="container">
          <ScrollReveal>
            <div className="bigcta__box">
              <h2>Convert influencer marketing from an assertion into a measurement — <span className="muted">at the creator layer, the engagement layer, and the audience layer.</span></h2>
              <Link href="/login" className="btn btn--primary" data-testid="link-product-footer-cta">
                Get Started <span className="arrow">→</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
