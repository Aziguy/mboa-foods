import slideImg1 from './assets/slider-1.png';
import slideImg2 from './assets/slider-2.png';
import slideImg3 from './assets/slider-3.png';

import featureImg1 from './assets/food.svg';
import featureImg2 from './assets/chef.svg';
import featureImg3 from './assets/money.svg';
import featureImg4 from './assets/menu.svg';

import galleryImg1 from './assets/gallery-1.jpg';
import galleryImg2 from './assets/gallery-2.jpg';
import galleryImg3 from './assets/gallery-3.jpg';
import galleryImg4 from './assets/gallery-4.jpg';
import galleryImg5 from './assets/gallery-5.jpg';
import galleryImg6 from './assets/gallery-6.jpg';

import testimonialImg1 from './assets/testimonial-1.jpg';
import testimonialImg2 from './assets/testimonial-2.jpg';
import testimonialImg3 from './assets/testimonial-3.jpg';
import testimonialImg4 from './assets/testimonial-4.jpg';

import menuImg1 from './assets/beignet.jpeg';
import menuImg2 from './assets/Poisson-barise.png';
import menuImg3 from './assets/menu-1.jpg';
import menuImg4 from './assets/menu-7.jpg';
import menuImg5 from './assets/beignets_Haricot_Bouillie.png';
import menuImg6 from './assets/brochette_porc.png';
import menuImg7 from './assets/Koki.png';
import menuImg8 from './assets/menu-8.jpg';

export const navLinks = [
  { label: 'Accueil', section: 'home' },
  { label: 'À propos', section: 'about' },
  { label: 'Menus', section: 'menu' },
  { label: 'Galerie', section: 'gallery' },
  { label: 'Avis Clients', section: 'testimonials' },
];

export const homeSlide = [
  {
    img: slideImg1,
    title: 'Découvrez la <span> vraie cuisine </span> camerounaise',
    description:
      'Savourez des plats traditionnels comme les beignets-haricots, le ndolé, le taro ou encore le poisson braisé. Une explosion de saveurs au cœur de Montpellier !',
  },

  {
    img: slideImg2,
    title: 'Un goût <span> d’Afrique </span> dans votre assiette',
    description:
      'Chez Mboa-Foods, chaque plat raconte une histoire. Nous vous offrons une expérience culinaire unique aux couleurs du Cameroun.',
  },

  {
    img: slideImg3,
    title: 'Plats faits <span> maison avec amour </span>',
    description:
      'Du marché aux fourneaux, nous sélectionnons les meilleurs ingrédients pour vous offrir une cuisine authentique et généreuse. Bienvenue chez vous !',
  },
];


export const featureItem = [
  {
    id: 1,
    img: featureImg1,
    title: 'Repas frais et savoureux',
    description:
      'Nos plats sont préparés chaque jour avec des ingrédients de qualité pour vous garantir le vrai goût de la cuisine camerounaise.',
  },

  {
    id: 2,
    img: featureImg2,
    title: 'Chefs expérimentés',
    description:
      'Nos cuisiniers maîtrisent les recettes traditionnelles du Cameroun et vous offrent des saveurs authentiques à chaque bouchée.',
  },

  {
    id: 3,
    img: featureImg3,
    title: 'Prix accessibles',
    description:
      'Bien manger ne doit pas coûter cher. Chez Mboa-Foods, profitez de plats généreux à des tarifs abordables pour tous.',
  },

  {
    id: 4,
    img: featureImg4,
    title: 'Menu frais du jour',
    description:
      'Chaque jour, découvrez de nouveaux plats faits maison, inspirés de la gastronomie camerounaise et africaine.',
  },
];

export const gallery = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
];

export const testimonialItem = [
  {
    img: testimonialImg1,
    name: 'Niesha Phips',
    description:
      "Une vraie découverte culinaire ! Les beignets-haricots sont délicieux, et l’accueil est chaleureux. On sent que tout est fait maison avec amour.",
    stars: 4.5,
  },

  {
    img: testimonialImg2,
    name: 'Daniel Porter',
    description:
      "Le meilleur restaurant camerounais que j’ai testé en France. Le poisson braisé est incroyablement bon, et les portions sont très généreuses.",
    stars: 5,
  },

  {
    img: testimonialImg3,
    name: 'Ebony Swihart',
    description:
      "Des plats authentiques qui rappellent les saveurs du pays. Le ndolé et le taro sont excellents. Service rapide et personnel super sympa !",
    stars: 4.8,
  },

  {
    img: testimonialImg4,
    name: 'Loreta Jones',
    description:
      "J’ai adoré l’ambiance africaine et la qualité des plats. C’est devenu mon adresse préférée à Montpellier pour bien manger à un prix raisonnable.",
    stars: 4.4,
  },
];

export const menu = [
  {
    id: 1,
    img: menuImg1,
    category: 'Petit-déjeuner',
    title: 'Beignets-Haricots',
    description: 'Plat emblématique du Cameroun, servi chaud avec pain ou bouillie en option.',
    price: 8.50,
    reviews: 320,
    stars: 4.8,
  },

  {
    id: 2,
    img: menuImg2,
    category: 'Dîner',
    title: 'Poisson braisé & plantains',
    description: 'Poisson entier mariné et grillé, accompagné de bananes plantains frites et sauce piquante.',
    price: 14.90,
    reviews: 480,
    stars: 4.9,
  },

  {
    id: 3,
    img: menuImg4,
    category: 'Dîner',
    title: 'Ndolé au bœuf & miondo',
    description: 'Feuilles de ndolé mijotées avec viande, pâte d’arachide et servis avec miondo ou bâtons de manioc.',
    price: 13.50,
    reviews: 410,
    stars: 4.7,
  },

  {
    id: 4,
    img: menuImg3,
    category: 'Déjeuner',
    title: 'Taro sauce jaune',
    description: 'Taro pilé accompagné de sa fameuse sauce jaune aux épices traditionnelles et viande de bœuf.',
    price: 12.00,
    reviews: 390,
    stars: 4.6,
  },

  {
    id: 5,
    img: menuImg5,
    category: 'Petit-déjeuner',
    title: 'Bouillie de maïs & beignets',
    description: 'Bouillie sucrée servie chaude avec de savoureux beignets ronds dorés.',
    price: 6.00,
    reviews: 280,
    stars: 4.5,
  },

  {
    id: 6,
    img: menuImg6,
    category: 'Fast Food',
    title: 'Brochettes de porc épicées',
    description: 'Porc grillé mariné aux épices africaines, servi avec bâton de manioc ou pain.',
    price: 9.50,
    reviews: 360,
    stars: 4.8,
  },

  {
    id: 7,
    img: menuImg7,
    category: 'Déjeuner',
    title: 'Koki aux bananes plantains',
    description: 'Gâteau de haricots cuits à la vapeur dans des feuilles, servi avec plantains bouillis.',
    price: 11.00,
    reviews: 220,
    stars: 4.6,
  },

  {
    id: 8,
    img: menuImg8,
    category: 'Dessert',
    title: 'Foléré',
    description: 'Le foléré, aussi parfois appelé bissap, oseille de Guinée ou fleur d\'hibiscus.',
    price: 1.50,
    reviews: 180,
    stars: 4.9,
  },
];

export const footerLinks = [
  { label: 'Accueil', section: 'home' },
  { label: 'À propos', section: 'about' },
  { label: 'Menus', section: 'menu' },
  { label: 'Galerie', section: 'gallery' },
  { label: 'Avis Clients', section: 'testimonials' },
];