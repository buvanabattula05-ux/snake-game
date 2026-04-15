import React from 'react';
import { SnakeGame } from './components/SnakeGame';
import { MusicPlayer } from './components/MusicPlayer';
import { Music, Gamepad2, Zap } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neon-cyan selection:text-black overflow-x-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-magenta/10 blur-[120px] rounded-full pointer-events-none" />

      <header className="relative z-10 border-b border-white/5 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neon-cyan rounded-lg flex items-center justify-center neon-glow-cyan rotate-3">
            <Zap className="text-black w-6 h-6 fill-current" />
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic leading-none">Neon Beats</h1>
            <span className="text-[10px] font-mono text-neon-cyan/60 uppercase tracking-[0.2em]">Bites & Rhythms</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-xs font-mono uppercase tracking-widest text-neon-cyan hover:text-white transition-colors flex items-center gap-2">
            <Gamepad2 className="w-4 h-4" /> Game
          </a>
          <a href="#" className="text-xs font-mono uppercase tracking-widest text-white/40 hover:text-neon-magenta transition-colors flex items-center gap-2">
            <Music className="w-4 h-4" /> Player
          </a>
        </nav>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Info & Stats (Optional or for desktop) */}
        <div className="lg:col-span-3 space-y-8 hidden lg:block">
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">System Status</h2>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-white/50">Audio Engine</span>
                <div className="w-2 h-2 rounded-full bg-neon-lime animate-pulse neon-glow-lime" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-white/50">Game Core</span>
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse neon-glow-cyan" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-mono uppercase text-white/50">Neon Matrix</span>
                <div className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse neon-glow-magenta" />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-white/30">Instructions</h2>
            <ul className="space-y-3 text-sm text-white/60 font-light leading-relaxed">
              <li className="flex gap-3">
                <span className="text-neon-cyan font-mono">01</span>
                Use arrow keys to navigate the snake.
              </li>
              <li className="flex gap-3">
                <span className="text-neon-magenta font-mono">02</span>
                Collect neon bits to grow and score.
              </li>
              <li className="flex gap-3">
                <span className="text-neon-yellow font-mono">03</span>
                Don't hit the walls or yourself.
              </li>
            </ul>
          </div>
        </div>

        {/* Center Column: The Game */}
        <div className="lg:col-span-6 flex flex-col items-center gap-8">
          <div className="w-full max-w-[500px]">
            <SnakeGame />
          </div>
        </div>

        {/* Right Column: Music Player */}
        <div className="lg:col-span-3 space-y-8">
          <div className="sticky top-24">
            <MusicPlayer />
            
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-neon-cyan/10 to-neon-magenta/10 border border-white/5 backdrop-blur-sm">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <Zap className="w-4 h-4 text-neon-yellow" /> Pro Tip
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                The snake moves faster as you score more points. Keep the rhythm going!
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 mt-24 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 opacity-30 grayscale">
            <Zap className="w-5 h-5" />
            <span className="text-xs font-mono uppercase tracking-widest">Neon Beats &copy; 2026</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-neon-cyan transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-neon-magenta transition-colors">Terms</a>
            <a href="#" className="text-[10px] font-mono uppercase tracking-widest text-white/30 hover:text-neon-yellow transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
