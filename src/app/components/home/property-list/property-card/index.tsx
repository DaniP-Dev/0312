import Image from "next/image";
import Link from "next/link";
import "../../../../style/index.css";
import { propertyData } from "@/app/types/property/propertyData";

interface PropertyCardProps {
  property: propertyData;
  viewMode?: "grid" | "list";
}

const PropertyCard = ({ property, viewMode = "grid" }: PropertyCardProps) => {
  const isList = viewMode === "list";
  const isLot = property.type === "Lote" || Boolean(property.inventory || property.lotSize);
  const lotSizeLabel = property.lotSize
    ? `${property.lotSize.frontMeters}m x ${property.lotSize.depthMeters}m`
    : property.livingArea;
  const servicesLabel = property.services?.length
    ? property.services.join(" - ")
    : "Servicios no especificados";

  return (
    <div
      className="bg-white shadow-property rounded-lg overflow-hidden border border-border"
      data-aos="fade-up"
    >
      <Link
        href={`/propiedades/propiedades-list/${property.slug}`}
        className={`group ${isList ? "flex flex-col md:flex-row" : "flex flex-col"} `}
      >
        <div className={`relative ${isList ? "md:w-[38%]" : "w-full"}`}>
          <div className={`imageContainer w-full p-3 sm:p-4 bg-[#ffffff] ${isList ? "h-[205px] md:h-full" : "h-[205px]"}`}>
            <Image
              src={property.property_img}
              alt={`Imagen de ${property.property_title}`}
              width={640}
              height={420}
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <p className="absolute top-[10px] left-[10px] py-1 px-3 bg-white rounded-md text-primary text-xs sm:text-sm font-semibold">
            {property.tag}
          </p>

          <p className="absolute top-[10px] right-[10px] py-1 px-3 bg-white/95 rounded-md text-midnight_text text-xs sm:text-sm font-semibold">
            {property.status}
          </p>
        </div>

        <div className={`p-4 sm:p-5 ${isList ? "md:w-[62%] flex flex-col justify-center" : ""}`}>
          <div className="flex flex-col gap-2 border-b border-border pb-4 mb-4">
            <p className="text-sm uppercase tracking-wide text-primary font-semibold">
              {property.category}
            </p>
            <p className="text-xl sm:text-2xl font-bold text-midnight_text group-hover:text-primary transition-colors">
              {property.property_title}
            </p>

            {property.shortDescription && (
              <p className="text-gray text-sm leading-6 hidden sm:block">
                {property.shortDescription}
              </p>
            )}

            <div className="flex justify-between items-center gap-3 flex-wrap pt-2">
              <p className="font-bold text-lg sm:text-xl text-midnight_text">
                {property.property_price}
              </p>
              <p className="text-xs bg-[#DAE7FF] text-midnight_text py-1 px-3 rounded-lg font-semibold">
                {property.location}
              </p>
            </div>
          </div>

          {isLot ? (
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <div className="rounded-lg bg-light px-3 py-2">
                <p className="text-xs text-gray">Inventario</p>
                <p className="text-sm sm:text-base font-bold text-midnight_text">
                  {property.inventory ?? 0} lotes
                </p>
              </div>
              <div className="rounded-lg bg-light px-3 py-2">
                <p className="text-xs text-gray">Tamano</p>
                <p className="text-sm sm:text-base font-bold text-midnight_text">{lotSizeLabel}</p>
              </div>
              <div className="rounded-lg bg-light px-3 py-2">
                <p className="text-xs text-gray">Servicios</p>
                <p className="text-sm font-medium text-midnight_text truncate">{servicesLabel}</p>
              </div>
            </div>
          ) : (
            <div className="flex gap-2 flex-wrap justify-between">
              <div className="flex flex-col">
                <p className="md:text-xl text-lg font-bold flex gap-2">
                  <Image
                    src="/images/svgs/icon-bed.svg"
                    alt="Icono habitaciones"
                    height={18}
                    width={18}
                    style={{ width: "auto", height: "auto" }}
                  />
                  {property.beds}
                </p>
                <p className="text-sm text-gray">Habitaciones</p>
              </div>
              <div className="flex flex-col">
                <p className="md:text-xl text-lg font-bold flex gap-2">
                  <Image
                    src="/images/svgs/icon-tub.svg"
                    alt="Icono banos"
                    height={18}
                    width={18}
                    style={{ width: "auto", height: "auto" }}
                  />
                  {property.bathrooms}
                </p>
                <p className="text-sm text-gray">Banos</p>
              </div>
              <div className="flex flex-col">
                <p className="md:text-xl text-lg font-bold flex gap-2">
                  <Image
                    src="/images/svgs/icon-layout.svg"
                    alt="Icono area"
                    height={18}
                    width={18}
                    style={{ width: "auto", height: "auto" }}
                  />
                  {property.livingArea}
                </p>
                <p className="text-sm text-gray">Area</p>
              </div>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
