"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Award, BookOpen, Briefcase, TrendingUp } from "lucide-react";

interface CubeSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  color: string;
}

interface HorizontalCubeScrollProps {
  sections: CubeSection[];
}

const HorizontalCubeScroll = ({ sections }: HorizontalCubeScrollProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(sections.length - 1) * 100}%`]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-full"
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="flex-shrink-0 w-full h-full flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ opacity: 0, rotateY: -45, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="w-full max-w-4xl h-full perspective-1000"
              >
                <Card className={`
                  relative p-8 h-full border-2 transition-all duration-500
                  hover:scale-105 backdrop-blur-sm bg-background/50
                  transform-gpu hover:rotate-y-6 shadow-2xl
                  ${section.color === 'blue' ? 'border-blue-500/20 hover:border-blue-500/40' :
                    section.color === 'green' ? 'border-green-500/20 hover:border-green-500/40' :
                    section.color === 'purple' ? 'border-purple-500/20 hover:border-purple-500/40' :
                    'border-gray-500/20 hover:border-gray-500/40'}
                `}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 rounded-lg ${
                    section.color === 'blue' ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5' :
                    section.color === 'green' ? 'bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5' :
                    section.color === 'purple' ? 'bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/5' :
                    'bg-gradient-to-br from-gray-500/10 via-transparent to-gray-500/5'
                  }`} />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-xl border ${
                        section.color === 'blue' ? 'bg-blue-500/10 border-blue-500/20' :
                        section.color === 'green' ? 'bg-green-500/10 border-green-500/20' :
                        section.color === 'purple' ? 'bg-purple-500/10 border-purple-500/20' :
                        'bg-gray-500/10 border-gray-500/20'
                      }`}>
                        {section.icon}
                      </div>
                      <h2 className={`text-4xl font-thin ${
                        section.color === 'blue' ? 'text-blue-400' :
                        section.color === 'green' ? 'text-green-400' :
                        section.color === 'purple' ? 'text-purple-400' :
                        'text-gray-400'
                      }`}>
                        {section.title}
                      </h2>
                    </div>
                    
                    {/* Content area with scrolling */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
                      {section.content}
                    </div>
                  </div>
                  
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg" />
                </Card>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Progress indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex gap-2">
          {sections.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-muted"
              animate={{
                scale: scrollYProgress.get() > index / sections.length && 
                       scrollYProgress.get() < (index + 1) / sections.length ? 1.5 : 1,
                backgroundColor: scrollYProgress.get() > index / sections.length && 
                               scrollYProgress.get() < (index + 1) / sections.length ? "#3b82f6" : "#6b7280"
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalCubeScroll; 