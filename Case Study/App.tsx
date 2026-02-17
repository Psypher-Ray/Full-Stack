
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ShoppingBag, Search, Menu, User } from 'lucide-react';
import { Product, CartItem } from './types';
import { PRODUCTS, CATEGORIES } from './constants';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
    className="fixed inset-0 z-[1000] bg-white flex flex-col items-center justify-center"
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center"
    >
      <h1 className="text-4xl font-black tracking-tighter mb-4 italic">LUMINARY</h1>
      <div className="w-48 h-[2px] bg-zinc-100 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#0071e3]"
        />
      </div>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold"
      >
        Engineering Perfection
      </motion.p>
    </motion.div>
  </motion.div>
);

const NavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.a 
    href="#" 
    className="relative text-[12px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors py-1 group"
    whileHover={{ y: -1 }}
  >
    {children}
    <motion.span 
      className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#0071e3] transition-all duration-300 group-hover:w-full group-hover:left-0"
    />
  </motion.a>
);

const App: React.FC = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const visionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: visionScroll } = useScroll({
    target: visionRef,
    offset: ["start end", "end start"]
  });

  const visionSpring = useSpring(visionScroll, { stiffness: 60, damping: 20 });
  const visionScale = useTransform(visionSpring, [0, 0.5, 1], [0.9, 1.1, 0.9]);
  const visionOpacity = useTransform(visionSpring, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const visionTextY = useTransform(visionSpring, [0, 1], [100, -100]);

  useEffect(() => {
    const timer = setTimeout(() => setIsAppLoading(false), 2200);
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, q: number) => {
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: q } : item));
  };

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100">
      <AnimatePresence>
        {isAppLoading && <LoadingScreen />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: isAppLoading ? 0 : 1, scale: isAppLoading ? 0.98 : 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div 
          className="fixed top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-[200]" 
          style={{ scaleX }}
        />

        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'py-3 bg-white/70 backdrop-blur-2xl border-b border-zinc-100' : 'py-8 bg-transparent border-b border-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-14">
              <motion.a 
                href="#" 
                className="text-2xl font-black tracking-tighter text-[#1d1d1f]"
                whileHover={{ scale: 1.05, filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.1))' }}
                whileTap={{ scale: 0.95 }}
              >
                LUMINARY
              </motion.a>
              <div className="hidden lg:flex items-center gap-10">
                {['Store', 'Featured', 'Inspiration', 'Design'].map(item => (
                  <NavLink key={item}>{item}</NavLink>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                 <motion.button 
                   whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: '0 0 15px rgba(0,0,0,0.05)' }}
                   whileTap={{ scale: 0.9 }}
                   className="p-3 text-zinc-600 rounded-full transition-all"
                 >
                   <Search size={18} strokeWidth={2.5} />
                 </motion.button>
                 <motion.button 
                   whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.05)', boxShadow: '0 0 15px rgba(0,0,0,0.05)' }}
                   whileTap={{ scale: 0.9 }}
                   className="p-3 text-zinc-600 rounded-full transition-all"
                 >
                   <User size={18} strokeWidth={2.5} />
                 </motion.button>
              </div>
              
              <motion.button 
                onClick={() => setIsCartOpen(true)}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="relative p-3 bg-zinc-900 text-white rounded-full transition-all shadow-lg group"
              >
                <ShoppingBag size={18} strokeWidth={2.5} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[#0071e3] text-white text-[10px] flex items-center justify-center rounded-full font-black border-2 border-white"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
              <button className="lg:hidden p-3 text-zinc-900 hover:bg-zinc-50 rounded-full">
                <Menu size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </nav>

        <Hero />

        <section ref={visionRef} className="relative py-80 px-6 overflow-hidden bg-black text-white">
          <motion.div 
            style={{ scale: visionScale, opacity: visionOpacity, y: visionTextY }}
            className="max-w-6xl mx-auto text-center z-10 relative"
          >
            <h2 className="text-5xl md:text-9xl font-black tracking-tighter mb-16 leading-tight">
              Obsessively <br /> <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Optimized.</span>
            </h2>
            <p className="text-xl md:text-4xl font-light text-zinc-500 max-w-4xl mx-auto leading-tight mb-12">
              Every product we design undergoes thousands of hours of testing to ensure it doesn't just work—it inspires.
            </p>
            <div className="w-16 h-1 w-24 bg-[#0071e3] mx-auto rounded-full" />
          </motion.div>
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          </div>
        </section>

        <main className="relative bg-white z-10">
          <div className="max-w-7xl mx-auto px-6 py-48">
            <div className="mb-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-50px" }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-12"
              >
                <div className="max-w-2xl">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">Built for <br /> Greatness.</h2>
                  <p className="text-2xl text-zinc-400 font-light leading-snug">Explore the lineup of the world's most advanced consumer electronics.</p>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-wrap gap-2 p-1 bg-zinc-100 rounded-[2rem]"
                >
                  {CATEGORIES.map(cat => (
                    <motion.button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-3 rounded-[1.8rem] text-sm font-bold transition-all duration-300 ${
                        activeCategory === cat 
                          ? 'bg-white text-zinc-900 shadow-md' 
                          : 'bg-transparent text-zinc-400 hover:text-zinc-600'
                      }`}
                    >
                      {cat}
                    </motion.button>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              <AnimatePresence mode="popLayout" initial={false}>
                {filteredProducts.map((product, idx) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={idx}
                    onAddToCart={addToCart}
                    onViewDetails={(p) => setSelectedProduct(p)}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </main>

        <footer className="bg-zinc-50 pt-40 pb-20 px-6 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              className="md:col-span-5"
            >
              <h4 className="text-3xl font-black tracking-tighter mb-8 italic text-[#1d1d1f]">LUMINARY</h4>
              <p className="text-zinc-500 font-light text-xl leading-relaxed mb-10 max-w-sm">
                Designing the future of human-centered technology since 2024.
              </p>
              <div className="flex gap-3">
                 {[1,2,3,4].map(i => (
                   <motion.div 
                     key={i} 
                     whileHover={{ y: -8, scale: 1.1, backgroundColor: '#fff', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                     whileTap={{ scale: 0.9 }}
                     className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center cursor-pointer transition-all" 
                   />
                 ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2"
            >
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">Ecosystem</h5>
              <ul className="space-y-4 text-zinc-600 font-medium text-sm">
                {['Audio Pro', 'Vision OS', 'Compute 1', 'Studio Connect'].map(link => (
                  <li key={link}>
                    <motion.a 
                      href="#" 
                      whileHover={{ x: 5, color: '#0071e3' }}
                      className="inline-block transition-colors"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5"
            >
              <h5 className="font-bold text-xs uppercase tracking-[0.2em] text-zinc-400 mb-8">Insider Access</h5>
              <p className="text-zinc-500 text-sm font-light mb-8 max-w-xs">Be the first to experience the next evolution of Luminary products.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="flex-1 bg-white border border-zinc-200 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500/50 transition-all"
                />
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#000', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-zinc-900 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg"
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ margin: "-20px" }}
            className="max-w-7xl mx-auto mt-32 pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-10 text-zinc-400 text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            <div className="flex gap-10 flex-wrap justify-center">
              {['Copyright', 'Privacy', 'Compliance', 'Cookies'].map(link => (
                <motion.a 
                  key={link}
                  href="#" 
                  whileHover={{ y: -2, color: '#000' }}
                  className="transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            <div>© {new Date().getFullYear()} LUMINARY INC. ALL RIGHTS RESERVED.</div>
          </motion.div>
        </footer>

        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />

        <ProductModal 
          isOpen={!!selectedProduct}
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      </motion.div>
    </div>
  );
};

export default App;
