import { Rocket, Settings, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-500/20 border border-indigo-400/30 grid place-items-center">
            <Rocket className="h-5 w-5 text-indigo-300" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-white leading-tight">ModelForge AI</h1>
            <p className="text-xs text-white/60">Prompt to 3D • Multi-model • Export ready</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#docs" className="hover:text-white transition">Docs</a>
        </nav>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition">
            <Settings className="h-4 w-4" />
            Settings
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white px-3 py-2 text-sm transition">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
}
