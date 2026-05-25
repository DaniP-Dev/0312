import type { ProjectInventoryItem } from "../app/types/property/projectInventory";

export const projectInventoryData: ProjectInventoryItem[] = [
  {
    id: "Paraiso-Real",
    slug: "Paraiso-Real",
    title: "Paraíso Real",
    shortDescription:
      "540 lotes con servicios publicos y zonas comunes para vivienda familiar.",
    inventory: 540,
    lotSize: {
      frontMeters: 20,
      depthMeters: 25,
    },
    services: ["Agua", "Luz", "Gas"],
    amenities: [
      "Seguridad 24 horas",
      "Porteria moderna",
      "Piscina adultos e infantil",
      "Kiosko comunitario",
      "Cancha polifuncional",
      "Lago de 4000 metros",
      "Parque: zona infantil y zona de jovenes",
      "Boulevard central con sendero peatonal",
      "Gimnasio",
      "Caballeriza",
    ],
    location: "A 2 km del Ejercito Nacional",
    status: "Disponible",
    category: "lotes",
    region: "guajira",
    coverImage: "/images/paraisoRealLogo.jpeg",
  },
];
