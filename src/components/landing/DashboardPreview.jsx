import React from 'react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="bg-[hsl(260,50%,4%)] border-y border-border">
      <div className="py-28 px-6 md:px-14 max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3 flex items-center gap-3">
              03 — Dashboard <span className="w-8 h-px bg-border" />
            </div>
            <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] tracking-tight">
              Your AI visibility<br /><span className="text-muted-foreground">command centre.</span>
            </h2>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Everything in one view. Track citations, monitor competitors, audit content, and action improvements without switching tools.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-[0_60px_120px_rgba(0,0,0,0.7)]">
          {/* Top bar */}
          <div className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.02] border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center font-mono text-[0.65rem] text-white/20 tracking-wider">app.aeovision.com — Dashboard</div>
            <div className="w-14" />
          </div>

          <div className="grid md:grid-cols-[200px_1fr] min-h-[480px]">
            {/* Sidebar */}
            <div className="hidden md:block border-r border-border bg-white/[0.01] py-5">
              <div className="px-5 pb-4 mb-3 border-b border-border flex items-center gap-2">
                <div className="w-5 h-5 rounded-md bg-gradient-to-br from-accent to-accent/60 flex-shrink-0" />
                <span className="font-heading font-bold text-sm">NotionCue</span>
              </div>
              {[
              { label: 'Overview', active: true },
              { label: 'Citations' },
              { label: 'Competitors' },
              { label: 'Content Gaps' },
              { label: 'Technical' },
              { label: 'Reports' }].
              map((item) =>
              <div key={item.label} className={`flex items-center gap-2.5 px-5 py-2.5 text-sm cursor-default transition-colors ${item.active ? 'text-foreground bg-accent/10 border-r-2 border-accent' : 'text-white/25 hover:text-white/50 hover:bg-white/[0.02]'}`}>
                  <div className={`w-3.5 h-3.5 rounded flex-shrink-0 ${item.active ? 'bg-accent' : 'bg-border'}`} />
                  {item.label}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 md:p-6 overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="font-heading font-semibold text-sm">AI Visibility Overview</span>
                <span className="font-mono text-[0.62rem] text-white/20">Last 30 days · thedressoutlet.com</span>
              </div>

              {/* KPI row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 mb-4">
                {[
                { val: '74', label: 'AEO Score', color: 'text-primary', delta: '▲ +12 this week', deltaColor: 'text-green-400' },
                { val: '2,841', label: 'Citations', color: 'text-foreground', delta: '▲ +340', deltaColor: 'text-green-400' },
                { val: '4/6', label: 'LLMs Found', color: 'text-foreground', delta: '▲ +1 LLM', deltaColor: 'text-green-400' },
                { val: '82%', label: 'Sentiment', color: 'text-cyan-400', delta: '— stable', deltaColor: 'text-white/20' }].
                map((kpi, i) =>
                <div key={i} className="bg-white/[0.03] border border-border rounded-xl p-3">
                    <div className={`font-heading font-bold text-2xl leading-none mb-0.5 ${kpi.color}`}>{kpi.val}</div>
                    <div className="font-mono text-[0.58rem] text-white/60 uppercase tracking-wider mb-1">{kpi.label}</div>
                    <span className={`font-mono text-[0.58rem] ${kpi.deltaColor}`}>{kpi.delta}</span>
                  </div>
                )}
              </div>

              {/* Chart */}
              <div className="bg-white/[0.02] border border-border rounded-xl p-4 mb-4 h-36 overflow-hidden relative">
                <svg viewBox="0 0 600 100" preserveAspectRatio="none" className="w-full h-full">
                  <defs>
                    <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#7b6cff" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#7b6cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <line x1="0" y1="25" x2="600" y2="25" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
                  <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
                  <line x1="0" y1="75" x2="600" y2="75" stroke="rgba(255,255,255,.04)" strokeWidth="1" />
                  <path d="M0,90 C50,85 100,80 150,70 C200,60 230,65 280,55 C330,45 370,50 420,38 C460,28 500,20 560,12 L600,10 L600,100 L0,100 Z" fill="url(#cg)" />
                  <path d="M0,90 C50,85 100,80 150,70 C200,60 230,65 280,55 C330,45 370,50 420,38 C460,28 500,20 560,12 L600,10" fill="none" stroke="#7b6cff" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="600" cy="10" r="4" fill="#c8f247" />
                </svg>
              </div>

              {/* Table */}
              <div className="text-xs">
                <div className="grid grid-cols-4 px-2 py-1.5 font-mono text-[0.58rem] text-white/20 uppercase tracking-wider border-b border-border">
                  <span>LLM Engine</span><span>Citations</span><span>Sentiment</span><span>Trend</span>
                </div>
                {[
                { name: 'ChatGPT', cit: '1,847', sent: 'Positive', trend: '▲ +18%', sentColor: 'text-green-400', trendColor: 'text-green-400' },
                { name: 'Perplexity', cit: '521', sent: 'Positive', trend: '▲ +5%', sentColor: 'text-green-400', trendColor: 'text-primary' },
                { name: 'Gemini', cit: '312', sent: 'Neutral', trend: '▲ +9%', sentColor: 'text-primary', trendColor: 'text-primary' },
                { name: 'Copilot', cit: '161', sent: 'Neutral', trend: '— 0%', sentColor: 'text-primary', trendColor: 'text-white/20' }].
                map((row, i) =>
                <div key={i} className="grid grid-cols-4 px-2 py-2.5 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors cursor-default text-xs">
                    <span className="text-foreground font-medium">{row.name}</span>
                    <span className="text-muted-foreground">{row.cit}</span>
                    <span className={`font-mono text-[0.62rem] ${row.sentColor}`}>{row.sent}</span>
                    <span className={`font-mono text-[0.62rem] ${row.trendColor}`}>{row.trend}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}