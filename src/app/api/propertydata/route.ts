import { propertyData } from "@/app/types/property/propertyData";
import { NextResponse } from "next/server";

const property: propertyData[] = [
  // PROYECTO 1: Primer proyecto de Constructora 0312
  {
    id: "1",
    property_img: "/images/properties/prop-17.jpg",
    property_title: "Unidad 101 - Proyecto 0312",
    property_price: "$150,000",
    category: "proyecto-0312", // ← Cambio: ahora es por proyecto
    category_img: "/images/property_option/warehouse.svg", // ← Ícono del proyecto
    rooms: 2,
    bathrooms: 1,
    location: "Soledad, Atlántico",
    livingArea: "85m²",
    tag: "Venta",
    check: true,
    status: "Disponible",
    type: "Apartamento",
    beds: 2,
    garages: 1,
    region: "atlantico",
    name: "Proyecto 0312",
    slug: "proyecto-0312-unidad-101",
  },
  {
    id: "2",
    property_img: "/images/properties/prop-18.jpg",
    property_title: "Unidad 201 - Proyecto 0312",
    property_price: "$165,000",
    category: "proyecto-0312",
    category_img: "/images/property_option/warehouse.svg",
    rooms: 3,
    bathrooms: 2,
    location: "Soledad, Atlántico",
    livingArea: "110m²",
    tag: "Venta",
    check: true,
    status: "Disponible",
    type: "Apartamento",
    beds: 3,
    garages: 1,
    region: "atlantico",
    name: "Proyecto 0312",
    slug: "proyecto-0312-unidad-201",
  },
  // Agregar más unidades del Proyecto 0312 según sea necesario

  // Proyectos futuros (vacíos por ahora, listos para agregar)
  // {
  //   category: "proyecto-futuro-2",
  //   ...
  // }
];

export async function GET() {
  return NextResponse.json(property);
}
