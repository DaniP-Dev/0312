import { NextResponse } from "next/server";

const menuItems = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Propiedades", href: "#properties" },
    { name: "Testimonios", href: "#testimonials" },
];

const features = [
    {
        id: 1,
        imgSrc: "/images/features/rating.svg",
        title: "Expertos en venta de condominios",
        description: "Nuestro equipo especializado te acompaña en cada paso para vender tu condominio de forma rápida y segura."
    },
    {
        id: 2,
        imgSrc: "/images/features/Give-Women's-Rights.svg",
        title: "Asesoría personalizada",
        description: "Recibe atención personalizada y estrategias de venta adaptadas a tu propiedad y necesidades."
    },
    {
        id: 3,
        imgSrc: "/images/features/live-chat.svg",
        title: "Promoción efectiva",
        description: "Utilizamos canales digitales y tradicionales para maximizar la visibilidad y atraer compradores calificados."
    }
];

const searchOptions = {
    keywords: [
        { value: '', label: 'Palabra clave', placeholder: 'Palabra clave' },
        // Agrega más opciones de palabra clave si es necesario
    ],
    locations: [
        { value: '', label: 'Ubicación' }, // Opción de marcador de posición
        { value: 'Soledad, Atlántico', label: 'Soledad, Atlántico' },
        { value: 'Barranquilla, Atlántico', label: 'Barranquilla, Atlántico' },
        { value: 'Riohacha, La Guajira', label: 'Riohacha, La Guajira' },
        { value: 'Maicao, La Guajira', label: 'Maicao, La Guajira' },
        { value: 'Santa Marta, Magdalena', label: 'Santa Marta, Magdalena' },
    ],
    category : [
        { value:'', label: 'Categoría' },
        { value:'apartment', label: 'Apartamento' },
        { value:'villa', label: 'Villa' },
        { value:'office', label: 'Oficina' },
        { value:'shop', label: 'Local' },
        { value:'house', label: 'Casa' },
        { value:'warehouse', label: 'Depósito' },
    ],
    beds: [
        { value: '', label: 'Habitaciones' },
        { value: '1', label: '1 habitación' },
        { value: '2', label: '2 habitaciones' },
        { value: '3', label: '3 habitaciones' },
        { value: '4', label: '4 habitaciones' },
        { value: '5', label: '5 habitaciones' },
        // Agrega más opciones de habitaciones si es necesario
    ],
    garages: [
        { value: '', label: 'Cocheras' },
        { value: '1', label: '1 cochera' },
        { value: '2', label: '2 cocheras' },
        // Agrega más opciones de cocheras si es necesario
    ],
    // Define otras opciones de manera similar
};

const data = [
    {
        src: "https://svgshare.com/i/187L.svg",
        src1: "https://svgshare.com/i/183P.svg",
        alt: "Image 1",
        name: "Apartment",
        count: 35,
    },
    {
        src: "https://svgshare.com/i/188i.svg",
        src1: "https://svgshare.com/i/185B.svg",
        alt: "Image 2",
        name: "Villa",
        count: 15,
    },
    {
        src: "https://svgshare.com/i/186r.svg",
        src1: "https://svgshare.com/i/185n.svg",
        alt: "Image 3",
        name: "Office",
        count: 26,
    },
    {
        src: "https://svgshare.com/i/187Z.svg",
        src1: "https://svgshare.com/i/184b.svg",
        alt: "Image 4",
        name: "Shop",
        count: 43,
    },
    {
        src: "https://svgshare.com/i/1881.svg",
        src1: "https://svgshare.com/i/183k.svg",
        alt: "Image 5",
        name: "House",
        count: 95,
    },
    {
        src: "https://svgshare.com/i/188C.svg",
        src1: "https://svgshare.com/i/184d.svg",
        alt: "Image 6",
        name: "Warehouse",
        count: 18,
    },
];

export const GET = async () => {
  return NextResponse.json({
    menuItems,
    features,
    searchOptions,
    data
  });
};