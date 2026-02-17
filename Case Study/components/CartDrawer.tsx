
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, q: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="text-xl font-bold">Your Bag</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-zinc-400">
                  <ShoppingBag size={48} className="mb-4 opacity-20" />
                  <p className="text-lg">Your bag is empty.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-4"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-zinc-900">{item.name}</h4>
                      <p className="text-sm text-zinc-500 mb-2">${item.price}</p>
                      <div className="flex items-center gap-3">
                        <select
                          value={item.quantity}
                          onChange={(e) => onUpdateQuantity(item.id, Number(e.target.value))}
                          className="bg-zinc-50 border border-zinc-200 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                          {[1, 2, 3, 4, 5].map((n) => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <div className="font-semibold text-zinc-900">
                      ${(item.price * item.quantity).toLocaleString()}
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            <div className="p-6 border-t space-y-4 bg-zinc-50">
              <div className="flex justify-between items-center text-zinc-600">
                <span>Subtotal</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-zinc-600">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold pt-2 border-t border-zinc-200">
                <span>Total</span>
                <span>${total.toLocaleString()}</span>
              </div>
              <button 
                disabled={items.length === 0}
                className="w-full bg-[#0071e3] text-white py-4 rounded-full font-semibold hover:bg-[#0077ed] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Check Out
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
