'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  // State pour les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // State pour l'état de soumission et les messages
  const [submitStatus, setSubmitStatus] = useState<{
    isSubmitting: boolean;
    isSubmitted: boolean;
    error: string | null;
  }>({
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  });

  // Gestion des changements dans les champs du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  // Gestion de la soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      // Appel à l'API de contact
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      // Si tout va bien, mettre à jour l'état
      setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });

      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitStatus({ isSubmitting: false, isSubmitted: false, error: null });
      }, 3000);

    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section avec marge pour le menu */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 pt-32 pb-20">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Contactez-nous
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Notre équipe passionnée est à votre disposition pour créer votre voyage de rêve en Israël
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content - 3 colonnes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Colonne 1: Nos coordonnées - 3/12 */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-2xl p-8 border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg mr-3"></div>
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                <div className="flex items-start group hover:bg-orange-50 p-4 rounded-xl transition-all duration-300">
                  <div className="bg-orange-100 p-3 rounded-xl group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Téléphone</p>
                    <a href="tel:+33182836729" className="text-gray-600 hover:text-orange-600 transition-colors block">
                      +33 1 82 83 67 29
                    </a>
                    <a href="tel:+972584140489" className="text-gray-600 hover:text-orange-600 transition-colors block">
                      +972 58 414 0489
                    </a>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-rose-50 p-4 rounded-xl transition-all duration-300">
                  <div className="bg-rose-100 p-3 rounded-xl group-hover:bg-rose-500 group-hover:text-white transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Email</p>
                    <a href="mailto:contact@elynortours.com" className="text-gray-600 hover:text-rose-600 transition-colors">
                      contact@elynortours.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group hover:bg-pink-50 p-4 rounded-xl transition-all duration-300">
                  <div className="bg-pink-100 p-3 rounded-xl group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold text-gray-800">Adresse</p>
                    <p className="text-gray-600">Tel Aviv, Israël</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://api.whatsapp.com/send/?phone=972584140489&text=Bonjour%20Elynor%20Tours&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl inline-flex items-center justify-center hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                aria-label="Contactez-nous sur WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-3" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>

            {/* Colonne 2: Horaires + Réseaux sociaux - 3/12 */}
            <div className="lg:col-span-3 space-y-4">
              {/* Horaires d'ouverture */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-orange-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mr-2 flex items-center justify-center">
                    <Clock size={14} className="text-white" />
                  </div>
                  Horaires d'ouverture
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800 text-sm">Lun - Jeu</span>
                    <span className="text-orange-600 font-medium text-sm">9h-18h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-rose-50 rounded-lg">
                    <span className="font-medium text-gray-800 text-sm">Vendredi</span>
                    <span className="text-rose-600 font-medium text-sm">9h-15h</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-3 bg-orange-50 rounded-lg">
                    <span className="font-medium text-gray-800 text-sm">Dimanche</span>
                    <span className="text-orange-600 font-medium text-sm">9h-18h</span>
                  </div>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-rose-100 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg mr-2"></div>
                  Nos réseaux
                </h2>
                <div className="flex space-x-4 justify-center mb-6">
                  <a
                    href="https://www.instagram.com/elynor.tours/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl hover:from-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                    aria-label="Suivez-nous sur Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://x.com/ElynorTours"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-400 to-blue-500 text-white p-4 rounded-xl hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                    aria-label="Suivez-nous sur Twitter"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://www.facebook.com/Elynortoursltd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
                    aria-label="Suivez-nous sur Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                </div>

                {/* Section pour boucher le trou */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-800 mb-3">✨ Suivez-nous</p>
                    <div className="bg-gradient-to-r from-orange-50 to-rose-50 rounded-lg p-4">
                      <p className="text-xs text-gray-600 italic">
                        Suivez-nous sur nos réseaux sociaux pour découvrir en avant-première nos meilleures offres, conseils de voyage personnalisés, bons plans exclusifs et inspirations pour créer votre séjour de rêve en Israël
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 mt-4">🌟 Rejoignez notre communauté de voyageurs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne 3: Formulaire de contact - 6/12 */}
            <div className="lg:col-span-6 bg-white rounded-2xl shadow-2xl p-8 border border-orange-100 hover:shadow-3xl transition-all duration-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-rose-500 rounded-lg mr-3 flex items-center justify-center">
                  <Send size={20} className="text-white" />
                </div>
                Envoyez-nous un message
              </h2>

              {/* Message de confirmation après envoi */}
              {submitStatus.isSubmitted && (
                <div className="mb-6 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-800 rounded-xl flex items-center animate-fade-in">
                  <CheckCircle className="mr-4 text-green-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Message envoyé avec succès !</p>
                    <p className="text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                </div>
              )}

              {/* Message d'erreur */}
              {submitStatus.error && (
                <div className="mb-6 p-6 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-800 rounded-xl flex items-center animate-fade-in">
                  <AlertCircle className="mr-4 text-red-600 flex-shrink-0" size={24} />
                  <div>
                    <p className="font-semibold">Erreur d'envoi</p>
                    <p className="text-sm">{submitStatus.error}</p>
                  </div>
                </div>
              )}

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="Votre nom complet"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 hover:border-orange-300"
                    placeholder="Sujet de votre message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-100 focus:border-orange-500 transition-all duration-300 hover:border-orange-300 resize-none"
                    placeholder="Décrivez-nous votre projet de voyage..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className={`w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                      submitStatus.isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white'
                    }`}
                    disabled={submitStatus.isSubmitting}
                  >
                    {submitStatus.isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="mr-2" size={20} />
                        Envoyer le message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
