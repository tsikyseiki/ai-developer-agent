import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowRight, ShieldCheck, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-indigo-950/10'
        : 'bg-transparent border-b border-slate-800/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                Apex<span className="text-indigo-400">.</span>Digital
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Innovation & Design
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-400 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Démarrer un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6 text-indigo-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 mt-2 border-t border-slate-800/80">
            <Link
              to="/contact"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20"
            >
              <span>Démarrer un projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
