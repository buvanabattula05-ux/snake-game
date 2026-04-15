import React from 'react';
import { useSnake } from '../hooks/useSnake';
import { GRID_SIZE } from '../constants';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Trophy, RotateCcw, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function SnakeGame() {
  const { state, resetGame } = useSnake();

  return (
    <Card className="p-6 bg-black/40 border-neon-cyan/30 backdrop-blur-xl relative overflow-hidden group">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(var(--color-neon-cyan) 1px, transparent 1px), linear-gradient(90deg, var(--color-neon-cyan) 1px, transparent 1px)',
             backgroundSize: '20px 20px' 
           }} 
      />

      <div className="flex justify-between items-center mb-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neon-cyan/60 font-mono">Score</span>
            <span className="text-5xl font-black font-digital text-neon-cyan neon-text-cyan glitch-text" data-text={state.score}>{state.score}</span>
          </div>
          <div className="h-14 w-px bg-neon-cyan/20" />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-neon-magenta/60 font-mono flex items-center gap-1">
              <Trophy className="w-3 h-3" /> Best
            </span>
            <span className="text-5xl font-black font-digital text-neon-magenta glitch-text" data-text={state.highScore} style={{ textShadow: '0 0 10px #ff00ff' }}>{state.highScore}</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          size="icon" 
          onClick={resetGame}
          className="border-neon-cyan/50 hover:bg-neon-cyan/20 hover:text-neon-cyan transition-all duration-300"
        >
          <RotateCcw className="w-4 h-4" />
        </Button>
      </div>

      <div 
        className="relative bg-black/60 border-2 border-neon-cyan/20 rounded-lg overflow-hidden"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
          aspectRatio: '1/1',
          width: '100%',
          maxWidth: '500px'
        }}
      >
        {/* Snake Body */}
        {state.snake.map((segment, i) => (
          <motion.div
            key={`${segment.x}-${segment.y}-${i}`}
            initial={i === 0 ? { scale: 0.8 } : false}
            animate={{ scale: 1 }}
            className={`
              ${i === 0 ? 'bg-neon-cyan neon-glow-cyan z-20' : 'bg-neon-cyan/60 z-10'}
              rounded-sm m-[1px]
            `}
            style={{
              gridColumnStart: segment.x + 1,
              gridRowStart: segment.y + 1,
            }}
          />
        ))}

        {/* Food */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="bg-neon-magenta neon-glow-magenta rounded-full m-[2px] z-10"
          style={{
            gridColumnStart: state.food.x + 1,
            gridRowStart: state.food.y + 1,
          }}
        />

        {/* Game Over Overlay */}
        <AnimatePresence>
          {state.isGameOver && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-30 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-4xl font-black text-neon-magenta mb-2 tracking-tighter uppercase italic">Game Over</h2>
                <p className="text-neon-cyan/60 font-mono mb-8">Your score: {state.score}</p>
                <Button 
                  onClick={resetGame}
                  className="bg-neon-cyan text-black hover:bg-white neon-glow-cyan font-bold px-8 py-6 text-lg group"
                >
                  <Play className="mr-2 h-5 w-5 fill-current group-hover:scale-110 transition-transform" />
                  TRY AGAIN
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <Badge variant="outline" className="border-neon-cyan/30 text-neon-cyan/60 font-mono text-[10px] uppercase tracking-widest">
          Use Arrow Keys to Move
        </Badge>
      </div>
    </Card>
  );
}
