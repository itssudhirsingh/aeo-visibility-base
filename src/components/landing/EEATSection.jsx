import React from 'react';

const pillars = [
  { icon: '⚡', name: 'Experience', desc: 'First-hand content signals, case studies, real data and original research that AI models cannot find elsewhere.', bg: 'bg-primary/10 border-primary/20' },
  { icon: '🎓', name: 'Expertise', desc: 'Author credential markup, byline schema, linked professional profiles, and depth of topical coverage per domain.', bg: 'bg-accent/10 border-accent/20' },
  { icon: '🏅', name: 'Authoritativeness', desc: 'Backlink quality from trusted domains, mentions in credible publications, and citation frequency across LLMs themselves.', bg: 'bg-cyan-400/10 border-cyan-400/20' },
  { icon: '🛡', name: 'Trustworthiness', desc: 'SSL, privacy policy, transparent ownership, accurate factual claims, and structured citations with verifiable sources.', bg: 'bg-pink-400/10 border-pink-400/20' },
];

const bars = [
  { label: 'Experience', val: 78, from: '#c8f247', to: '#a3e635' },
  { label: 'Expertise', val: 65, from: '#7b6cff', to: '#a78bfa' },
  { label: 'Authoritativeness', val: 82, from: '#22d3ee', to: '#67e8f9' },
  { label: 'Trustworthiness', val: 71, from: '#f472b6', to: '#f9a8d4' },
];

export default function EEATSection() {
  return (
    <section id="eeat" className="py-28 px-6 md:px-14 max-w-[1320px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3 flex items-center gap-3">
            06 — Authority &amp; E-E-A-T <span className="w-8 h-px bg-border" />
          </div>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] tracking-tight mb-4">
            AI engines rank<br /><span className="text-muted-foreground">trusted sources</span><br />first.
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-10">
            Every major LLM uses authority signals to decide whose content to cite. AEOvision audits all four pillars of E-E-A-T and scores how you appear to AI crawlers.
          </p>
          <div className="flex flex-col gap-5">
            {pillars.map((p) => (
              <div key={p.name} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-base border ${p.bg}`}>{p.icon}</div>
                <div>
                  <div className="font-heading font-semibold text-sm mb-1">{p.name}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Score card */}
        <div style={{ animation: 'floatY 8s ease-in-out infinite' }}>
          <div className="bg-card border border-border rounded-2xl p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="font-heading font-semibold text-base">E-E-A-T Authority Score</div>
              </div>
              <span className="font-mono text-[0.62rem] text-white/20">thedressoutlet.com</span>
            </div>

            {/* Radar SVG */}
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 280 280" className="w-56 h-56">
                <defs>
                  <radialGradient id="radarFill" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#7b6cff" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#c8f247" stopOpacity="0.08" />
                  </radialGradient>
                </defs>
                <polygon points="140,40 240,110 200,220 80,220 40,110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <polygon points="140,75 210,122 183,197 97,197 70,122" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <polygon points="140,110 180,134 166,174 114,174 100,134" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                <line x1="140" y1="140" x2="140" y2="40" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="140" y1="140" x2="240" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="140" y1="140" x2="200" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="140" y1="140" x2="80" y2="220" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="140" y1="140" x2="40" y2="110" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <polygon points="140,62 218,116 189,206 91,206 62,116" fill="url(#radarFill)" stroke="#7b6cff" strokeWidth="1.5" strokeOpacity="0.7" />
                <circle cx="140" cy="62" r="4" fill="#c8f247" />
                <circle cx="218" cy="116" r="4" fill="#c8f247" />
                <circle cx="189" cy="206" r="4" fill="#c8f247" />
                <circle cx="91" cy="206" r="4" fill="#c8f247" />
                <circle cx="62" cy="116" r="4" fill="#c8f247" />
                <text x="140" y="32" textAnchor="middle" fill="rgba(237,233,255,0.5)" fontSize="10" fontFamily="JetBrains Mono">Experience 78</text>
                <text x="252" y="108" textAnchor="start" fill="rgba(237,233,255,0.5)" fontSize="10" fontFamily="JetBrains Mono">Auth. 82</text>
                <text x="205" y="236" textAnchor="middle" fill="rgba(237,233,255,0.5)" fontSize="10" fontFamily="JetBrains Mono">Trust 71</text>
                <text x="75" y="236" textAnchor="middle" fill="rgba(237,233,255,0.5)" fontSize="10" fontFamily="JetBrains Mono">Exp. 65</text>
                <text x="28" y="108" textAnchor="end" fill="rgba(237,233,255,0.5)" fontSize="10" fontFamily="JetBrains Mono">BLUF 74</text>
              </svg>
            </div>

            {/* Bar rows */}
            <div className="flex flex-col gap-3">
              {bars.map((b) => (
                <div key={b.label} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-32 flex-shrink-0">{b.label}</span>
                  <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${b.val}%`, background: `linear-gradient(90deg,${b.from},${b.to})` }} />
                  </div>
                  <span className="font-mono text-[0.65rem] text-white/30 w-5 text-right flex-shrink-0">{b.val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}