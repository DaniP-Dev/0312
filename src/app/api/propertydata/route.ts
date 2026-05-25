import { propertyData } from "@/app/types/property/propertyData";
import { projectInventoryData } from "@/data/projectInventory";
import { NextResponse } from "next/server";

const property: propertyData[] = projectInventoryData.map((project) => ({
  id: project.id,
  property_img: project.coverImage,
  property_title: project.title,
  property_price: `${project.inventory} lotes disponibles`,
  category: project.category,
  category_img: "/images/property_option/warehouse.svg",
  rooms: 0,
  bathrooms: 0,
  location: project.location,
  livingArea: `${project.lotSize.frontMeters}m x ${project.lotSize.depthMeters}m`,
  tag: "Venta",
  check: project.inventory > 0,
  status: project.status,
  type: "Lote",
  beds: 0,
  garages: 0,
  region: project.region,
  name: project.title,
  slug: project.slug,
  inventory: project.inventory,
  lotSize: project.lotSize,
  services: project.services,
  amenities: project.amenities,
  shortDescription: project.shortDescription,
}));

export async function GET() {
  return NextResponse.json(property);
}
