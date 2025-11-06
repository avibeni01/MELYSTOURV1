// src/app/bienfaits-mer-morte/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { Droplet, Heart, Sparkles, Sun, Wind, Waves, Check, Info, Star, Shield, Leaf, Activity, Car, ArrowRight } from 'lucide-react'
import { buildMetadata, buildI18nAlternates, JsonLd, buildBreadcrumbSchema } from '@/lib/seo'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export const metadata: Metadata = buildMetadata({
  title: 'Bienfaits Therapeutiques de la Mer Morte : Guide Complet 2025',
  description: 'Decouvrez les bienfaits therapeutiques de la Mer Morte : mineraux curatifs, traitement psoriasis, eczema, arthrite. Proprietes uniques scientifiquement prouvees. Guide complet soins naturels.',
  canonical: '/bienfaits-mer-morte',
  keywords: [
    'bienfaits mer morte',
    'mer morte therapeutique',
    'soins mer morte',
    'mineraux mer morte',
    'traitement psoriasis mer morte',
    'boue mer morte bienfaits',
    'therapie mer morte',
    'cure mer morte'
  ],
  images: [{
    url: '/images/og/bienfaits-mer-morte.jpg',
    width: 1200,
    height: 630,
    alt: 'Bienfaits Therapeutiques de la Mer Morte - Elynor Tours'
  }],
  alternates: {
    languages: buildI18nAlternates('/bienfaits-mer-morte')
  }
})

