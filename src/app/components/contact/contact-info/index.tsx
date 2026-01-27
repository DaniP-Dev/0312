import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  metadataBase: new URL("https://constructora0312.com/"),
};

const ContactInfo = () => {
  return (
    <>
      <section className="dark:bg-darkmode pt-8 pb-0 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
          <div className="flex md:flex-row flex-col lg:items-center items-start justify-center md:gap-8 gap-8">
            {/* Email */}
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className="bg-[url('/images/contact-page/email.svg')] bg-no-repeat bg-contain w-8 h-8 inline-block"></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold">
                    Escríbenos
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 pt-3 pb-2 dark:text-gray">
                    <a
                      href="mailto:constructora0312@gmail.com"
                      className="underline hover:text-primary"
                    >
                      constructora0312@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            {/* Información de la empresa */}
            <div className="flex sm:flex-row flex-col items-start sm:gap-8 gap-4">
              <div className="bg-primary/20 w-3.75 h-3.75 flex items-center justify-center rounded-full">
                <i className="bg-[url('/images/contact-page/Career.svg')] bg-no-repeat bg-contain w-9 h-9 inline-block"></i>
              </div>
              <div className="flex md:flex-col sm:flex-row flex-col md:items-start sm:items-center items-start h-full justify-between">
                <div>
                  <span className="text-midnight_text dark:text-white text-xl font-bold block mb-1">
                    Dirección
                  </span>
                  <p className="text-midnight_text/70 font-normal text-xl max-w-80 dark:text-gray mb-2">
                    CARRERA 11 14 159 DISTRACCION LA GUAJIRA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:pt-20 pt-11 md:pb-28 pb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1958.9643586178424!2d-72.885815!3d10.893022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b02d9cbce2209%3A0x11e503928100326a!2sCra.%2011%20%23%2014-61%2C%20Distraccion%2C%20Distracci%C3%B3n%2C%20La%20Guajira%2C%20Colombia!5e0!3m2!1ses!2sus!4v1769460965920!5m2!1ses!2sus"
              width="1114"
              height="477"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>
        <div className="border-b border-solid border-border dark:border-dark_border"></div>
      </section>
    </>
  );
};

export default ContactInfo;
