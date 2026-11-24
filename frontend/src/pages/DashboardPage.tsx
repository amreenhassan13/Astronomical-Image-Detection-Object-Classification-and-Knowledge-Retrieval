import { Link } from 'react-router'
import HealthBanner from '../components/HealthBanner'
import MoonIcon from '../components/MoonIcon'
import { fromNow, pct } from '../lib/format'
import { moonToday, PHASE_NAMES } from '../lib/moon'

export default function DashboardPage() {
  const moon = moonToday(new Date(), 2)

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-display text-4xl sm:text-5xl">Dashboard</h1>
        <p className="mt-2 text-muted">Tonight's Moon, the astronomy assistant, and the system status.</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-lg border border-line bg-panel/60 p-6 lg:col-span-2">
          <h2 className="font-display text-2xl">Analyse an image</h2>
          <p className="mt-2 text-muted">
            Upload a telescope or space image to classify it and get a cited explanation.
          </p>
          <Link to="/" className="mt-4 inline-block rounded-md bg-halpha px-4 py-2 font-semibold text-night">
            Analyse a new image
          </Link>
        </section>

        <section className="rounded-lg border border-line bg-panel/60 p-6">
          <h2 className="font-display text-2xl">The Moon</h2>
          <div className="mt-4 flex items-center gap-4">
            <MoonIcon fraction={moon.fraction} illumination={moon.illumination} size={84} />
            <div>
              <p className="font-medium">{moon.name}</p>
              <p className="text-sm text-muted">{pct(moon.illumination)} lit</p>
            </div>
          </div>
          <ul className="mt-4 space-y-1 text-sm">
            {moon.upcoming.map((e) => (
              <li key={e.date.toISOString()}>
                {PHASE_NAMES[e.kind]} <span className="text-muted">{fromNow(e.date)}</span>
              </li>
            ))}
          </ul>
          <Link to="/moon" className="mt-4 inline-block text-sm text-muted underline hover:text-ink">
            More Moon dates
          </Link>
        </section>

        <section className="rounded-lg border border-line bg-panel/60 p-6 lg:col-span-2">
          <h2 className="font-display text-2xl">Ask the astronomy assistant</h2>
          <p className="mt-2 text-muted">Questions are answered from the curated knowledge base, with sources.</p>
          <Link to="/chat" className="mt-4 inline-block rounded-md border border-line px-4 py-2 hover:border-muted">
            Open the chat
          </Link>
        </section>

        <section className="rounded-lg border border-line bg-panel/60 p-6">
          <h2 className="mb-3 font-display text-2xl">System status</h2>
          <HealthBanner />
        </section>
      </div>
    </div>
  )
}
