"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type GalleryItem = {
  title: string;
  image: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    title: "Project Complex",
    image: "/images/tabbar/tab-1.jpg",
    alt: "Imagen del complejo del proyecto",
  },
  {
    title: "Project Park",
    image: "/images/tabbar/tab-2.jpg",
    alt: "Imagen del parque del proyecto",
  },
  {
    title: "Project Gallery",
    image: "/images/tabbar/tab-3.jpg",
    alt: "Imagen de la galeria del proyecto",
  },
  {
    title: "Project Villa",
    image: "/images/tabbar/tab-4.jpg",
    alt: "Imagen de las villas del proyecto",
  },
];

export default function Tabbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const hasModalOpen = activeIndex !== null;

  const goToPrevious = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryItems.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!hasModalOpen) return;
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") goToPrevious();
      if (event.key === "ArrowRight") goToNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = hasModalOpen ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [hasModalOpen, activeIndex]);

  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-midnight_text">Galeria del proyecto</h2>
          <p className="text-gray mt-2">
            Haz clic en una imagen para verla en grande y navegar entre ellas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group rounded-lg border border-border bg-white p-2 shadow-property text-left"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-midnight_text font-semibold mt-3 mb-1 px-1">
                {item.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {hasModalOpen && activeIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-black/85 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl leading-none"
            aria-label="Cerrar visor"
          >
            x
          </button>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 sm:left-5 text-white text-4xl leading-none px-2"
            aria-label="Imagen anterior"
          >
            ‹
          </button>

          <div className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh]">
            <Image
              src={galleryItems[activeIndex].image}
              alt={galleryItems[activeIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 sm:right-5 text-white text-4xl leading-none px-2"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          <p className="absolute bottom-5 text-white text-sm sm:text-base text-center px-4">
            {galleryItems[activeIndex].title} ({activeIndex + 1}/{galleryItems.length})
          </p>
        </div>
      )}
    </section>
  );
}
