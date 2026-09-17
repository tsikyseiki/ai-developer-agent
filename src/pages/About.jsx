import { Link } from 'react-router-dom';
import {
  Sparkles, Target, Compass, HeartHandshake, ShieldCheck,
  Award, Users, ArrowRight, Lightbulb, CheckCircle2
} from 'lucide-react';

export default function About() {
  const timeline = [
    {
      year: '2020',
      title: 'Fondation de l’Agence',
      description: 'Lancement d’Apex Digital à Paris par deux passionnés de design et de développement web.',
    },
    {
      year: '2022',
      title: 'Expansion & Équipe',
      description: 'Passage du cap des 50 projets et recrutement d’experts en UI/UX, SEO et stratégie digitale.',
    },
    {
      year: '2024',
      title: 'Reconnaissance & Label',
      description: 'Obtention du label d’Excellence Digitale avec plus de 150 clients satisfaits en Europe.',
    },
    {
      year: '2025',
      title: 'Cap vers l’IA & l’Innovation',
      description: 'Intégration d’outils d’IA générative et de solutions web intelligentes pour des résultats maximisés.',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Recherche de l’Excellence',
      description: 'Nous refusons les solutions génériques. Chaque ligne de code et chaque pixel est pensé pour la perfection.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Continue',
      description: 'Nous maîtrisons les dernières technologies web pour vous donner une longueur d’avance sur vos concurrents.',
    },
    {
      icon: HeartHandshake,
      title: 'Transparence & Confiance',
      description: 'Une communication fluide, des délais respectés et aucun frais caché à chaque étape de votre projet.',
    },
    {
      icon: ShieldCheck,
      title: 'Engagement Qualité & Sécurité',
      description: 'Des normes de sécurité rigoureuses pour protéger vos actifs numériques et garantir une fiabilité absolue.',
    },
  ];

  const team = [
    {
      name: 'Marc-Antoine Dubois',
      role: 'Fondateur & Directeur Général',
      bio: '12 ans d’expérience en stratégie digitale et architecture cloud. Passionné par la croissance des entreprises.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Clara Moreau',
      role: 'Directrice de Création & UI/UX',
      bio: 'Créatrice d’expériences visuelles immersives. Elle transforme les idées abstraites en designs élégants.',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Thomas Roche',
      role: 'Lead Architecte Web',
      bio: 'Expert React, Node.js et intégration d’APIs complexes. Il conçoit des plateformes rapides et ultra-évolutives.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Sarah Benali',
      role: 'Responsable SEO & Growth',
      bio: 'Spécialiste de la visibilité sur les moteurs de recherche et de l’optimisation des taux de conversion.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  ];

  return (
    <div className="space-y-24 py-12 pb-20">

      {/* Header Section */}
      <section className="relative overflow-hidden pt-8 pb-12 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span>Notre ADN & Vision</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Façonner le futur du web avec <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">passion et rigueur</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Apex Digital est une agence créative et technique dédiée à l’élaboration d’expériences digitales sur-mesure pour les entreprises ambitieuses.
          </p>
        </div>
      </section>

      {/* Story & Mission Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Notre Mission : Transformer vos défis digitaux en <span className="text-indigo-400">opportunités de croissance</span>
            </h2>
            <p className="text-slate-300 leading-relaxed text-base">
              Depuis notre création, nous sommes animés par la conviction que chaque entreprise mérite une vitrine digitale à la hauteur de son ambition. Nous fusionnons esthétisme, haute vitesse et stratégie commerciale pour bâtir des plateformes qui marquent les esprits.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-200 text-sm">Approche centrée sur l'expérience utilisateur et l'ergonomie.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-200 text-sm">Développement basé sur des standards web modernes et éco-conçus.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                <span className="text-slate-200 text-sm">Accompagnement réactif et personnalisé à chaque étape.</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
              <Compass className="w-8 h-8 text-indigo-400" />
              <h3 className="text-white font-bold text-lg">Vision</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Rendre le web plus beau, plus rapide et plus accessible pour toutes les marques audacieuses.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3">
              <Award className="w-8 h-8 text-purple-400" />
              <h3 className="text-white font-bold text-lg">Qualité</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Une exigence sans compromis sur la propreté du code et l’ergonomie globale.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-3 col-span-2">
              <Users className="w-8 h-8 text-pink-400" />
              <h3 className="text-white font-bold text-lg">Partenariat Durable</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Nous devenons une extension de votre équipe pour faire évoluer continuellement vos outils.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/50 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            Nos Piliers
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Les valeurs qui guident chacune de nos actions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-indigo-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-white font-bold text-base">{v.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{v.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* History Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-400 text-xs font-semibold uppercase tracking-wider">
            Feuille de Route
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Notre parcours & grands jalons
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-10 pl-6 md:pl-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] md:-left-[39px] top-0 w-5 h-5 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:bg-indigo-500 transition-colors" />
              <div className="md:absolute md:-left-32 md:top-0 text-sm font-extrabold text-indigo-400 font-mono">
                {item.year}
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h3 className="text-white font-bold text-lg">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-800/50 text-pink-400 text-xs font-semibold uppercase tracking-wider">
            L'Équipe
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Les talents derrière Apex Digital
          </h2>
          <p className="text-slate-400 text-sm">
            Une équipe passionnée, complémentaire et dédiée à votre succès.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800 space-y-4 text-center group hover:border-indigo-500/40 transition-all"
            >
              <img
                src={m.avatar}
                alt={m.name}
                className="w-24 h-24 rounded-2xl mx-auto object-cover border border-indigo-500/30 shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div>
                <h3 className="text-white font-bold text-base">{m.name}</h3>
                <p className="text-indigo-400 text-xs font-semibold mt-1">{m.role}</p>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Vous souhaitez échanger avec notre équipe ?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Que vous ayez un cahier des charges précis ou une idée en cours de réflexion, nous sommes là pour vous guider.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-indigo-500/20 hover:opacity-95 transition-opacity"
          >
            <span>Prendre contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
