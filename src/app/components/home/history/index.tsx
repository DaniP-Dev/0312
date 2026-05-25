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
            Nuestra Historia <br />
            Cómo nos convertimos en líderes
          </p>
          <p className="mb-8 pb-2 text-gray">
            Más de tres décadas ayudando a propietarios a vender sus condominios con éxito. Evolucionamos y mejoramos nuestros servicios para ofrecerte la mejor experiencia y resultados.
          </p>
          <Link
            href="/propiedades"
            className="text-xl px-9 py-3 border border-primary text-primary hover:text-white hover:bg-primary rounded-lg"
          >
            Más detalles
          </Link>
        </div>
        <div
          className="hidden lg:block 5xl:col-span-4 5xl:ml-11 col-span-1 lg:col-span-5"
          data-aos="fade-left"
        >
          <div className="bg-white p-4 max-w-60 border-4 border-primary rounded-lg">
            <p className="mb-16 text-3xl text-midnight_text font-bold">
              MEJOR EMPRESA DE CONDOMINIOS
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-black text-opacity-60">
                  Años de experiencia
                </p>
                <p className="text-[65px] leading-[1.2] -mt-1 text-midnight_text font-bold mb-2">
                  33
                </p>
              </div>
              <div>
                <Image
                  src="/images/history/logo.svg"
                  alt="company"
                  width={93}
                  height={130}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
