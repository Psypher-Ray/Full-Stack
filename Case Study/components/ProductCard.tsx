
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';
import { Product } from '../types';
import MorphingButton from './MorphingButton';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onViewDetails, index }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Fix: Explicitly type the mouse event to match updated MorphingButton expectations and provide generic context
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ margin: "-50px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={{ 
        duration: 0.8, 
        delay: (index % 3) * 0.05, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative bg-white rounded-[2.5rem] p-6 flex flex-col h-full cursor-pointer transition-all duration-700 border border-zinc-100 hover:border-transparent hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.12)]"
      onClick={() => onViewDetails(product)}
    >
      {/* Image Container with Quick View Overlay */}
      <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-[2rem] bg-zinc-50">
        <motion.img
          src={product.image}
          alt={product.name}
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
        
        {/* Quick View Button Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.8, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 10 }}
                className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-xl"
              >
                <Eye size={16} className="text-zinc-900" />
                <span className="text-xs font-black uppercase tracking-widest text-zinc-900">View Details</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {product.featured && (
          <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-[#1d1d1f] text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-sm z-10">
            Exclusive
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 px-2">
        <motion.div 
          animate={{ x: isHovered ? 4 : 0 }}
          className="text-[10px] text-zinc-400 mb-2 font-black uppercase tracking-[0.2em]"
        >
          {product.category}
        </motion.div>
        <h3 className="text-2xl font-bold mb-3 tracking-tight group-hover:text-[#0071e3] transition-colors duration-500">
          {product.name}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-8 leading-relaxed font-light">
          {product.description}
        </p>
      </div>

      {/* Footer / Action Area */}
      <div className="mt-auto px-2 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Price</span>
          <div className="text-2xl font-black text-zinc-900 tracking-tighter">${product.price}</div>
        </div>
        <div className="w-1/2">
          <MorphingButton isAdded={isAdded} onClick={handleAddToCart} />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
