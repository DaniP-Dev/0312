import React from "react";
import Image from "next/image";
import "../../../style/index.css";
import Link from "next/link";

export default function History() {
  return (
    <section className="history-bg">
      <div className="container lg:max-w-screen-xl md:max-w-screen-md mx-auto grid grid-cols-1 lg:grid-cols-12 py-40">
        <div
          className="col-span-1 lg:col-span-7 5xl:col-span-8 px-4"
          data-aos="fade-right"
        >
          <p className="text-4xl text-midnight_text mb-8 font-bold">
            Constructora 0312:
            <br />
            respaldo para construir contigo
          </p>
          <p className="mb-8 pb-2 text-gray">
            Somos una constructora enfocada en proyectos residenciales con
            acompanamiento tecnico, legal y comercial en cada etapa. Nuestro
            compromiso es ayudarte a tomar decisiones seguras para invertir y
            construir patrimonio.
          </p>
          <Link
            href="/propiedades"
            className="text-xl px-9 py-3 border border-primary text-primary hover:text-white hover:bg-primary rounded-lg"
          >
            Ver propiedades
          </Link>
        </div>
        <div
          className="hidden lg:block 5xl:col-span-4 5xl:ml-11 col-span-1 lg:col-span-5"
          data-aos="fade-left"
        >
          <div className="bg-white p-6 max-w-80 border-4 border-primary rounded-lg">
            <p className="mb-8 text-3xl text-midnight_text font-bold">
              CONSTRUCTORA 0312
            </p>
            <div className="flex items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-black text-opacity-60">
                  Equipo profesional
                </p>
                <p className="text-[46px] leading-[1.1] -mt-1 text-midnight_text font-bold mb-2">
                  0312
                </p>
                <p className="text-black text-opacity-60">Confianza y respaldo</p>
              </div>
              <Image
                src="/images/logo.png"
                alt="Logo Constructora 0312"
                width={90}
                height={90}
              />
            </div>
            <p className="text-black text-opacity-60">
              Acompannamiento integral para compra de lote, diseno y construccion
              personalizada.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-6 text-primary font-semibold hover:underline"
            >
              Hablar con un asesor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
