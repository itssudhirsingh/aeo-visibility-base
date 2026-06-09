import React from 'react';

function CheckCard({ title, items, score }) {
  const iconMap = { pass: { icon: '✓', color: 'text-green-400' }, fail: { icon: '✗', color: 'text-red-400' }, warn: { icon: '△', color: 'text-primary' } };
  return (
    <div className="bg-card border border-border rounded-2xl p-7">
      <div className="font-heading font-semibold text-base mb-4 pb-3 border-b border-border">{title}</div>
      <div className="flex flex-col gap-2.5 mb-4">
        {items.map((item, i) => {
          const s = iconMap[item.status];
          return (
            <div key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
              <span className={`flex-shrink-0 text-xs mt-0.5 ${s.color}`}>{s.icon}</span>
              {item.text}
            </div>
          );
        })}
      </div>
      <div className="font-heading font-bold text-2xl">{score} <span className="text-sm text-muted-foreground font-normal">passed</span></div>
    </div>
  );
}

export default function FixOptimize() {
  return (
    <section id="fix" className="py-28 px-6 md:px-14 max-w-[1320px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-end mb-12">
        <div>
          <div className="font-mono text-[0.68rem] tracking-[0.18em] uppercase text-accent mb-3 flex items-center gap-3">
            05 — Fix &amp; Optimise <span className="w-8 h-px bg-border" />
          </div>
          <h2 className="font-heading font-bold text-[clamp(2rem,4vw,3.8rem)] leading-[1.05] tracking-tight">
            From audit<br /><span className="text-muted-foreground">to action.</span>
          </h2>
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          AEOvision doesn't just surface problems. Every issue comes with a one-click fix, a before/after preview, and an estimated citation impact so you know what to prioritise first.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 mb-4">
        {/* llms.txt Before/After */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded">Issue detected</span>
            <span className="font-heading font-semibold text-sm">llms.txt — malformed or missing</span>
          </div>
          <div className="grid md:grid-cols-[1fr_48px_1fr] gap-0 mb-5 items-stretch">
            {/* Before */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl border border-b-0 border-red-500/20 bg-red-500/5 font-mono text-[0.62rem] text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Before — what AI crawlers see
              </div>
              <div className="flex-1 border border-red-500/20 border-t-0 rounded-b-xl bg-red-500/[0.02] p-4">
                <pre className="font-mono text-[0.7rem] leading-[1.8] text-muted-foreground whitespace-pre-wrap">
                  <span className="text-white/20"># Missing required fields{'\n'}</span>
                  <span className="text-cyan-400">User-agent</span>{': GPTBot\n'}
                  <span className="text-red-400">Disallow: /{'\n'}</span>{'\n'}
                  <span className="text-white/20"># No llms.txt present at root{'\n'}</span>
                  <span className="text-red-400">404 — /llms.txt not found{'\n'}</span>{'\n'}
                  <span className="text-white/20"># AI crawlers blocked or confused{'\n'}</span>
                  <span className="text-red-400">No schema context provided</span>
                </pre>
              </div>
            </div>
            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center gap-1 text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span className="font-mono text-[0.5rem] uppercase tracking-widest text-white/20">Auto-fix</span>
              </div>
            </div>
            {/* After */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl border border-b-0 border-green-400/20 bg-green-400/5 font-mono text-[0.62rem] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                After — AEOvision generated
              </div>
              <div className="flex-1 border border-green-400/20 border-t-0 rounded-b-xl bg-green-400/[0.02] p-4">
                <pre className="font-mono text-[0.7rem] leading-[1.8] text-muted-foreground whitespace-pre-wrap">
                  <span className="text-white/20"># llms.txt — generated by AEOvision{'\n'}</span>
                  <span className="text-cyan-400">Name</span>{': The Dress Outlet\n'}
                  <span className="text-cyan-400">Description</span>{': US women\'s fashion retailer\n'}
                  <span className="text-cyan-400">Contact</span>{': seo@thedressoutlet.com\n\n'}
                  <span className="text-cyan-400">User-agent</span>{': GPTBot\n'}
                  <span className="text-green-400">Allow: /{'\n'}</span>{'\n'}
                  <span className="text-cyan-400">User-agent</span>{': Google-Extended\n'}
                  <span className="text-green-400">Allow: /collections/</span>
                </pre>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-white/[0.03] border border-border rounded-full px-4 py-2">
              📈 Est. citation impact: <strong className="text-green-400 ml-1">+28%</strong>&nbsp;within 30 days.
            </div>
            <button className="font-heading font-semibold text-xs text-primary-foreground bg-primary rounded-full px-5 py-2 hover:bg-[#d4ff55] transition-all">Copy generated file</button>
          </div>
        </div>

        {/* BLUF Before/After */}
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[0.6rem] tracking-[0.08em] uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded">Optimise</span>
            <span className="font-heading font-semibold text-sm">BLUF structure — content not AI-answer-ready</span>
          </div>
          <div className="grid md:grid-cols-[1fr_48px_1fr] gap-0 mb-5 items-stretch">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl border border-b-0 border-red-500/20 bg-red-500/5 font-mono text-[0.62rem] text-red-400">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                Before — buries the answer
              </div>
              <div className="flex-1 border border-red-500/20 border-t-0 rounded-b-xl bg-red-500/[0.02] p-4">
                <div className="font-heading font-semibold text-sm mb-2">About Our Evening Dresses</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Welcome to The Dress Outlet, where we have been selling dresses since 1998. Our store was founded with a passion for fashion and we believe every woman deserves to feel beautiful. We carry a wide range of styles across many categories...</p>
                <p className="font-mono text-[0.62rem] text-red-400 mt-3">⚠ Answer appears at paragraph 4 — AI stops reading at paragraph 1.</p>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="flex flex-col items-center gap-1 text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                <span className="font-mono text-[0.5rem] uppercase tracking-widest text-white/20">BLUF fix</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-t-xl border border-b-0 border-green-400/20 bg-green-400/5 font-mono text-[0.62rem] text-green-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                After — answer-first structure
              </div>
              <div className="flex-1 border border-green-400/20 border-t-0 rounded-b-xl bg-green-400/[0.02] p-4">
                <div className="font-heading font-semibold text-sm mb-2">Evening Dresses at The Dress Outlet</div>
                <div className="text-xs text-green-400 leading-relaxed px-3 py-2 bg-green-400/5 border-l-2 border-green-400 rounded-r-lg mb-2">The Dress Outlet sells formal and semi-formal evening dresses in sizes 0–30, priced from $49 to $299, with free shipping on orders over $75.</div>
                <p className="text-xs text-muted-foreground leading-relaxed">Founded in 1998, we specialise in occasion wear with new arrivals added weekly...</p>
                <p className="font-mono text-[0.62rem] text-green-400 mt-3">✦ Answer in sentence 1 — AI cites this directly.</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground bg-white/[0.03] border border-border rounded-full px-4 py-2">
              📈 Est. citation impact: <strong className="text-green-400 ml-1">+41%</strong>&nbsp;for product category queries.
            </div>
            <button className="font-heading font-semibold text-xs text-primary-foreground bg-primary rounded-full px-5 py-2 hover:bg-[#d4ff55] transition-all">Apply BLUF template</button>
          </div>
        </div>
      </div>

      {/* Check cards */}
      <div className="grid md:grid-cols-3 gap-4">
        <CheckCard title="Schema Markup" score="3/5" items={[
          { status: 'pass', text: 'Organization schema present.' },
          { status: 'pass', text: 'Product schema on PDPs.' },
          { status: 'fail', text: 'FAQ schema missing on blog posts.' },
          { status: 'fail', text: 'BreadcrumbList not implemented.' },
          { status: 'warn', text: 'Article schema incomplete.' },
        ]} />
        <CheckCard title="E-E-A-T Signals" score="2/5" items={[
          { status: 'pass', text: 'Author bylines present.' },
          { status: 'pass', text: 'About page indexed.' },
          { status: 'fail', text: 'No expert credentials linked.' },
          { status: 'fail', text: 'Citations / references missing.' },
          { status: 'warn', text: 'Review schema partial.' },
        ]} />
        <CheckCard title="Content Structure" score="3/5" items={[
          { status: 'pass', text: 'BLUF paragraphs on 61% of pages.' },
          { status: 'pass', text: 'H1 present on all pages.' },
          { status: 'pass', text: 'Definition sections present.' },
          { status: 'fail', text: 'FAQ blocks sparse on PDPs.' },
          { status: 'warn', text: 'Average answer depth: low.' },
        ]} />
      </div>
    </section>
  );
}