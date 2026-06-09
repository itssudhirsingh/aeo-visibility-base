import React from 'react';

const trustStats = [
  { num: '40%', label: 'Average citation growth for Pro users in 60 days.' },
  { num: '3.2x', label: 'More LLM citations after implementing llms.txt fixes.' },
  { num: '89%', label: 'Of users found at least one critical AEO issue on first scan.' },
  { num: '22 days', label: 'Average time to see measurable citation improvement after fixes.' },
];

const evidenceCards = [
  {
    tag: 'E-commerce · Fashion', tagColor: 'text-primary border-primary/20 bg-primary/5',
    quote: '"Within 3 weeks of fixing our llms.txt and adding BLUF paragraphs to category pages, ChatGPT started citing us for \'best evening dresses\' queries. Traffic from AI sources went from near-zero to 33K sessions per month."',
    initials: 'SS', name: 'Sudhir Singh', role: 'Senior SEO Manager · The Dress Outlet',
    avatarFrom: '#7b6cff', avatarTo: '#c8f247',
    metric: '+340%', metricLabel: 'AI traffic'
  },
  {
    tag: 'EdTech · International', tagColor: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
    quote: '"We manage SEO for 35 global education domains. AEOvision gave us the first clear picture of which domains were being cited by Gemini and which weren\'t — it changed how we briefed content teams in every region."',
    initials: 'AM', name: 'Arun Mehta', role: 'Head of SEO · Global Education Group',
    avatarFrom: '#4285f4', avatarTo: '#22d3ee',
    metric: '35', metricLabel: 'Domains tracked'
  },
  {
    tag: 'Agency · Multi-client', tagColor: 'text-pink-400 border-pink-400/20 bg-pink-400/5',
    quote: '"Every client asks about AI search now. AEOvision lets me show them a score on day one, a fix list by day three, and measurable citation growth in the monthly report. It\'s become a core part of our SEO audits."',
    initials: 'PK', name: 'Priya Kapoor', role: 'Founder · Digital Growth Agency',
    avatarFrom: '#f472b6', avatarTo: '#fb923c',
    metric: '18', metricLabel: 'Client accounts'
  },
];

const toolIntel = [
  {
    name: 'ChatGPT / GPT-4o', color: '#10a37f',
    good: ['Content answers a question in the first 2 sentences.', 'Page has high domain authority (DA 40+) and backlinks.', 'Organization schema with niche topical authority signals.'],
    bad: ['Burying answers in long preamble paragraphs.', 'Pages with thin content under 400 words.'],
  },
  {
    name: 'Gemini (Google)', color: '#4285f4',
    good: ['Full E-E-A-T signals: author schema, credentials, about page.', 'Structured data with FAQPage, HowTo, and Article schema.', "Content aligned with Google's YMYL quality standards."],
    bad: ['Anonymous content with no author attribution.', 'Pages blocked from Google-Extended in robots.txt.'],
  },
  {
    name: 'Perplexity', color: '#ff6b35',
    good: ['Clean canonical URLs with fast load (CWV: Good).', 'Factual claims are sourced and linked to primary references.', 'Content is structured for scanning: subheadings, bullets, tables.'],
    bad: ['JavaScript-rendered content that blocks real-time crawling.', 'Duplicate content across multiple parameterised URLs.'],
  },
];

export default function EvidenceSection() {
  return (
    <section id="results" className="py-28 px-6 md:px-14 max-w-[1320px] mx-auto">
      <div className="text-center mb-14">
        <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3 flex items-center justify-center gap-3">
          07 — Evidence
        </div>
        <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] tracking-tight mb-3">
          Numbers from<br /><span className="text-muted-foreground">real users.</span>
        </h2>
        <p className="text-base text-muted-foreground">Aggregated from 3,400+ domains scanned in the last 90 days.</p>
      </div>

      {/* Trust bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 bg-[hsl(260,50%,4%)] border border-border rounded-2xl overflow-hidden mb-12">
        {trustStats.map((s, i) => (
          <div key={i} className={`p-8 text-center ${i < 3 ? 'border-r border-border' : ''} border-b lg:border-b-0 border-border`}>
            <div className="font-heading font-bold text-4xl text-primary leading-none mb-2">{s.num}</div>
            <div className="text-xs text-muted-foreground leading-relaxed max-w-[160px] mx-auto">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Evidence cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {evidenceCards.map((card) => (
          <div key={card.name} className="bg-card border border-border rounded-2xl p-7 flex flex-col gap-5 hover:-translate-y-1 hover:border-white/15 transition-all">
            <span className={`self-start font-mono text-[0.62rem] tracking-[0.08em] uppercase border px-2.5 py-1 rounded ${card.tagColor}`}>{card.tag}</span>
            <p className="text-sm text-muted-foreground leading-relaxed italic flex-1">{card.quote}</p>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center font-heading font-bold text-xs text-white"
                style={{ background: `linear-gradient(135deg,${card.avatarFrom},${card.avatarTo})` }}>
                {card.initials}
              </div>
              <div className="flex-1">
                <div className="font-heading font-semibold text-sm">{card.name}</div>
                <div className="text-xs text-white/25">{card.role}</div>
              </div>
              <div className="text-right">
                <div className="font-heading font-bold text-xl text-primary leading-none">{card.metric}</div>
                <div className="font-mono text-[0.58rem] text-white/20 tracking-wider">{card.metricLabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tool Intelligence */}
      <div>
        <div className="mb-6">
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-2 flex items-center gap-3">Tool Intelligence <span className="w-8 h-px bg-border" /></div>
          <h3 className="font-heading font-bold text-2xl tracking-tight">What each AI engine <span className="text-muted-foreground">actually rewards.</span></h3>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {toolIntel.map((tool) => (
            <div key={tool.name} className="bg-card border border-border rounded-xl p-5 hover:border-white/15 transition-colors">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b" style={{ borderColor: `${tool.color}33` }}>
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: tool.color }} />
                <span className="font-heading font-semibold text-sm">{tool.name}</span>
              </div>
              <div className="mb-3">
                <div className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-white/20 mb-2">Best cited when...</div>
                <ul className="flex flex-col gap-1.5">
                  {tool.good.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed pl-3.5 relative">
                      <span className="absolute left-0 top-0.5 text-green-400 text-[0.55rem]">✦</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-mono text-[0.58rem] tracking-[0.1em] uppercase text-white/20 mb-2">Avoid...</div>
                <ul className="flex flex-col gap-1.5">
                  {tool.bad.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed pl-3.5 relative">
                      <span className="absolute left-0 top-0.5 text-red-400 text-[0.55rem]">✕</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}