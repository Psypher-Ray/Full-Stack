
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Check } from 'lucide-react';

interface MorphingButtonProps {
  // Fix: Update onClick signature to accept React.MouseEvent, allowing child components 
  // to prevent event bubbling (essential for nested click targets).
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isAdded: boolean;
  className?: string;
}

const MorphingButton: React.FC<MorphingButtonProps> = ({ onClick, isAdded, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98, y: 0 }}
      onClick={onClick}
      className={`relative h-14 w-full flex items-center justify-center rounded-[1.25rem] font-bold text-sm uppercase tracking-widest transition-colors shadow-lg overflow-hidden ${
        isAdded ? 'bg-green-600 text-white' : 'bg-zinc-900 text-white hover:bg-black'
      } ${className}`}
    >
      <AnimatePresence mode="wait">
        {isAdded ? (
          <motion.div
            key="added"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <Check size={18} strokeWidth={3} />
            <span>Success</span>
          </motion.div>
        ) : (
          <motion.div
            key="add"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex items-center gap-2"
          >
            <ShoppingCart size={18} strokeWidth={2.5} />
            <span>Add to Bag</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MorphingButton;
