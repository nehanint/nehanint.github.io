import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: id } });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    if (!(location.state && (location.state as any).scrollTo)) {
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  }, [location.pathname, location.state]);

  const isHomePage = location.pathname === '/';
  const navBgClass = isScrolled ? "py-4 bg-stone-50/90 backdrop-blur-xl border-b border-stone-200" : (isHomePage ? "py-8 bg-transparent" : "py-4 bg-stone-50 border-b border-stone-200");

  return (
    <div className="min-h-screen font-sans selection:bg-bronze/30 overflow-x-hidden relative flex flex-col">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-noise" />
      
      {/* Navigation */}
      <nav 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-16",
          navBgClass
        )}
      >
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="group flex flex-col"
          >
            <span className="font-display font-bold text-lg md:text-xl tracking-[-0.04em] uppercase leading-none">
              Neha Nathwani
            </span>
            <span className="text-[9px] uppercase tracking-[0.4em] text-stone-400 font-bold mt-1 group-hover:text-bronze transition-colors">
              Interior Design
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.25em] text-stone-500">
            {['Work', 'Expertise', 'About', 'Experience'].map((item) => (
              <button 
                key={item} 
                onClick={(e) => handleNavClick(item.toLowerCase(), e)}
                className="hover:text-stone-900 transition-colors relative group uppercase font-bold tracking-[0.25em] text-[10px]"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-bronze transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button 
              onClick={(e) => handleNavClick('contact', e)}
              className="px-6 py-2.5 bg-stone-900 text-white rounded-none hover:bg-bronze transition-all duration-300 uppercase font-bold tracking-[0.25em] text-[10px]"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-900 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-stone-200 overflow-hidden"
            >
              <div className="p-8 flex flex-col space-y-6 text-left items-start">
                {['Work', 'Expertise', 'About', 'Experience', 'Contact'].map((item) => (
                  <button 
                    key={item} 
                    onClick={(e) => handleNavClick(item.toLowerCase(), e)}
                    className="text-2xl font-display font-medium uppercase tracking-tight text-stone-900 text-left"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 border-t border-stone-900 px-6 md:px-16 mt-auto">
        <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] font-bold text-stone-600">
           <p>© 2026 Neha Nathwani • Portfolio</p>
           <p className="mt-4 md:mt-0 opacity-40">Architectural Interior Design</p>
           <div className="flex space-x-12 mt-4 md:mt-0">
              <a href="#" className="hover:text-bronze transition-colors">Privacy</a>
              <a href="#" className="hover:text-bronze transition-colors">Terms</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
