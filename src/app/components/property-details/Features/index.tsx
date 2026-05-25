import { projectInventoryData } from "@/data/projectInventory";

interface FeaturesProps {
  slug?: string;
}

const Features = ({ slug }: FeaturesProps) => {
  const normalizedSlug = (slug || "").toLowerCase();
  const project = projectInventoryData.find(
    (item) =>
      item.slug.toLowerCase() === normalizedSlug ||
      item.id.toLowerCase() === normalizedSlug,
  );

  if (!project) {
    return null;
  }

  return (
    <section className="bg-light">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-lg border border-border bg-white p-6 md:p-8 shadow-property">
            <span className="inline-flex rounded-lg bg-light text-primary text-xs sm:text-sm font-semibold px-3 py-1 mb-4">
              Detalles del condominio
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-midnight_text mb-4">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg text-gray leading-7">
              {project.shortDescription} {project.inventory} lotes de{" "}
              {project.lotSize.frontMeters} metros de frente por{" "}
              {project.lotSize.depthMeters} metros de fondo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 md:mt-8">
            <div className="rounded-lg border border-border bg-white p-5 shadow-property">
              <p className="text-xs uppercase tracking-wide text-gray mb-1">
                Inventario
              </p>
              <p className="text-xl font-bold text-midnight_text">
                {project.inventory} lotes
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5 shadow-property">
              <p className="text-xs uppercase tracking-wide text-gray mb-1">
                Dimension de lote
              </p>
              <p className="text-xl font-bold text-midnight_text">
                {project.lotSize.frontMeters}m x {project.lotSize.depthMeters}m
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5 shadow-property">
              <p className="text-xs uppercase tracking-wide text-gray mb-1">
                Servicios publicos
              </p>
              <p className="text-xl font-bold text-midnight_text">
                {project.services.join(" · ")}
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-5 shadow-property">
              <p className="text-xs uppercase tracking-wide text-gray mb-1">
                Ubicacion
              </p>
              <p className="text-xl font-bold text-midnight_text">{project.location}</p>
            </div>
          </div>

          <div className="mt-6 md:mt-8">
            <h3 className="text-lg sm:text-xl font-semibold text-midnight_text mb-4">
              Amenidades destacadas
            </h3>
            <div className="rounded-lg border border-border bg-white p-4 sm:p-5 shadow-property">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 sm:[grid-auto-rows:1fr]">
            {project.amenities.map((amenity) => (
              <div
                key={amenity}
                className="h-full min-h-[78px] rounded-lg border border-border bg-light px-4 py-3 text-sm sm:text-base text-gray flex items-center gap-2"
              >
                <span className="h-5 w-5 rounded-full bg-white text-primary text-xs font-bold flex items-center justify-center shrink-0">
                  +
                </span>
                <p className="leading-6">{amenity}</p>
              </div>
            ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;