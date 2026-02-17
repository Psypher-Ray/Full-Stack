
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Battery, Zap, Music, Shield, Cpu, Smartphone, Timer, Layers } from 'lucide-react';
import { Product } from '../types';
import { getProductInsight } from '../services/geminiService';
import MorphingButton from './MorphingButton';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

// Utility to pick a relevant icon based on spec text
const getSpecIcon = (spec: string) => {
  const s = spec.toLowerCase();
  if (s.includes('battery') || s.includes('hr')) return <Battery size={18} />;
  if (s.includes('active') || s.includes('noise')) return <Music size={18} />;
  if (s.includes('spatial') || s.includes('audio')) return <Layers size={18} />;
  if (s.includes('chip') || s.includes('sensor')) return <Cpu size={18} />;
  if (s.includes('water') || s.includes('swim') || s.includes('weather')) return <Shield size={18} />;
  if (s.includes('fast') || s.includes('thunderbolt')) return <Zap size={18} />;
  if (s.includes('pencil') || s.includes('touch')) return <Smartphone size={18} />;
  return <CheckCircle2 size={18} />;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose, onAddToCart }) => {
  const [insight, setInsight] = useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    if (product && isOpen) {
      setLoadingInsight(true);
      getProductInsight(product.name, product.description).then(res => {
        setInsight(res);
        setLoadingInsight(false);
      });
    } else {
      setInsight(null);
    }
  }, [product, isOpen]);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[200]"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 flex items-center justify-center z-[210] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] overflow-hidden pointer-events-auto flex flex-col md:grid md:grid-cols-[1.1fr_1fr] h-auto max-h-[95vh] relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 p-3 bg-white/60 backdrop-blur-md rounded-full text-zinc-900 z-[220] hover:bg-white hover:scale-110 active:scale-95 transition-all shadow-sm border border-zinc-100"
              >
                <X size={20} strokeWidth={2.5} />
              </button>

              {/* Left Side: Image Gallery Style */}
              <div className="relative h-72 md:h-full bg-zinc-50 overflow-hidden group">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
                
                {/* Visual Flair */}
                <div className="absolute bottom-10 left-10 p-4 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-900">In Stock • Ships Tomorrow</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col h-full overflow-y-auto bg-white border-l border-zinc-100">
                <div className="p-8 md:p-14 lg:p-16 flex flex-col gap-10">
                  {/* Header */}
                  <div>
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[12px] font-black tracking-[0.3em] text-[#0071e3] uppercase mb-4 block"
                    >
                      {product.category} Series
                    </motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-4 leading-[1.1]"
                    >
                      {product.name}
                    </motion.h2>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-3xl font-light text-zinc-400 tracking-tight"
                    >
                      ${product.price}
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-zinc-500 leading-relaxed text-xl font-light"
                  >
                    {product.description}
                  </motion.p>

                  {/* AI Insight Box */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-8 bg-zinc-50 rounded-[2rem] relative border border-zinc-100 overflow-hidden group/insight"
                  >
                    <div className="flex items-center gap-3 mb-4 text-[#0071e3]">
                      <div className="p-2 bg-white rounded-xl shadow-sm">
                        <Sparkles size={16} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Luminary Intelligence</span>
                    </div>

                    {loadingInsight ? (
                      <div className="space-y-3">
                        <div className="h-3 bg-zinc-200 rounded-full w-full relative overflow-hidden">
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-1/2"
                          />
                        </div>
                        <div className="h-3 bg-zinc-200 rounded-full w-4/5 relative overflow-hidden">
                          <motion.div 
                            animate={{ x: ['-100%', '100%'] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.2 }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent w-1/2"
                          />
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-zinc-700 leading-relaxed italic font-medium">
                        "{insight}"
                      </p>
                    )}
                  </motion.div>
                  
                  {/* Enhanced Specifications Section */}
                  <div className="space-y-6">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Technical Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {product.specs.map((spec, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          whileHover={{ y: -5, backgroundColor: '#f4f4f5' }}
                          className="flex flex-col gap-3 p-6 bg-white border border-zinc-100 rounded-[1.8rem] shadow-sm hover:shadow-md transition-all group/spec"
                        >
                          <div className="w-10 h-10 rounded-2xl bg-[#0071e3]/5 text-[#0071e3] flex items-center justify-center transition-colors group-hover/spec:bg-[#0071e3] group-hover/spec:text-white">
                            {getSpecIcon(spec)}
                          </div>
                          <span className="text-sm font-bold text-zinc-800 leading-tight">
                            {spec}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Add to Cart Area */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pt-6 sticky bottom-0 bg-white/80 backdrop-blur-md pb-4"
                  >
                    <MorphingButton 
                      isAdded={isAdded} 
                      onClick={handleAddToCart} 
                      className="h-20 text-lg !rounded-[1.8rem] !shadow-2xl" 
                    />
                    <div className="flex items-center justify-center gap-6 mt-8">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                         <Timer size={14} /> 2-Day Delivery
                       </div>
                       <div className="w-1 h-1 bg-zinc-200 rounded-full" />
                       <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                         <Shield size={14} /> 2-Year Warranty
                       </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
