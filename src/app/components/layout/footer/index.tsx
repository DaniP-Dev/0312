"use client";
import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/config/contact";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white border-t border-border">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 col-span-12 flex items-center justify-center lg:justify-start">
            <Link href="/" className="inline-block max-w-40">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={156}
                height={38}
              />
            </Link>
          </div>
          <div className="lg:col-span-8 col-span-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            <div className="w-full">
              <h4 className="mb-4 text-lg text-midnight_text">
                Dirección
              </h4>
              <p className="mb-6 text-gray text-base">
                Constructora 0312, La Guajira, Colombia
              </p>
            </div>
            <div className="w-full">
              <h4 className="mb-4 text-lg text-midnight_text">
                Enlaces rápidos
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="inline-block text-base text-gray hover:text-primary"
                  >
                    Contacto y soporte
                  </Link>
                </li>
                <li>
                  <Link
                    href="/propiedades"
                    className="inline-block text-base text-gray hover:text-primary"
                  >
                    Propiedades
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-full">
              <h4 className="mb-4 text-lg text-midnight_text">
                Canales oficiales
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base text-gray hover:text-primary"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/constructora0312/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base text-gray hover:text-primary"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.tiktok.com/@constructora0312"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-base text-gray hover:text-primary"
                  >
                    TikTok
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-8">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-6 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-full text-center lg:text-left">
            <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap gap-4 lg:gap-10 text-base sm:text-lg md:text-xl text-black text-opacity-50 items-center lg:items-center">
              <div className="text-midnight_text">
                <span>Teléfonos :</span>
                <div className="text-gray mt-1">
                  <Link
                    href={`tel:${CONTACT.phoneE164}`}
                    className="hover:text-primary whitespace-nowrap inline-block"
                  >
                    {CONTACT.phoneDisplay}
                  </Link>
                </div>
              </div>
              <p className="text-midnight_text">
                Correo : &nbsp;
                <Link href={`mailto:${CONTACT.email}`} className="text-gray hover:text-primary">
                  {CONTACT.email}
                </Link>
              </p>
            </div>
          </div>
          <div className="max-w-lg w-full lg:justify-self-end">
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center sm:items-center gap-3 w-full">
              <p className="h-11 items-center flex text-base sm:text-lg md:text-xl font-bold text-midnight_text whitespace-nowrap">
                Boletín
              </p>
              <input
                type="text"
                className="h-11 sm:rounded-r-none border border-border focus-visible:outline-none focus:border-primary rounded-lg sm:rounded-l-lg px-3 w-full"
                placeholder="Correo electrónico"
              />
              <button className="h-11 px-6 sm:px-7 bg-primary text-base text-white rounded-lg sm:rounded-r-lg hover:bg-blue-700 whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
