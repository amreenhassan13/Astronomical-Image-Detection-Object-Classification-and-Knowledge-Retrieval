import { NavLink, Outlet } from 'react-router'
import StarField from './StarField'

const link = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm ${isActive ? 'bg-halpha/10 text-ink underline decoration-halpha decoration-2 underline-offset-4' : 'text-muted hover:text-ink'}`

export default function Layout() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-2 px-5 sm:px-8 lg:flex-row lg:gap-10 print:max-w-none print:px-0">
      <StarField />
      <header className="shrink-0 py-6 lg:w-56 lg:py-10 print:hidden">
        <NavLink to="/dashboard" className="font-display text-2xl font-semibold">
          AdAstra
        </NavLink>
        <nav aria-label="Main" className="mt-8 flex flex-col gap-1">
          <NavLink to="/dashboard" className={link}>Dashboard</NavLink>
          <NavLink to="/" end className={link}>Analyse</NavLink>
          <NavLink to="/results" className={link}>Results</NavLink>
          <NavLink to="/chat" className={link}>Ask</NavLink>
          <NavLink to="/moon" className={link}>Moon</NavLink>
          <NavLink to="/sky" className={link}>Sky</NavLink>
        </nav>
      </header>
      <div className="flex min-w-0 flex-1 flex-col">
        <main className="flex-1 py-6 pb-16 lg:py-10 print:pb-0">
          <Outlet />
        </main>
        <footer className="border-t border-line py-6 text-xs text-muted print:hidden">
          BRACU CSE400 project. Classifications can be wrong; explanations cite their sources.
        </footer>
      </div>
    </div>
  )
}
