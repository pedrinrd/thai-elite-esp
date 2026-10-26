/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Central configuration for Thai Elite commercial offer,
 * prices, checkout URLs, guarantee terms, bonuses and multimedia assets.
 */

export interface PricingPlan {
  id: 'basic' | 'pro' | 'pro-upgrade';
  name: string;
  tag?: string;
  price: number;
  priceFormatted: string;
  periodText: string;
  description: string;
  checkoutUrl: string;
  benefits: string[];
  featured?: boolean;
}

export interface DrillClip {
  id: string;
  numberLabel: string;
  title: string;
  subtitle: string;
  category: string;
  duration: string;
  videoSrc: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  handle: string;
  tag: string;
  imageSrc: string;
  quote: string;
}

export interface BonusItem {
  id: string;
  badge: string;
  highlightRed: string;
  title: string;
  description?: string;
  bullets: string[];
  ctaLabel: string;
  featuredBorder?: boolean;
  wideCard?: boolean;
  previewVideoSrc?: string;
}

export const OFFER_CONFIG = {
  productName: 'Thai Elite',
  category: 'Entrenamiento Digital',
  tagline: 'TU PRÓXIMO ENTRENAMIENTO DE MUAY THAI YA ESTÁ ORGANIZADO.',
  currency: 'MXN',

  // UTMify / Meta Pixel ID configurado
  metaPixelId:
    (typeof import.meta !== 'undefined' &&
      (import.meta as { env?: Record<string, string> }).env
        ?.VITE_META_PIXEL_ID) ||
    '6abf39dabeae388a564376b3',

  // Official checkout links (Xpag Global)
  checkouts: {
    basic: 'https://xpag.global/pay/3toN68D3',
    pro: 'https://xpag.global/pay/mJLWrn52',
    proUpgrade: 'https://xpag.global/pay/hfsz9Toi',
  },

  // Centralized pricing values (presented in $XX MXN format; easy to edit)
  prices: {
    basic: 100,
    pro: 219,
    upgrade: 149,
    bonusTotalValue: 179,
  },

  // Guarantee
  guaranteeDays: 7,
  guaranteeText:
    'Explora los entrenamientos, conoce las técnicas disponibles y descubre si el contenido es lo que estabas buscando. Si decides que THAI ELITE no es para ti, puedes solicitar un reembolso dentro del plazo y conforme a las condiciones de la garantía.',

  // Media assets
  vslVideoSrc: '/assets/aistudio/vsl_esp_nv_5e7c703f.mp4',
  logoSrc:
    '/assets/aistudio/Logo_Esportivo_Thai_Elite_em_Vermelho_e_Prata_41134ae1.png',
  bonusShowcaseImageSrc: '/assets/aistudio/image_74197a46.png',

  // Real training drill previews for the dedicated 9:16 vertical Reels carousel
  drillClips: [
    {
      id: 'drill-1',
      numberLabel: 'ENTRENAMIENTO #01',
      title: 'Bloqueo, Esquiva y Contraataque',
      subtitle:
        '5 formas efectivas de responder al golpe de tu oponente con precisión.',
      category: 'Defensa y Respuesta',
      duration: '01:01',
      videoSrc: '/assets/aistudio/Tecnica_29-D_9qbE1l_cae8af89.mp4',
    },
    {
      id: 'drill-2',
      numberLabel: 'ENTRENAMIENTO #02',
      title: 'Secuencia Explosiva en Manoplas',
      subtitle:
        'Ritmo intenso de golpes cruzados, patadas bajas y rodillazos en los pads.',
      category: 'Combinaciones en Pads',
      duration: '00:26',
      videoSrc: '/assets/aistudio/Treino_13-CjV3z0c__64573131.mp4',
    },
    {
      id: 'drill-3',
      numberLabel: 'ENTRENAMIENTO #03',
      title: 'Drills Diarios: 3 Objetivos de Ataque',
      subtitle:
        'Combinación a la cabeza, hígado y pierna para romper la guardia rival.',
      category: 'Drills de Combate',
      duration: '00:11',
      videoSrc: '/assets/aistudio/Treino_32-ib7gM5gP_046bb0ac.mp4',
    },
    {
      id: 'drill-4',
      numberLabel: 'ENTRENAMIENTO #04',
      title: '3 Drills para Patadas Más Rápidas',
      subtitle:
        'Ejercicios de rotación de cadera, equilibrio y retorno rápido a tu base.',
      category: 'Técnica de Patada',
      duration: '00:18',
      videoSrc: '/assets/aistudio/Treino_503-Br_7r3Yo_861fe170.mp4',
    },
    {
      id: 'drill-5',
      numberLabel: 'ENTRENAMIENTO #05',
      title: 'Fuerza Específica para el Clinch',
      subtitle:
        'Acondicionamiento físico de abdomen, hombros y rodillazos para dominar el clinch.',
      category: 'Acondicionamiento Físico',
      duration: '00:10',
      videoSrc:
        '/assets/aistudio/14143778-a1ef-4032-8ffb-1ac77666a8ff-CO-ITNjV_bc1d64f4.mp4',
    },
    {
      id: 'drill-6',
      numberLabel: 'ENTRENAMIENTO #06',
      title: 'Guía de Padwork: Potencia y Distancia',
      subtitle:
        'Control de larga, media y corta distancia con reacción inmediata.',
      category: 'Dominio del Ring',
      duration: '00:29',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro-2_ee4a450e.mp4',
    },
    {
      id: 'drill-7',
      numberLabel: 'ENTRENAMIENTO #07',
      title: 'Potencia y Explosividad de Piernas',
      subtitle:
        'Circuito práctico de desplantes con rodillazo y sentadilla con patada frontal.',
      category: 'Potencia en Piernas',
      duration: '00:20',
      videoSrc:
        '/assets/aistudio/500_Treinos_em_V_deo_de_Muay_Thai_-_Muay_Thai_Pro__2__679ae61e.mp4',
    },
    {
      id: 'drill-8',
      numberLabel: 'ENTRENAMIENTO #08',
      title: 'Acondicionamiento Completo en Casa',
      subtitle:
        'Rutina intensa sin equipo para ganar resistencia cardiovascular y fuerza.',
      category: 'Entrenamiento en Casa',
      duration: '00:39',
      videoSrc:
        '/assets/aistudio/94865300-717d-466e-876b-0472e8c03bed-BuUE_Uas_4e73b901.mp4',
    },
  ] as DrillClip[],

  // Customer social proof items
  testimonials: [
    {
      id: 'test-1',
      author: 'Lucas Ferreira',
      handle: '@lucasferreira.mt',
      tag: 'Practicante de Muay Thai',
      imageSrc: '/assets/aistudio/depoimento-1-UJHwJDK__fb0a57c7.webp',
      quote:
        'Ya había comprado otros materiales antes y ninguno se acerca a la calidad de este. Puedo repasar las técnicas toda la semana sin complicarme. ¡Vale totalmente la pena!',
    },
    {
      id: 'test-2',
      author: 'Matheus Lima',
      handle: '@matheuslima.mt',
      tag: 'Practicante y Atleta',
      imageSrc: '/assets/aistudio/depoimento-2-1zoWddI4_46bb19a3.webp',
      quote:
        'Lo que más me llamó la atención fueron las demostraciones y secuencias en video. Las combinaciones vienen muy claras y eso facilita muchísimo practicarlas.',
    },
    {
      id: 'test-3',
      author: 'Antônio Carlos',
      handle: '@kongao44',
      tag: 'Alumno',
      imageSrc: '/assets/aistudio/testimonial-2-800_137b88fa.webp',
      quote:
        '¡Agradezco mucho la atención! Más adelante voy a adquirir otros materiales con ustedes. ¡Muchas gracias, Osss!',
    },
    {
      id: 'test-4',
      author: 'Junior Kbeça',
      handle: '@rjunior_jf10',
      tag: 'Acceso Digital',
      imageSrc: '/assets/aistudio/testimonial-3-800_8cb67df6.webp',
      quote:
        'El soporte fue súper rápido, pude entrar a la aplicación desde mi celular en ese mismo momento. ¡Todo salió perfecto, gracias!',
    },
    {
      id: 'test-5',
      author: 'Sonny',
      handle: '@sonny7musicc',
      tag: 'Entrega Digital',
      imageSrc: '/assets/aistudio/depoimento-3-CaIhWknC_2c36b7fe.webp',
      quote:
        'Acabo de realizar la compra y ya recibí mi acceso directo por WhatsApp y correo electrónico. ¡Atención de 10!',
    },
    {
      id: 'test-6',
      author: 'Alumnos en la Comunidad',
      handle: 'Comentarios Reales',
      tag: 'Comunidad Thai Elite',
      imageSrc: '/assets/aistudio/2-8_1.png_0aec4e8a.webp',
      quote:
        '¡Material de primera! Ya descargué el mío y lo voy a consultar siempre que lo necesite. ¡Excelente para quienes van empezando y quieren avanzar rápido!',
    },
    {
      id: 'test-7',
      author: 'Practicantes Thai Elite',
      handle: 'Comentarios en Instagram',
      tag: 'Practicantes',
      imageSrc: '/assets/aistudio/3-6.png_24c8966d.webp',
      quote:
        'Yo tengo este material y me ayuda muchísimo en los entrenamientos. Mucha información de calidad, ¡lo compré y lo recomiendo al 100%!',
    },
  ] as TestimonialItem[],

  // 5 Exclusive Bonuses
  bonuses: [
    {
      id: 'bonus-01',
      badge: 'BONO 01',
      highlightRed: '20',
      title: 'COMBINACIONES DE ATAQUE PROFESIONALES',
      description:
        'Explora combinaciones de Muay Thai y descubre nuevas secuencias para practicar.',
      bullets: [
        'Conoce diferentes combinaciones de golpes.',
        'Descubre secuencias de puños y patadas.',
        'Amplía tus conocimientos de ataque.',
      ],
      ctaLabel: 'VER BONO',
      wideCard: true,
      previewVideoSrc: '/assets/aistudio/Treino_13-CjV3z0c__64573131.mp4',
    },
    {
      id: 'bonus-02',
      badge: 'BONO 02',
      highlightRed: '50',
      title: 'ENTRENAMIENTOS FÍSICOS PARA MUAY THAI',
      description:
        'Conoce ejercicios que pueden ayudarte a complementar tu preparación física para practicar Muay Thai.',
      bullets: [
        'Ejercicios de fuerza.',
        'Resistencia y acondicionamiento.',
        'Preparación física complementaria.',
      ],
      ctaLabel: 'CONOCER BONO',
      previewVideoSrc:
        '/assets/aistudio/14143778-a1ef-4032-8ffb-1ac77666a8ff-CO-ITNjV_bc1d64f4.mp4',
    },
    {
      id: 'bonus-03',
      badge: 'BONO 03',
      highlightRed: '50',
      title: 'TÉCNICAS DE DEFENSA Y CONTRAATAQUE',
      description:
        'Descubre recursos de defensa y contraataque para comprender mejor los movimientos utilizados en el Muay Thai.',
      bullets: [
        'Conoce diferentes técnicas defensivas.',
        'Aprende sobre movimientos de contraataque.',
        'Amplía tus conocimientos técnicos.',
      ],
      ctaLabel: 'CONOCER BONO',
      previewVideoSrc: '/assets/aistudio/Tecnica_29-D_9qbE1l_cae8af89.mp4',
    },
    {
      id: 'bonus-04',
      badge: 'BONO 04',
      highlightRed: 'GUÍA',
      title: 'DE FUNDAMENTOS DEL MUAY THAI',
      description:
        'Conoce los principios básicos del Muay Thai y refuerza tus conocimientos desde el inicio.',
      bullets: [
        'Postura y guardia.',
        'Desplazamientos básicos.',
        'Fundamentos esenciales.',
      ],
      ctaLabel: 'CONOCER BONO',
      featuredBorder: true,
      previewVideoSrc: '/assets/aistudio/Treino_32-ib7gM5gP_046bb0ac.mp4',
    },
    {
      id: 'bonus-05',
      badge: 'BONO 05',
      highlightRed: 'GUÍA',
      title: 'DE RECUPERACIÓN MUSCULAR',
      description:
        'Descubre conceptos importantes sobre descanso y recuperación muscular para complementar tus entrenamientos.',
      bullets: [
        'Cuidados después del entrenamiento.',
        'Descanso y recuperación.',
        'Recomendaciones para tu rutina.',
      ],
      ctaLabel: 'CONOCER BONO',
      previewVideoSrc:
        '/assets/aistudio/94865300-717d-466e-876b-0472e8c03bed-BuUE_Uas_4e73b901.mp4',
    },
  ] as BonusItem[],

  // FAQ
  faq: [
    {
      question: '¿PUEDO EMPEZAR SI NUNCA HE PRACTICADO MUAY THAI?',
      answer:
        'Sí. THAI ELITE incluye entrenamientos y demostraciones que te permiten conocer los fundamentos del Muay Thai. Puedes comenzar observando técnicas básicas y repasando los movimientos a tu propio ritmo. El material es una biblioteca digital y no sustituye la orientación de un instructor.',
    },
    {
      question: '¿PUEDO APRENDER DESDE CASA?',
      answer:
        'Puedes acceder a los videos desde casa y conocer las técnicas y movimientos del Muay Thai. Para practicar, elige ejercicios adecuados a tu experiencia y utiliza un espacio seguro.',
    },
    {
      question: '¿NECESITO EQUIPO PARA COMENZAR?',
      answer:
        'Depende del entrenamiento. Algunos movimientos básicos pueden practicarse sin equipo especializado, mientras que otros requieren accesorios o supervisión.',
    },
    {
      question: '¿CÓMO RECIBO MI ACCESO?',
      answer:
        'Después de confirmar tu pago, recibirás las instrucciones para acceder al material digital a través de los canales de entrega disponibles.',
    },
    {
      question: '¿EL PAGO ES ÚNICO?',
      answer:
        'Sí. Realizas un solo pago por el plan elegido. No hay mensualidades.',
    },
    {
      question: '¿CUÁL ES LA DIFERENCIA ENTRE LOS PLANES?',
      answer:
        'El Plan Esencial incluye la biblioteca principal de entrenamientos. El Plan Completo incluye todo el contenido del Esencial más cinco bonos exclusivos.',
    },
  ],
};

// Pure calculation utilities for pricing & upgrade logic
export function calculateUpgradeSavings(proPrice: number, upgradePrice: number): number {
  return Number((proPrice - upgradePrice).toFixed(2));
}

export function calculateUpgradeDelta(upgradePrice: number, basicPrice: number): number {
  return Number((upgradePrice - basicPrice).toFixed(2));
}

/**
 * Formats a numeric value in Mexican Pesos format: $XX MXN (or $XX.XX MXN if fractional)
 */
export function formatMXN(value: number, _compact = true): string {
  const formattedNumber = Number.isInteger(value)
    ? value.toString()
    : value.toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
  return `$${formattedNumber} ${OFFER_CONFIG.currency}`;
}

export function formatPriceNumber(value: number, _compact = true): string {
  return Number.isInteger(value)
    ? value.toString()
    : value.toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
}

// Backwards-compatible alias
export const formatBRL = formatMXN;
