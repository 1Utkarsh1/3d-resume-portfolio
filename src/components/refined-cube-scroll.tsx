"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";

interface CubeItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  color: string;
  stats?: { label: string; value: string }[];
}

interface RefinedCubeScrollProps {
  items: CubeItem[];
}

const RefinedCubeScroll = ({ items }: RefinedCubeScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Create smooth spring animation for horizontal movement
  const smoothScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const x = useTransform(
    smoothScrollYProgress, 
    [0, 1], 
    ["0%", `-${(items.length - 1) * 100}%`]
  );

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          border: 'border-blue-500/30 hover:border-blue-400/60',
          bg: 'bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent',
          iconBg: 'bg-blue-500/10 border-blue-500/20',
          text: 'text-blue-400',
          accent: 'text-blue-300'
        };
      case 'green':
        return {
          border: 'border-green-500/30 hover:border-green-400/60',
          bg: 'bg-gradient-to-br from-green-500/10 via-green-400/5 to-transparent',
          iconBg: 'bg-green-500/10 border-green-500/20',
          text: 'text-green-400',
          accent: 'text-green-300'
        };
      case 'purple':
        return {
          border: 'border-purple-500/30 hover:border-purple-400/60',
          bg: 'bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-transparent',
          iconBg: 'bg-purple-500/10 border-purple-500/20',
          text: 'text-purple-400',
          accent: 'text-purple-300'
        };
      default:
        return {
          border: 'border-gray-500/30 hover:border-gray-400/60',
          bg: 'bg-gradient-to-br from-gray-500/10 via-gray-400/5 to-transparent',
          iconBg: 'bg-gray-500/10 border-gray-500/20',
          text: 'text-gray-400',
          accent: 'text-gray-300'
        };
    }
  };

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-full"
        >
          {items.map((item, index) => {
            const colors = getColorClasses(item.color);

            return (
              <div
                key={item.id}
                className="flex-shrink-0 w-full h-full flex items-center justify-center p-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: index * 0.1 
                  }}
                  viewport={{ once: false, margin: "-20%" }}
                  className="w-full max-w-5xl h-full perspective-1000"
                >
                  <Card className={`
                    relative p-8 h-full border-2 transition-all duration-700 ease-out
                    backdrop-blur-sm bg-background/40 shadow-2xl
                    ${colors.border}
                  `}>
                    {/* Background gradient */}
                    <div className={`absolute inset-0 rounded-lg ${colors.bg}`} />
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <motion.div 
                        className="flex items-center gap-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <div className={`p-4 rounded-xl border ${colors.iconBg}`}>
                          {item.icon}
                        </div>
                        <div>
                          <h2 className={`text-5xl font-thin ${colors.text} mb-2`}>
                            {item.title}
                          </h2>
                          <p className={`text-xl ${colors.accent}`}>
                            {item.subtitle}
                          </p>
                        </div>
                      </motion.div>

                      {/* Stats if available */}
                      {item.stats && (
                        <motion.div 
                          className="grid grid-cols-3 gap-4 mb-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                        >
                          {item.stats.map((stat, statIndex) => (
                            <div key={statIndex} className={`text-center p-4 rounded-lg ${colors.iconBg}`}>
                              <div className={`text-3xl font-bold ${colors.text}`}>{stat.value}</div>
                              <div className="text-sm text-muted-foreground">{stat.label}</div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      
                      {/* Main content */}
                      <motion.div 
                        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                      >
                        {item.content}
                      </motion.div>
                    </div>

                    {/* Subtle 3D effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
      
      {/* Simple progress indicator */}
    </div>
  );
};

export default RefinedCubeScroll; 