import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, Code, Layout, TrendingUp, ShieldCheck,
  Zap, Headphones, CheckCircle2, Star, Users, Award, Rocket, BarChart3, ChevronRight
} from 'lucide-react';

export default function Home() {
  const stats = [
    { value: '+180', label: 'Projets Réalisés' },
    { value: '99.4%', label: 'Satisfaction Client' },
    { value: '10+', label: "Années d'Expérience" },
    { value: 'x3.5', label: 'ROI Moyen Client' },
  ];

  const services = [
    {
      icon: Code,
      title: 'Développement Web Sur-Mesure',
      description: 'Applications web ultra-rapides, évolutives et sécurisées créées avec les dernières technologies (React, Next.js, Node.js).',
      badge: 'Performance',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: Layout,
      title: 'Design UI/UX d’Exception',
      description: 'Interfaces captivantes, intuitives et orientées conversion pour offrir une expérience utilisateur mémorable.',
      badge: 'Design',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Optimisation SEO & Conversion',
      description: 'Positionnez votre site en haut des résultats Google et maximisez votre taux de conversion avec notre expertise data.',
      badge: 'Croissance',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Zap,
      title: 'Performance & Vitesse Extrême',
      description: 'Sites optimisés aux normes Web Vitals pour un chargement instantané et une expérience fluide sur tous les écrans.',
      badge: 'Vitesse',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: ShieldCheck,
      title: 'Sécurité & Conformité GDPR',
      description: 'Protection intégrale de vos données et de vos utilisateurs selon les plus hauts standards de cybersécurité.',
      badge: 'Sécurité',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Headphones,
      title: 'Accompagnement & Maintenance 24/7',
      description: 'Une équipe dédiée pour faire évoluer votre plateforme, effectuer les mises à jour et intervenir sans délai.',
      badge: 'Support',
      color: 'from-rose-500 to-red-500',
    },
  ];

  const testimonials = [
    {
      quote: "Apex Digital a complètement métamorphosé notre image de marque. Notre nouveau site vitrine a généré +140% de leads dès le premier mois.",
      author: "Sophie Laurent",
      role: "Directrice Générale",
      company: "Lumix Technologies",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
    {
      quote: "L'équipe est d'un professionnalisme rare. Design moderne, code impeccable et respect scrupuleux des délais. Je recommande à 100%.",
      author: "Alexandre Mercier",
      role: "Fondateur & CEO",
      company: "Novaflow Studio",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
    {
      quote: "Un accompagnement stratégique précieux. Ils ont su comprendre nos besoins complexes et créer une plateforme fluide et élégante.",
      author: "Élodie Bernard",
      role: "Responsable Marketing",
      company: "Vanguard Capital",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      rating: 5,
    },
  ];

  const features = [
    "Design Responsive & Moderne",
    "Code Propre & Structure SEO",
    "Temps de Chargement Opti (Sub-second)",
    "Formulaires Interactifs Intelligents",
    "Statistiques & Analytics Intégrés",
    "Support Continu & Évolutif",
  ];

  return (
    <div className="space-y-24 pb-16">

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
        {/* Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-inner mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-xs font-semibold tracking-wide text-slate-200">
              L’Agence Digitale de Nouvelle Génération
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] max-w-5xl mx-auto">
            Propulsez votre présence digitale vers de <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">nouveaux sommets</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Nous concevons des sites vitrines et applications web d’exception. Alliez un design captivant, des performances ultrarapides et une stratégie orientée résultats pour faire décoller votre activité.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Démarrer un projet</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/a-propos"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Découvrir notre histoire</span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </Link>
          </div>

          {/* Hero Visual Mockup Preview */}
          <div className="mt-16 relative max-w-5xl mx-auto">
            <div className="p-2 sm:p-4 rounded-2xl bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900/80 border border-slate-700/60 shadow-2xl backdrop-blur-xl">
              <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-4 sm:p-6 text-left space-y-6">

                {/* Mock Window Top Bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs text-slate-500 font-mono">apex-digital-platform.fr</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-indigo-400 bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-800/50">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Live Showcase</span>
                  </div>
                </div>

                {/* Grid Content Preview */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Trafic Mensuel</div>
                      <div className="text-xl font-bold text-white mt-1">+142 800</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Temps de Chargement</div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">0.42s</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Zap className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Score SEO Google</div>
                      <div className="text-xl font-bold text-indigo-400 mt-1">100 / 100</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-lg">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Savoir-faire & Services
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Des solutions sur-mesure pour votre croissance
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Chaque projet est unique. Nous apportons une expertise technique et créative complète pour garantir la réussite de votre transformation digitale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/60">
                      {service.badge}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/60 flex items-center text-xs font-semibold text-indigo-400 group-hover:text-indigo-300">
                  <span>En savoir plus</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us Highlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900/80 to-slate-900/40 border border-indigo-500/20 p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/50 border border-indigo-700/50 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                Pourquoi Apex Digital ?
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Une alliance parfaite entre <span className="text-indigo-400">esthétisme</span> et <span className="text-purple-400">haute performance</span>
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Nous ne créons pas simplement des sites internet ; nous façonnons des outils digitaux puissants conçus pour attirer vos prospects et développer votre image de marque.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {features.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Déploiement Continu</h4>
                    <p className="text-slate-400 text-xs">Mise en ligne fluide & zéro interruption</p>
                  </div>
                </div>

                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 w-[92%] rounded-full" />
                </div>

                <div className="flex justify-between text-xs text-slate-400 font-mono">
                  <span>Projet prêt en record time</span>
                  <span className="text-indigo-400 font-bold">92% plus rapide</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Témoignages & Avis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Ce que nos clients disent de nous
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Découvrez comment nous aidons nos partenaires à se démarquer et à réussir leur transformation en ligne.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between space-y-6 relative hover:border-slate-700 transition-all"
            >
              <div className="space-y-4">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-11 h-11 rounded-full object-cover border border-indigo-500/30"
                />
                <div>
                  <h4 className="text-white text-sm font-bold">{t.author}</h4>
                  <p className="text-slate-400 text-xs">{t.role} — <span className="text-indigo-400">{t.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Prêt à concrétiser votre projet digital ?
            </h2>
            <p className="text-indigo-100 text-base sm:text-lg">
              Contactez nos experts dès aujourd’hui pour une consultation gratuite et un devis personnalisé adapté à vos ambitions.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-slate-950 font-bold text-base hover:bg-slate-100 shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-5 h-5 text-slate-950" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
