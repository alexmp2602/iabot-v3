export const contact = {
  phone: "5492324468366",
  email: "info@iabot.com.ar",
  instagram: "https://www.instagram.com/iabot.robotica/",
  linkedin: "https://www.linkedin.com/company/iabot-robotica/",
};
export const whatsapp = (
  message = "¡Hola IABOT! Quisiera información sobre los talleres.",
) => `https://wa.me/${contact.phone}?text=${encodeURIComponent(message)}`;
export type Course = {
  slug: string;
  name: string;
  min: number;
  max: number;
  category: string;
  kit: string;
  description: string;
  image: string;
  alt: string;
  tone: string;
  learning: string[];
  previous: string;
  materials: string;
  duration: string;
  mode: string;
};
export const courses: Course[] = [
  {
    slug: "inventores",
    name: "Inventores",
    min: 5,
    max: 9,
    category: "Robótica",
    kit: "LEGO® WeDo 2.0",
    description:
      "Primeros mecanismos, historias y robots que cobran movimiento. Aprender a programar empieza jugando.",
    image: "milo.webp",
    alt: "Robot Milo construido con LEGO WeDo 2.0",
    tone: "green",
    learning: [
      "Construir modelos con motores y mecanismos.",
      "Programar acciones y movimientos paso a paso.",
      "Resolver desafíos en equipo a través del juego.",
    ],
    previous:
      "No necesita experiencia previa. Es una propuesta para empezar desde cero.",
    materials: "Kits LEGO y tablets incluidos durante las clases.",
    duration:
      "Habitualmente de 4 a 6 meses, con clases semanales. Confirmá el calendario de tu sede.",
    mode: "Presencial",
  },
  {
    slug: "constructores",
    name: "Constructores",
    min: 9,
    max: 11,
    category: "Robótica",
    kit: "LEGO® SPIKE™ Essential",
    description:
      "Construir, probar y descubrir cómo un robot responde a lo que pasa a su alrededor.",
    image: "la_fila_rapida.webp",
    alt: "Proyecto La Fila Rápida con LEGO SPIKE Essential",
    tone: "blue",
    learning: [
      "Crear robots que interactúan con su entorno.",
      "Explorar sensores y programación visual.",
      "Usar bucles y condiciones para resolver desafíos.",
    ],
    previous:
      "No requiere experiencia. Haber realizado Inventores puede ayudar, pero no es obligatorio.",
    materials:
      "Kits LEGO SPIKE Essential y tablets incluidos durante las clases.",
    duration:
      "Habitualmente de 4 a 6 meses. Clases semanales de 1 hora y media; consultá el calendario de tu sede.",
    mode: "Presencial",
  },
  {
    slug: "programadores",
    name: "Programadores",
    min: 11,
    max: 13,
    category: "Robótica",
    kit: "LEGO® SPIKE™ Prime",
    description:
      "Más motores, más posibilidades. Desafíos de ingeniería y programación para ir un paso más allá.",
    image: "el_seguidor.webp",
    alt: "Robot seguidor construido con LEGO SPIKE Prime",
    tone: "yellow",
    learning: [
      "Combinar motores y sensores en un mismo robot.",
      "Programar con variables, bucles y condicionales.",
      "Resolver desafíos de diseño e ingeniería en equipo.",
    ],
    previous:
      "Se recomiendan conocimientos básicos de robótica o programación, pero no son excluyentes.",
    materials: "Kits LEGO SPIKE Prime, sensores y motores provistos por IABOT.",
    duration:
      "Habitualmente de 4 a 6 meses. Clases semanales de 1 hora y media; consultá el calendario de tu sede.",
    mode: "Presencial",
  },
  {
    slug: "maestros",
    name: "Maestros",
    min: 13,
    max: 14,
    category: "Robótica",
    kit: "LEGO® EV3 + Python",
    description:
      "Proyectos propios, programación con Python y una primera exploración de inteligencia artificial.",
    image: "ev3.webp",
    alt: "Robot construido con LEGO EV3",
    tone: "purple",
    learning: [
      "Programar en Python para controlar robots.",
      "Desarrollar proyectos con sensores y motores.",
      "Introducirse en inteligencia artificial y visión computacional.",
    ],
    previous:
      "Python se enseña desde cero, con ejercicios aplicados a la robótica.",
    materials:
      "Kits LEGO EV3 y notebooks configuradas para programar en Python.",
    duration:
      "Habitualmente de 4 a 6 meses. Clases semanales de 1 hora y media; consultá el calendario de tu sede.",
    mode: "Presencial",
  },
  {
    slug: "impresion-3d",
    name: "Impresión 3D",
    min: 9,
    max: 13,
    category: "Diseño 3D",
    kit: "Tinkercad",
    description:
      "De una idea a un objeto. Diseñar modelos digitales y conocer cómo se convierten en piezas reales.",
    image: "tinkercad.webp",
    alt: "Modelo tridimensional creado en Tinkercad",
    tone: "orange",
    learning: [
      "Diseñar piezas y objetos con Tinkercad.",
      "Preparar archivos para impresión 3D.",
      "Revisar un prototipo y mejorar su diseño.",
    ],
    previous: "No requiere conocimientos de diseño 3D.",
    materials:
      "Consultá los materiales y equipos necesarios al coordinar la inscripción.",
    duration: "Consultá los días, horarios y duración de la próxima propuesta.",
    mode: "Consultá disponibilidad",
  },
  {
    slug: "roblox-studio",
    name: "Videojuegos",
    min: 8,
    max: 13,
    category: "Videojuegos",
    kit: "Roblox Studio",
    description:
      "Pasar de jugar a crear. Diseñar mundos, inventar desafíos y programar un videojuego propio.",
    image: "roblox-studio.webp",
    alt: "Mundo de un videojuego creado en Roblox Studio",
    tone: "pink",
    learning: [
      "Crear mundos y escenarios en Roblox Studio.",
      "Programar mecánicas y desafíos de juego.",
      "Desarrollar proyectos con acompañamiento del profesor en vivo.",
    ],
    previous: "No requiere experiencia previa en programación.",
    materials:
      "Computadora o notebook con conexión a internet capaz de ejecutar Roblox Studio.",
    duration:
      "Consultá los días, horarios y duración de los grupos disponibles.",
    mode: "Virtual en vivo",
  },
];
export const locations = [
  {
    slug: "mercedes",
    name: "Mercedes",
    address: "Calle 9 Nº 374",
    note: "Sede central",
    map: "https://maps.app.goo.gl/LzzHWjMarwEYo8Qv7",
  },
  {
    slug: "lujan",
    name: "Luján",
    address: "Ituzaingó 315",
    note: "Robótica y Programación",
    map: "https://www.google.com/maps/search/?api=1&query=Ituzaing%C3%B3+315+Luj%C3%A1n+Buenos+Aires",
  },
  {
    slug: "san-andres-de-giles",
    name: "San Andrés de Giles",
    address: "Mitre 241",
    note: "Robótica",
    map: "https://www.google.com/maps/search/?api=1&query=Mitre+241+San+Andr%C3%A9s+de+Giles+Buenos+Aires",
  },
  {
    slug: "9-de-julio",
    name: "9 de Julio",
    address: "Levalle 772",
    note: "Robótica y Programación",
    map: "https://www.google.com/maps/search/?api=1&query=Levalle+772+9+de+Julio+Buenos+Aires",
  },
  {
    slug: "general-rodriguez",
    name: "General Rodríguez",
    address: "Carlos Pellegrini 955",
    note: "Robótica y Programación",
    map: "https://www.google.com/maps/search/?api=1&query=Carlos+Pellegrini+955+General+Rodr%C3%ADguez+Buenos+Aires",
  },
];
export const faqs = [
  [
    "¿Desde qué edad pueden empezar?",
    "Desde los 5 años. Cada taller tiene un rango de edades y una propuesta diferente. Si tu hijo está entre dos grupos, escribinos para orientarte según su edad y experiencia.",
  ],
  [
    "¿Necesitan saber programar?",
    "Los talleres iniciales empiezan desde cero. En Programadores recomendamos una base de robótica o programación, aunque no es excluyente. En Maestros enseñamos Python desde el inicio.",
  ],
  [
    "¿Hay que comprar un kit de robótica?",
    "No. En los talleres presenciales de robótica, los kits y dispositivos se usan en clase y están incluidos. Para Roblox Studio virtual hace falta una computadora compatible con el programa y conexión a internet.",
  ],
  [
    "¿Cómo son las clases?",
    "Las clases son grupales y prácticas, con proyectos y desafíos para construir y programar en equipo. El docente acompaña el progreso de cada estudiante.",
  ],
  [
    "¿Cuáles son los horarios y aranceles?",
    "Escribinos con la edad del alumno, el taller y la sede que te interesa. Te contamos los horarios, aranceles y disponibilidad del grupo antes de inscribirte.",
  ],
  [
    "¿Puedo hacer un taller desde casa?",
    "Sí. Videojuegos con Roblox Studio se dicta de forma virtual, con clases en vivo y acompañamiento del profesor.",
  ],
];
