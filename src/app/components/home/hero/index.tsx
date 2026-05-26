"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { projectInventoryData } from "@/data/projectInventory";
import { CONTACT } from "@/config/contact";

const Hero = () => {
  const router = useRouter();
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isHeroInView, setIsHeroInView] = useState(true);
  const featuredProject = projectInventoryData[0];
  const inventoryLabel = featuredProject
    ? `${featuredProject.inventory} lotes disponibles`
    : "Inventario actualizado";
  const lotSizeLabel = featuredProject
    ? `${featuredProject.lotSize.frontMeters}m x ${featuredProject.lotSize.depthMeters}m`
    : "Tamano de lote";
  const highlights = featuredProject?.amenities?.slice(0, 3) ?? [];

  useEffect(() => {
    const enableAudioOnFirstInteraction = () => {
      if (!videoRef.current) return;

      videoRef.current.muted = false;
      videoRef.current
        .play()
        .catch(() => {
          // Algunos navegadores mantienen restricciones y requieren play manual.
        });
    };

    window.addEventListener("pointerdown", enableAudioOnFirstInteraction, {
      once: true,
    });
    window.addEventListener("keydown", enableAudioOnFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("pointerdown", enableAudioOnFirstInteraction);
      window.removeEventListener("keydown", enableAudioOnFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const videoEl = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          videoEl.muted = true;
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!videoContainerRef.current) return;

    const videoContainerEl = videoContainerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.75 },
    );

    observer.observe(videoContainerEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative pt-0 lg:pt-32 pb-10 md:pb-12 lg:pb-14 lg:min-h-[calc(100vh-88px)] bg-gradient-to-b from-white via-[#F7FAFE] to-[#EEF5FC] overflow-x-hidden">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">
          <div className="order-2 lg:order-1 lg:col-span-7 pt-8 lg:pt-0">
            <p className="text-primary font-semibold tracking-wide mb-4 uppercase">
              Nuevo condominio campestre en lanzamiento
            </p>
            <h1 className="text-3xl md:text-4xl xl:text-5xl leading-tight text-midnight_text font-bold mb-3">
              Paraiso Real: precio de lanzamiento $26.000.000
            </h1>
            <p className="text-primary font-semibold text-lg mb-3">
              Separa tu lote hoy y aprovecha esta etapa de preventa.
            </p>
            <p className="text-gray text-base md:text-lg leading-7 md:leading-8 max-w-2xl mb-6">
              Invierte en el nuevo condominio con ubicacion estrategica, respaldo
              legal y valorizacion proyectada. Oferta especial por tiempo
              limitado.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              <div className="bg-white border border-border rounded-xl p-3.5">
                <p className="text-xs text-gray mb-1">Inventario</p>
                <p className="text-midnight_text font-bold text-base">{inventoryLabel}</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-3.5">
                <p className="text-xs text-gray mb-1">Tamano de lote</p>
                <p className="text-midnight_text font-bold text-base">{lotSizeLabel}</p>
              </div>
              <div className="bg-white border border-border rounded-xl p-3.5">
                <p className="text-xs text-gray mb-1">Ubicacion</p>
                <p className="text-midnight_text font-bold text-base">
                  {featuredProject?.location ?? "Ubicacion por definir"}
                </p>
              </div>
            </div>

            {highlights.length > 0 && (
              <ul className="flex flex-wrap gap-3 mb-6">
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

            <div className="flex flex-nowrap gap-2 sm:gap-4">
              <button
                onClick={() => router.push("/propiedades/Paraiso-Real")}
                className="flex-1 bg-primary text-white px-4 sm:px-7 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Informacion
              </button>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border border-primary text-primary px-4 sm:px-7 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors text-center whitespace-nowrap"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end -mx-4 lg:mx-0">
            <div className="w-full lg:w-auto bg-transparent border-0 rounded-none p-0 shadow-none lg:bg-white lg:border lg:border-border lg:rounded-2xl lg:p-3 lg:shadow-property">
              <div
                ref={videoContainerRef}
                className="relative rounded-none lg:rounded-xl overflow-hidden bg-black w-full h-[100svh] sm:h-[100svh] lg:w-[300px] lg:h-[533px]"
              >
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover object-[center_58%] lg:object-center"
                  src="/constructora0312videoparaisoreal.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  Tu navegador no soporta video HTML5.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/70 lg:hidden pointer-events-none" />
                
                <div className="absolute bottom-8 left-4 right-4 lg:hidden">
                  <p className="text-white text-2xl font-bold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)]">
                    Vive Paraiso Real en primera fila
                  </p>
                  <p className="text-white/90 text-sm mt-2 mb-4">
                    Condominio campestre con precio de preventa por tiempo
                    limitado.
                  </p>
                  <div className="flex flex-nowrap gap-2 sm:gap-3">
                    <button
                      onClick={() => router.push("/propiedades/Paraiso-Real")}
                      className="flex-1 px-3 py-2.5 rounded-lg bg-white text-midnight_text text-sm font-semibold whitespace-nowrap"
                    >
                      Ver Paraiso Real
                    </button>
                    <a
                      href={CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2.5 rounded-lg bg-primary/90 text-white text-sm font-semibold border border-white/40 text-center whitespace-nowrap"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                {isHeroInView && (
                  <div className="fixed bottom-3 right-3 z-30 lg:hidden pointer-events-none">
                    <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm border border-white/35 shadow-lg">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white/20 animate-ping" />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="relative animate-bounce"
                      >
                        <path
                          d="M12 6V18M12 18L7 13M12 18L17 13"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
