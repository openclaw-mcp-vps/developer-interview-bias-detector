export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Hiring Fairness
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Detect Unconscious Bias in{' '}
          <span className="text-[#58a6ff]">Technical Interviews</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload interview transcripts and feedback. Our NLP engine scores bias patterns, flags risky language, and gives your team actionable reports — before a bad hire or a lawsuit.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19 / month
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required for 7-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Transcript Analysis', desc: 'Paste or upload interview notes. NLP detects coded language and sentiment shifts.' },
            { title: 'Bias Scoring', desc: 'Each interview gets a bias risk score across gender, ethnicity, age, and more.' },
            { title: 'Team Dashboard', desc: 'Track patterns across interviewers and roles over time with exportable reports.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited transcript uploads',
              'Bias scoring across 6 dimensions',
              'Interviewer pattern reports',
              'CSV & PDF export',
              'Up to 10 team seats',
              'Email support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What types of bias does it detect?',
              a: 'BiasCheck analyzes for gender, racial, age, affinity, halo/horn effect, and confirmation bias using NLP sentiment and keyword pattern models trained on HR research datasets.'
            },
            {
              q: 'Is our interview data kept private?',
              a: 'Yes. Transcripts are encrypted in transit and at rest, processed ephemerally for scoring, and never used to train models. You can delete all data at any time.'
            },
            {
              q: 'Can it integrate with our ATS?',
              a: 'We support CSV/paste import today. Native integrations with Greenhouse, Lever, and Workday are on the roadmap for Q3.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} BiasCheck. Built for fair hiring.
      </footer>
    </main>
  )
}
