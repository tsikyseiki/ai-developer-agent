import { Link } from 'react-router-dom';
import { Sparkles, Mail, Phone, MapPin, ArrowUpRight, Heart, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/60">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-0.5 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Apex<span className="text-indigo-400">.</span>Digital
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Nous concevons des expériences web d’exception, modernes et performantes. Transformez vos idées ambitieuses en solutions digitales à fort impact.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" aria-label="Website" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Social Share" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Community" className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Accueil</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1 group">
                  <span>À Propos</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors inline-flex items-center gap-1 group">
                  <span>Contact</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertises / Services */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-200 transition-colors">Développement Web sur-mesure</li>
              <li className="hover:text-slate-200 transition-colors">Design UI/UX Moderne</li>
              <li className="hover:text-slate-200 transition-colors">Applications Mobiles</li>
              <li className="hover:text-slate-200 transition-colors">Optimisation SEO & Performance</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="space-y-4">
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Coordonnées</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                <span>124 Avenue des Champs-Élysées, 75008 Paris, France</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="mailto:contact@apex-digital.fr" className="hover:text-white transition-colors">contact@apex-digital.fr</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <a href="tel:+33123456789" className="hover:text-white transition-colors">+33 1 23 45 67 89</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Apex Digital. Tous droits réservés.</p>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Fait avec</span>
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span>pour l'excellence web</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
