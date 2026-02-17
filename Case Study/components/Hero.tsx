
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const y = useTransform(smoothProgress, [0, 1], [0, 300]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -100]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);

  return (
    <section ref={containerRef} className="relative h-[150vh] px-6 overflow-hidden bg-white">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity, y: textY }}
          className="relative z-20 max-w-7xl mx-auto flex flex-col items-center text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm font-bold tracking-[0.3em] text-[#0071e3] uppercase mb-6 block">Revolutionary Design</span>
            <h1 className="text-6xl md:text-[10rem] font-bold tracking-tight text-[#1d1d1f] mb-8 leading-[0.9] select-none">
              Pure <br className="hidden md:block" /> Sophistication.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
              We don't just build products. We craft experiences that resonate with your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#000', 
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 15px rgba(0,113,227,0.3)' 
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-[#1d1d1f] text-white rounded-full font-semibold text-lg min-w-[220px] shadow-xl transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">Start Exploring</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#0071e3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.button>
              <motion.button 
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#f9f9f9',
                  borderColor: '#1d1d1f',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.05)'
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-transparent text-[#1d1d1f] border-2 border-zinc-100 rounded-full font-semibold text-lg min-w-[220px] transition-all"
              >
                Watch Film
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ scale, y, rotate }}
          className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-full max-w-6xl aspect-video rounded-[4rem] overflow-hidden shadow-[0_80px_160px_-40px_rgba(0,0,0,0.3)] mx-6">
            <img 
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-full object-cover"
              alt="Nature Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-40 w-[40rem] h-[40rem] bg-blue-100 rounded-full blur-[120px] -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -left-40 w-[50rem] h-[50rem] bg-indigo-50 rounded-full blur-[120px] -z-10" 
      />
    </section>
  );
};

export default Hero;
