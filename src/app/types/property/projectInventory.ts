export type LotSize = {
  frontMeters: number;
  depthMeters: number;
};

export type ProjectInventoryItem = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  inventory: number;
  lotSize: LotSize;
  services: string[];
  amenities: string[];
  location: string;
  status: "Disponible" | "Agotado";
  category: string;
  region: string;
  coverImage: string;
};
