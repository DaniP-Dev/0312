"use client";
import React from "react";
import "../../../../app/style/index.css";
import Link from "next/link";
import { CONTACT } from "@/config/contact";

export default function Calculator() {
  return (
    <section>
      <div
        className="container px-4 lg:max-w-screen-xl md:max-w-screen-md mx-auto flex flex-col lg:flex-row gap-16 justify-between items-center"
        data-aos="fade-left"
      >
        <div className="max-w-37.5 px-0 mb-8 md:mb-0" data-aos="fade-right">
          <h2
            className="text-4xl mb-4 font-bold text-midnight_text"
            data-aos="fade-left"
          >
            Invierte en tu lote y construye a tu estilo
          </h2>
          <p className="text-xl text-gray mb-12" data-aos="fade-left">
            En Paraiso Real aseguras tu terreno de 500 m2 con precio de
            lanzamiento de $26.000.000 COP.
          </p>
          <div className="relative-container">
            <div className="main-div mb-16">
              <div className="child-container grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  className="money-dot relative pl-10 pt-0 md:pl-0 md:pt-8"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p className="text-2xl md:text-3xl text-midnight_text leading-tight min-h-[64px] md:min-h-[88px]">
                    500 m2
                  </p>
                  <p className="text-gray text-base leading-snug min-h-[48px]">
                    Lote campestre
                  </p>
                </div>
                <div
                  className="money-dot relative pl-10 pt-0 md:pl-0 md:pt-8"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p className="text-2xl md:text-3xl text-midnight_text leading-tight min-h-[64px] md:min-h-[88px]">
                    Diseno personalizado
                  </p>
                  <p className="text-gray text-base leading-snug min-h-[48px]">
                    Segun tus gustos
                  </p>
                </div>
                <div
                  className="money-dot relative pl-10 pt-0 md:pl-0 md:pt-8"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <p className="text-2xl md:text-3xl text-midnight_text leading-tight min-h-[64px] md:min-h-[88px]">
                    Construccion a medida
                  </p>
                  <p className="text-gray text-base leading-snug min-h-[48px]">
                    Por etapas o completa
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray mb-8" data-aos="fade-up">
            Si lo deseas, tambien disennamos y construimos tu casa totalmente
            personalizada. El valor de la construccion se define segun diseno,
            areas y acabados elegidos.
          </p>
          <div data-aos="fade-up">
            <Link
              href="/propiedades/Paraiso-Real"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Ver Paraiso Real
            </Link>
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-16 w-full">
            <p className="text-4xl text-white mb-6 font-bold flex items-center justify-center">
              Tu proyecto, a tu medida
            </p>
            <div className="items-center justify-center mt-6">
              <p className="text-white flex items-center justify-center font-bold">
                OPORTUNIDAD DE LANZAMIENTO
              </p>
              <p className="mb-6 text-white flex items-center justify-center font-bold text-[44px] leading-[1.2] text-center">
                500 m2 + casa personalizada
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
                <div className="text-white text-center border border-cyan rounded-full h-14 px-3 flex items-center justify-center text-base font-semibold">
                  Solo lote
                </div>
                <div className="text-white text-center border border-cyan rounded-full h-14 px-3 flex items-center justify-center text-base font-semibold">
                  Lote + diseno
                </div>
                <div className="text-white text-center border border-cyan rounded-full h-14 px-3 flex items-center justify-center text-base font-semibold">
                  Lote + construccion
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
            <p className="text-center mb-1 opacity-70">Asesoria personalizada</p>
            <Link
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-bold inline-block w-full"
            >
              <span className="opacity-70 !font-normal">WhatsApp: </span>
              {CONTACT.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
