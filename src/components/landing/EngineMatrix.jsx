import React from 'react';

const llms = [
  { code: 'GPT', name: 'ChatGPT', color: '#10a37f' },
  { code: 'G', name: 'Gemini', color: '#4285f4' },
  { code: 'Px', name: 'Perplexity', color: '#ff6b35' },
  { code: 'Gk', name: 'Grok', color: '#1da1f2' },
  { code: 'Co', name: 'Copilot', color: '#7565d9' },
  { code: 'Cl', name: 'Claude', color: '#d97706' },
];

const rows = [
  { feat: 'Citation tracking', sub: 'How often your URL appears in answers', cells: ['Full','Full','Full','Partial','Full','Partial'] },
  { feat: 'Sentiment analysis', sub: 'Positive / neutral / negative mention tone', cells: ['Full','Full','Full','Full','Partial','Partial'] },
  { feat: 'Competitor gap detection', sub: 'Queries where rivals appear but you don\'t', cells: ['Full','Full','Full','Soon','Full','Soon'] },
  { feat: 'llms.txt crawl check', sub: 'Whether your AI allowlist is respected', cells: ['Full','Partial','Full','Soon','Partial','Full'] },
  { feat: 'BLUF content scoring', sub: 'How well your content answers directly', cells: ['Full','Full','Full','Full','Full','Full'] },
  { feat: 'Weekly trend tracking', sub: 'Citation delta week-over-week', cells: ['Full','Full','Full','Partial','Full','Partial'] },
  { feat: 'Real-time query probing', sub: 'Live prompt testing against your niche', cells: ['Full','Partial','Full','Soon','Partial','Soon'] },
];

const llmCards = [
  { code: 'GPT', name: 'ChatGPT', share: '~94% of AI-referred traffic', color: '#10a37f', coverage: 'Full', desc: 'The dominant AI chat platform. Heavily influenced by domain authority, structured data, and BLUF-formatted content. Most commercial intent queries originate here.', tags: ['Citations','Sentiment','Gaps','BLUF'] },
  { code: 'G', name: 'Gemini', share: 'Google-integrated, growing fast', color: '#4285f4', coverage: 'Full', desc: "Deeply tied to Google's knowledge graph and Search Quality Rater signals. E-E-A-T and schema markup have outsized influence on Gemini citations.", tags: ['E-E-A-T','Schema','Sentiment','Gaps'] },
  { code: 'Px', name: 'Perplexity', share: 'Real-time web retrieval model', color: '#ff6b35', coverage: 'Full', desc: 'Retrieves and cites live web sources in every answer. Sites with clear canonical structure, fast load, and cited sources rank disproportionately well here.', tags: ['Citations','Real-time','Canonical','BLUF'] },
  { code: 'Gk', name: 'Grok', share: 'X / Twitter realtime signals', color: '#1da1f2', coverage: 'Partial', desc: 'Uses realtime X (Twitter) data and web search. Social proof and trending content play a bigger role here than on other platforms.', tags: ['Social Signals','Trending','Partial'] },
];

function CellBadge({ val }) {
  if (val === 'Full') return <span className="font-mono text-[0.62rem] text-green-400 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded">Full</span>;
  if (val === 'Partial') return <span className="font-mono text-[0.62rem] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">Partial</span>;
  return <span className="font-mono text-[0.62rem] text-white/30 bg-white/[0.03] border border-border px-2 py-0.5 rounded">Soon</span>;
}

export default function EngineMatrix() {
  return (
    <section id="matrix" className="py-28 px-6 md:px-14 max-w-[1320px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-end mb-12">
        <div>
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3 flex items-center gap-3">
            04 — Engine Matrix <span className="w-8 h-px bg-border" />
          </div>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] tracking-tight">
            Deep-scan coverage<br /><span className="text-muted-foreground">across every LLM.</span>
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          We don't just check one AI. We probe each engine's own retrieval logic, citation behaviour, and content preference — so you know exactly where you stand on every platform your customers use.
        </p>
      </div>

      {/* Matrix table */}
      <div className="border border-border rounded-2xl overflow-hidden mb-8 overflow-x-auto">
        {/* Header */}
        <div className="grid bg-white/[0.02] border-b border-border" style={{ gridTemplateColumns: '2fr repeat(6, 1fr)', minWidth: '700px' }}>
          <div className="px-5 py-4 font-mono text-[0.6rem] tracking-[0.12em] uppercase text-white/20 border-r border-border">Capability</div>
          {llms.map((llm) => (
            <div key={llm.code} className="flex flex-col items-center justify-center py-3 border-r border-border last:border-r-0 gap-1.5">
              <div className="w-7 h-7 rounded-lg border flex items-center justify-center font-mono font-bold text-[0.6rem]"
                style={{ background: `${llm.color}1a`, borderColor: `${llm.color}33`, color: llm.color }}>
                {llm.code}
              </div>
              <span className="font-mono text-[0.58rem] text-white/20 tracking-wider">{llm.name}</span>
            </div>
          ))}
        </div>
        {rows.map((row, ri) => (
          <div key={ri} className="grid border-b border-border last:border-b-0 hover:bg-white/[0.015] transition-colors" style={{ gridTemplateColumns: '2fr repeat(6, 1fr)', minWidth: '700px' }}>
            <div className="px-5 py-3.5 border-r border-border">
              <div className="text-sm text-foreground">{row.feat}</div>
              <div className="font-mono text-[0.62rem] text-white/20">{row.sub}</div>
            </div>
            {row.cells.map((cell, ci) => (
              <div key={ci} className="flex items-center justify-center py-3.5 border-r border-border last:border-r-0">
                <CellBadge val={cell} />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* LLM detail cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {llmCards.map((llm) => (
          <div key={llm.code} className="bg-card border border-border rounded-xl p-5 hover:-translate-y-1 transition-all"
            style={{ '--c': llm.color }}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center font-mono font-bold text-[0.62rem] border"
                style={{ background: `${llm.color}1f`, borderColor: `${llm.color}3d`, color: llm.color }}>
                {llm.code}
              </div>
              <div className="flex-1">
                <div className="font-heading font-semibold text-sm mb-0.5">{llm.name}</div>
                <div className="font-mono text-[0.6rem] text-white/25">{llm.share}</div>
              </div>
              <span className="font-mono text-[0.6rem]" style={{ color: llm.coverage === 'Full' ? '#4ade80' : '#c8f247' }}>{llm.coverage}</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-3">{llm.desc}</p>
            <div className="flex flex-wrap gap-1">
              {llm.tags.map(tag => (
                <span key={tag} className="font-mono text-[0.58rem] text-white/25 border border-border px-2 py-0.5 rounded">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}