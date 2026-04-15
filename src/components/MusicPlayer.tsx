import React from 'react';
import { useAudio } from '../hooks/useAudio';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Music2,
  ListMusic
} from 'lucide-react';
import { motion } from 'motion/react';

export function MusicPlayer() {
  const {
    currentTrack,
    isPlaying,
    progress,
    volume,
    setVolume,
    togglePlay,
    skipNext,
    skipPrev,
    seek,
  } = useAudio();

  return (
    <Card className="p-6 bg-black/40 border-neon-magenta/30 backdrop-blur-xl flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <motion.div 
            animate={isPlaying ? { rotate: 360 } : {}}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
            className="w-20 h-20 rounded-full overflow-hidden border-2 border-neon-magenta/50 neon-glow-magenta"
          >
            <img 
              src={currentTrack.cover} 
              alt={currentTrack.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <Music2 className="text-neon-magenta w-8 h-8" />
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-white truncate neon-text-magenta">{currentTrack.title}</h3>
          <p className="text-neon-magenta/60 font-mono text-sm uppercase tracking-wider truncate">{currentTrack.artist}</p>
          <div className="mt-2 flex items-center gap-2">
            <Badge variant="outline" className="border-neon-magenta/30 text-neon-magenta/60 text-[10px] uppercase font-mono">
              AI Generated
            </Badge>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Slider
          value={[progress]}
          max={100}
          step={0.1}
          onValueChange={(vals) => seek(vals[0])}
          className="cursor-pointer"
        />
        <div className="flex justify-between text-[10px] font-mono text-neon-magenta/40 uppercase tracking-tighter">
          <span>00:00</span>
          <span>Live Stream</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={skipPrev}
            className="text-neon-magenta/60 hover:text-neon-magenta hover:bg-neon-magenta/10"
          >
            <SkipBack className="w-5 h-5 fill-current" />
          </Button>
          
          <Button 
            size="icon" 
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-neon-magenta text-black hover:bg-white neon-glow-magenta transition-all"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-current" />
            ) : (
              <Play className="w-6 h-6 fill-current ml-1" />
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={skipNext}
            className="text-neon-magenta/60 hover:text-neon-magenta hover:bg-neon-magenta/10"
          >
            <SkipForward className="w-5 h-5 fill-current" />
          </Button>
        </div>

        <div className="flex items-center gap-3 w-32">
          <Volume2 className="w-4 h-4 text-neon-magenta/60" />
          <Slider
            value={[volume * 100]}
            max={100}
            onValueChange={(vals) => setVolume(vals[0] / 100)}
            className="flex-1"
          />
        </div>
      </div>

      <div className="pt-4 border-t border-neon-magenta/10">
        <div className="flex items-center gap-2 text-neon-magenta/60 mb-3">
          <ListMusic className="w-4 h-4" />
          <span className="text-[10px] uppercase font-mono tracking-widest">Playlist</span>
        </div>
        <div className="space-y-1">
          {/* We could map TRACKS here if we wanted a list */}
          <div className="flex items-center justify-between p-2 rounded bg-neon-magenta/5 border border-neon-magenta/20">
            <span className="text-xs text-neon-magenta font-mono truncate">{currentTrack.title}</span>
            <div className="flex gap-1">
              <div className="w-1 h-3 bg-neon-magenta animate-pulse" />
              <div className="w-1 h-3 bg-neon-magenta animate-pulse delay-75" />
              <div className="w-1 h-3 bg-neon-magenta animate-pulse delay-150" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
