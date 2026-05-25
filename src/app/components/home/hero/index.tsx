"use client";
import { useRouter } from "next/navigation";
import Carousel from "../../carousel";
import { projectInventoryData } from "@/data/projectInventory";

const Hero = () => {
  const router = useRouter();
  const featuredProject = projectInventoryData[0];
  const inventoryLabel = featuredProject
    ? `${featuredProject.inventory} lotes disponibles`
    : "Inventario actualizado";
  const lotSizeLabel = featuredProject
    ? `${featuredProject.lotSize.frontMeters}m x ${featuredProject.lotSize.depthMeters}m`
    : "Tamano de lote";
  const highlights = featuredProject?.amenities?.slice(0, 3) ?? [];

  return (
    <section className="relative pt-32 pb-16 lg:pb-20 bg-gradient-to-b from-white via-[#F7FAFE] to-[#EEF5FC] overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-primary font-semibold tracking-wide mb-4 uppercase">
              Proyecto residencial en La Guajira
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl leading-tight text-midnight_text font-bold mb-5">
              {featuredProject?.title ?? "Condominios y lotes para invertir"}
            </h1>
            <p className="text-gray text-lg leading-8 max-w-2xl mb-8">
              {featuredProject?.shortDescription ??
                "Te ayudamos a elegir la mejor propiedad con acompanamiento profesional, seguridad juridica y una oferta clara de inventario."}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white border border-border rounded-xl p-4">
                <p className="text-xs text-gray mb-1">Inventario</p>
                <p className="text-midnight_text font-bold text-base">{inventoryLabel}</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-4">
                <p className="text-xs text-gray mb-1">Tamano de lote</p>
                <p className="text-midnight_text font-bold text-base">{lotSizeLabel}</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-4">
                <p className="text-xs text-gray mb-1">Ubicacion</p>
                <p className="text-midnight_text font-bold text-base">
                  {featuredProject?.location ?? "Ubicacion por definir"}
                </p>
              </div>
            </div>

            {highlights.length > 0 && (
              <ul className="flex flex-wrap gap-3 mb-8">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-midnight_text bg-white border border-border rounded-full px-4 py-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => router.push("/propiedades/propiedades-list")}
                className="bg-primary text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ver propiedades
              </button>
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-primary text-primary px-7 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border border-border rounded-2xl p-3 sm:p-4 shadow-property">
              <div className="h-[340px] sm:h-[420px] lg:h-[500px] rounded-xl overflow-hidden">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