export default function BienfaitsMerMortePage() {
  const breadcrumbs = buildBreadcrumbSchema([
    { name: 'Accueil', url: '/' },
    { name: 'Bienfaits de la Mer Morte', url: '/bienfaits-mer-morte' },
  ])

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bienfaits Therapeutiques de la Mer Morte : Guide Complet',
    description: 'Guide complet sur les bienfaits therapeutiques de la Mer Morte et ses proprietes curatives uniques',
    image: 'https://elynortours.com/images/og/bienfaits-mer-morte.jpg',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    author: {
      '@type': 'Organization',
      name: 'Elynor Tours'
    }
  }

  const medicalSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Bienfaits Therapeutiques de la Mer Morte',
    description: 'Guide medical et therapeutique sur les bienfaits de la Mer Morte pour la sante',
    url: 'https://elynortours.com/bienfaits-mer-morte',
    mainEntity: {
      '@type': 'MedicalCondition',
      name: 'Therapies Mer Morte',
      relevantSpecialty: 'Dermatologie, Balneotherapie, Rhumatologie'
    }
  }

  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={articleSchema} />
      <JsonLd data={medicalSchema} />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] overflow-hidden">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/mer-morte-poster.jpg"
          >
            <source src="/videos/Deadsea.mp4" type="video/mp4" />
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"></div>
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
            <div className="max-w-4xl">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Sparkles className="text-cyan-300 mr-2" size={20} />
                <span className="text-white font-semibold">Merveille Naturelle Therapeutique</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Les <span className="text-cyan-300">Bienfaits Therapeutiques</span><br />de la Mer Morte
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 drop-shadow-md max-w-3xl mx-auto">
                Decouvrez les proprietes curatives uniques au monde de cette merveille naturelle situee au point le plus bas de la Terre
              </p>
            </div>
          </div>
        </section>

        <Breadcrumbs items={[{ name: 'Bienfaits Mer Morte', url: '/bienfaits-mer-morte' }]} />

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="flex items-start mb-6">
                  <Info className="text-teal-600 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                      Un Tresor Naturel aux Vertus Exceptionnelles
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      La Mer Morte est situee a <strong>430 metres sous le niveau de la mer</strong>, ce qui en fait le point le plus bas de la planete. Cette position unique, combinee a une <strong>concentration en sel 10 fois superieure</strong> a celle des oceans classiques, cree des conditions naturelles exceptionnelles aux proprietes therapeutiques reconnues depuis l'Antiquite.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Cleopatre elle-meme venait profiter de ses bienfaits, et aujourd'hui, des milliers de personnes viennent chaque annee chercher soulagement et guerison dans ses eaux riches en mineraux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Composition Unique */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Une Composition Minerale Unique au Monde
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  La Mer Morte contient <strong>21 mineraux</strong> differents, dont 12 ne se trouvent dans aucun autre plan d'eau sur Terre
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    icon: Droplet,
                    color: "teal",
                    title: "Magnesium (31%)",
                    description: "Anti-stress naturel, favorise la relaxation musculaire, ameliore la qualite du sommeil, apaise les irritations cutanees"
                  },
                  {
                    icon: Shield,
                    color: "blue",
                    title: "Calcium (14%)",
                    description: "Renforce la barriere cutanee, favorise la cicatrisation, hydrate en profondeur, stimule la regeneration cellulaire"
                  },
                  {
                    icon: Activity,
                    color: "purple",
                    title: "Potassium (20%)",
                    description: "Regule l'hydratation cellulaire, equilibre le pH de la peau, reduit les inflammations, detoxifie l'organisme"
                  },
                  {
                    icon: Leaf,
                    color: "green",
                    title: "Bromure (0.5%)",
                    description: "Effet calmant sur le systeme nerveux, relaxant naturel, soulage les tensions musculaires et l'anxiete"
                  },
                  {
                    icon: Sparkles,
                    color: "cyan",
                    title: "Sodium (3%)",
                    description: "Exfoliant naturel, elimine les cellules mortes, adoucit et lisse la peau, ameliore son elasticite"
                  },
                  {
                    icon: Star,
                    color: "amber",
                    title: "Zinc & Soufre",
                    description: "Proprietes antibacteriennes et antifongiques, traitement efficace de l'acne, psoriasis et eczema"
                  }
                ].map((mineral, i) => (
                  <div key={i} className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-${mineral.color}-500`}>
                    <div className={`w-14 h-14 bg-${mineral.color}-100 rounded-full flex items-center justify-center mb-4`}>
                      <mineral.icon className={`text-${mineral.color}-600`} size={28} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{mineral.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{mineral.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Concentration Exceptionnelle</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-4xl font-bold mb-2">33.7%</div>
                    <div className="text-cyan-100">Salinite totale</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">10x</div>
                    <div className="text-cyan-100">Plus salee que l'ocean</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-2">21</div>
                    <div className="text-cyan-100">Mineraux differents</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bienfaits Dermatologiques */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="text-rose-500 mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Bienfaits Dermatologiques Scientifiquement Prouves
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Des etudes cliniques confirment l'efficacite des soins a la Mer Morte pour de nombreuses affections cutanees
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mr-4">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Psoriasis</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Efficacite prouvee a 80-90%</strong> pour le traitement du psoriasis leger a modere
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reduction significative des plaques et des rougeurs en 3-4 semaines</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Diminution des demangeaisons et de l'inflammation</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Resultats durables : 3-6 mois de remission apres une cure</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Alternative naturelle aux traitements chimiques lourds</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Droplet className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Eczema & Dermatite</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Amelioration visible en 2-3 semaines</strong> pour l'eczema atopique et les dermatites
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Apaisement immediat des irritations et demangeaisons</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Hydratation profonde et durable de la peau</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Renforcement de la barriere protectrice cutanee</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reduction de la frequence et intensite des crises</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <Sparkles className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Acne & Imperfections</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Traitement naturel efficace</strong> grace aux proprietes antibacteriennes et regulatrices
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Action purifiante et antibacterienne du zinc et soufre</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Regulation de la production de sebum</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Exfoliation douce qui desobstrue les pores</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Cicatrisation acceleree des lesions acneiques</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Star className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Anti-age & Beaute</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Proprietes cosmetiques exceptionnelles</strong> pour une peau rajeunie et eclatante
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Stimulation de la production de collagene naturel</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reduction visible des rides et ridules</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Eclat et luminosite retrouves</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Texture de peau amelioree, plus ferme et elastique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bienfaits Rhumatologiques */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Activity className="text-teal-500 mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Bienfaits Rhumatologiques et Musculaires
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Soulagement naturel des douleurs articulaires et musculaires
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Arthrite & Arthrose</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reduction de 40-50% des douleurs articulaires</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Amelioration de la mobilite et flexibilite</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Effet anti-inflammatoire naturel</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Rhumatismes</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Apaisement des inflammations chroniques</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Detente musculaire profonde</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Amelioration de la circulation sanguine</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Fibromyalgie</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Soulagement des douleurs diffuses</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Amelioration de la qualite du sommeil</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Reduction de la fatigue chronique</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Environnement Unique */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Sun className="text-amber-500 mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Un Environnement Naturel Unique
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  La position geographique exceptionnelle de la Mer Morte cree des conditions climatiques ideales pour la sante
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                    <Sun className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Rayonnement UV Filtre</h3>
                  <p className="text-gray-700 mb-4">
                    A 430m sous le niveau de la mer, la couche atmospherique supplementaire filtre naturellement les rayons UVB nocifs tout en laissant passer les UVA benefiques.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Bronzage possible sans danger de brulures</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Exposition solaire therapeutique ideale pour le psoriasis</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Stimulation naturelle de la vitamine D</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                    <Wind className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Air Enrichi en Oxygene</h3>
                  <p className="text-gray-700 mb-4">
                    La pression atmospherique elevee au point le plus bas de la Terre enrichit l'air en oxygene (10% de plus qu'au niveau de la mer).
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Amelioration de la respiration et de l'endurance</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Benefique pour les affections respiratoires</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Air sec pur, sans pollens ni allergenes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mb-4">
                    <Droplet className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Boue Therapeutique</h3>
                  <p className="text-gray-700 mb-4">
                    La boue noire de la Mer Morte est l'une des plus riches au monde en mineraux actifs et argiles curatives.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Detoxification profonde de la peau</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Exfoliation et regeneration cellulaire</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Soulagement des douleurs musculaires</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                    <Waves className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Flottaison Naturelle</h3>
                  <p className="text-gray-700 mb-4">
                    La densite extreme de l'eau (1.24 g/cm³) permet de flotter sans aucun effort, offrant une experience unique de relaxation.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Zero gravite : detente musculaire totale</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Soulagement de la pression sur les articulations</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1" />
                      <span>Meditation et relaxation profonde facilitees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bienfaits Psychologiques */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Heart className="text-rose-500 mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Bienfaits Psychologiques et Bien-etre
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Un effet positif profond sur l'equilibre mental et emotionnel
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Reduction du Stress",
                    description: "Le magnesium absorbe par la peau reduit le cortisol (hormone du stress) et favorise la production de serotonine"
                  },
                  {
                    title: "Sommeil Ameliore",
                    description: "Les mineraux favorisent la relaxation musculaire et nerveuse, ameliorant significativement la qualite du sommeil"
                  },
                  {
                    title: "Anxiete Apaisee",
                    description: "Le bromure naturel a un effet calmant sur le systeme nerveux, reduisant l'anxiete et les tensions"
                  },
                  {
                    title: "Energie Retrouvee",
                    description: "L'oxygenation accrue et la detoxification naturelle redonnent vitalite et energie au corps"
                  }
                ].map((benefit, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-bold mb-3 text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comment Profiter */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <Sparkles className="text-teal-500 mx-auto mb-4" size={48} />
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Comment Profiter au Maximum des Bienfaits ?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nos conseils pour optimiser votre cure therapeutique a la Mer Morte
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Duree Ideale du Sejour</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">1</div>
                      <div>
                        <p className="font-semibold text-gray-800">3-4 jours minimum</p>
                        <p className="text-gray-600 text-sm">Pour ressentir les premiers bienfaits et la relaxation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">2</div>
                      <div>
                        <p className="font-semibold text-gray-800">7-10 jours recommande</p>
                        <p className="text-gray-600 text-sm">Duree optimale pour traiter psoriasis, eczema ou rhumatismes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-white font-bold">3</div>
                      <div>
                        <p className="font-semibold text-gray-800">14-21 jours ideal</p>
                        <p className="text-gray-600 text-sm">Pour une cure therapeutique complete avec resultats durables</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-800">Meilleure Periode</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Mars - Mai (Printemps)</p>
                      <p className="text-gray-600 text-sm">Temperature agreable 25-30°C, affluence moderee, prix competitifs</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 mb-2">Septembre - Novembre (Automne)</p>
                      <p className="text-gray-600 text-sm">Conditions ideales : eau chaude 30°C, soleil doux, haute saison therapeutique</p>
                    </div>
                    <div className="bg-amber-100 rounded-lg p-4 border-l-4 border-amber-500">
                      <p className="text-sm text-gray-700">
                        <strong>A eviter :</strong> Juillet-Aout (chaleur extreme 40°C+) et periodes de fetes juives (hotels complets)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Protocole de Soins Recommande</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">☀️</div>
                    <h4 className="font-bold mb-2">Matin</h4>
                    <p className="text-sm text-cyan-100">Bain Mer Morte 20min + exposition solaire progressive 15-30min</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-3">🧖</div>
                    <h4 className="font-bold mb-2">Midi</h4>
                    <p className="text-sm text-cyan-100">Enveloppement boue 30min + piscine minerale chaude 20min</p>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl mb-3">💆</div>
                    <h4 className="font-bold mb-2">Soir</h4>
                    <p className="text-sm text-cyan-100">Massage therapeutique + soins cosmetiques Mer Morte</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Precautions */}
        <section className="py-16 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-amber-500">
                <div className="flex items-start mb-6">
                  <Info className="text-amber-500 mr-4 flex-shrink-0 mt-1" size={32} />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Precautions et Contre-indications</h2>
                    <div className="space-y-4 text-gray-700">
                      <p>
                        <strong>Avant de vous baigner :</strong> Ne vous rasez pas 24h avant (brulures), protegez les blessures ouvertes, retirez lentilles de contact
                      </p>
                      <p>
                        <strong>Pendant le bain :</strong> Ne restez pas plus de 20min (risque de deshydratation), ne mouillez JAMAIS les yeux (tres douloureux), buvez beaucoup d'eau
                      </p>
                      <p>
                        <strong>Contre-indications :</strong> Hypertension severe, maladies cardiaques non controlees, grossesse avancee, plaies infectees
                      </p>
                      <p className="text-sm italic">
                        Consultez toujours votre medecin avant une cure therapeutique, surtout en cas de pathologie chronique.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Spa */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Profitez des Bienfaits dans nos Hotels Spa
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Sejournez dans les meilleurs hotels spa de la Mer Morte avec acces direct aux soins therapeutiques et aux piscines minerales
              </p>
              <Link
                href="/hotels/mer-morte"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all shadow-lg hover:shadow-xl"
              >
                Decouvrir nos Hotels Spa Mer Morte
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Maillage interne */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Articles Complementaires</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/plages/mer-morte" className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-teal-500">
                  <Waves className="text-teal-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Plages Mer Morte</h3>
                  <p className="text-gray-600 text-sm">Guide complet des meilleures plages publiques et privees</p>
                </Link>
                <Link href="/hotels/mer-morte" className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-cyan-500">
                  <Sparkles className="text-cyan-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Hotels Spa</h3>
                  <p className="text-gray-600 text-sm">Meilleurs hotels 4-5* avec centres therapeutiques complets</p>
                </Link>
                <Link href="/location-voiture" className="block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-500">
                  <Car className="text-orange-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Location Voiture</h3>
                  <p className="text-gray-600 text-sm">Rejoignez la Mer Morte facilement depuis Jerusalem ou Tel Aviv</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Reservez votre Cure Therapeutique a la Mer Morte
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Forfaits spa therapeutiques • Hotels 4-5 etoiles • Soins professionnels • Conseil personnalise
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Demander un devis gratuit
                <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link
                href="/hotels/mer-morte"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Voir les hotels spa
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
