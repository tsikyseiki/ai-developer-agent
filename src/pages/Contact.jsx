import { useState } from 'react';
import {
  Mail, Phone, MapPin, Clock, Send, Sparkles,
  CheckCircle, AlertCircle, MessageSquare, HelpCircle, ChevronDown, Building
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'site-vitrine',
    budget: '5k-10k',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Notre Adresse',
      details: '124 Avenue des Champs-Élysées, 75008 Paris, France',
      subtext: 'Métro George V (Ligne 1)',
    },
    {
      icon: Mail,
      title: 'Adresse E-mail',
      details: 'contact@apex-digital.fr',
      subtext: 'Réponse sous 24h ouvrées',
    },
    {
      icon: Phone,
      title: 'Téléphone Direct',
      details: '+33 1 23 45 67 89',
      subtext: 'Du lundi au vendredi',
    },
    {
      icon: Clock,
      title: 'Heures d’Ouverture',
      details: '09h00 – 19h00 (Lundi au Vendredi)',
      subtext: 'Support d’urgence 24/7',
    },
  ];

  const faqs = [
    {
      q: "Combien de temps faut-il pour réaliser un site vitrine ?",
      a: "Un site vitrine sur-mesure prend généralement entre 2 et 4 semaines, incluant les étapes de design, développement, tests et optimisation SEO."
    },
    {
      q: "Proposez-vous un contrat de maintenance après la mise en ligne ?",
      a: "Oui, nous proposons plusieurs formules de maintenance incluant les mises à jour de sécurité, la sauvegarde quotidienne, l'hébergement haute performance et le support technique."
    },
    {
      q: "Le site sera-t-il optimisé pour les téléphones mobiles et les moteurs de recherche ?",
      a: "Absolument. Tous nos sites sont 100% responsive et bâtis sur une architecture optimisée aux règles de Google (SEO technique, temps de chargement ultra-rapides, balisage structuré)."
    },
    {
      q: "Puis-je modifier le contenu de mon site moi-même ?",
      a: "Tout à fait. Nous intégrons un back-office intuitif et nous vous fournissons une formation vidéo personnalisée pour gérer vos contenus facilement sans compétences techniques."
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Veuillez renseigner votre nom complet.';
    if (!formData.email.trim()) {
      newErrors.email = 'Veuillez renseigner votre adresse e-mail.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }
    if (!formData.message.trim()) newErrors.message = 'Veuillez saisir votre message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'site-vitrine',
        budget: '5k-10k',
        message: '',
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="space-y-20 py-12 pb-20">

      {/* Header Section */}
      <section className="relative overflow-hidden pt-8 pb-8 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <MessageSquare className="w-4 h-4 text-indigo-400" />
            <span>Discutons de votre projet</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            Contactez notre <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">équipe d'experts</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Vous avez une question, une idée de projet ou besoin d'un devis sur-mesure ? Remplissez le formulaire ci-dessous ou contactez-nous directement.
          </p>
        </div>
      </section>

      {/* Main Grid: Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Contact Details Info (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Informations de contact
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Nos conseillers et architectes web sont à votre disposition pour analyser vos besoins et vous proposer la meilleure stratégie.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-4 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="p-3 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-white text-sm font-semibold">{info.title}</h3>
                      <p className="text-slate-200 text-sm font-medium mt-0.5">{info.details}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{info.subtext}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Google Map Mock Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                <Building className="w-4 h-4" />
                <span>Nos Bureaux Parisiens</span>
              </div>
              <p className="text-slate-300 text-xs">
                Venez échanger autour d'un café dans nos locaux au cœur de Paris.
              </p>
              <div className="h-28 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-500 text-xs relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-purple-950/20 to-slate-900 opacity-60" />
                <div className="relative z-10 flex items-center gap-2 text-indigo-300 font-medium">
                  <MapPin className="w-4 h-4 text-indigo-400 animate-bounce" />
                  <span>Champs-Élysées, 75008 Paris</span>
                </div>
              </div>
            </div>

          </div>

          {/* Form Box (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md relative">

              {isSubmitted ? (
                <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white">Message Envoyé avec Succès !</h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Merci d’avoir contacté Apex Digital. Notre équipe étudie votre demande et vous répondra sous 24h ouvrées.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-slate-800 pb-4 mb-2">
                    <h3 className="text-xl font-bold text-white">Demande de Devis & Renseignements</h3>
                    <p className="text-slate-400 text-xs mt-1">
                      Les champs marqués d'une astérisque (*) sont obligatoires.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Nom */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Adresse E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@entreprise.fr"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-500/30'
                            : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Téléphone (Optionnel)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Nom de l'entreprise
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Ma Société SAS"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Service Type */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Type de Service
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      >
                        <option value="site-vitrine">Site Vitrine sur-mesure</option>
                        <option value="app-web">Application Web & SaaS</option>
                        <option value="redesign">Refonte & UI/UX Design</option>
                        <option value="seo">Optimisation SEO & Performance</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                        Budget Estimé
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                      >
                        <option value="sub-3k">&lt; 3 000 €</option>
                        <option value="3k-5k">3 000 € – 5 000 €</option>
                        <option value="5k-10k">5 000 € – 10 000 €</option>
                        <option value="10k-plus">&gt; 10 000 €</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                      Détails de votre projet *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez brièvement vos objectifs, vos contraintes ou vos inspirations..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950 border text-slate-100 text-sm focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-500/30'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-indigo-500/20'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Envoyer ma demande</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Questions Fréquentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-indigo-400 shrink-0 transition-transform duration-200 ${activeFaq === i ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === i && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
