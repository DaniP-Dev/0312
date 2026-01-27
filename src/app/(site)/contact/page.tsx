
import React from "react";
import { Metadata } from "next";
import HeroSub from "@/app/components/shared/hero-sub";
import ContactInfo from "@/app/components/contact/contact-info";
import ContactForm from "@/app/components/contact/form";
import Location from "@/app/components/contact/office-location";
export const metadata: Metadata = {
  title: "Contacto",
  metadataBase: new URL("https://tudominio.com"), // Cambia por tu dominio real
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Inicio" },
    { href: "/contact", text: "Contacto" },
  ];
  return (
    <>
      <HeroSub
              title="Contáctanos"
              description="Estamos aquí para ayudarte a vender tu condominio. Escríbenos y recibe asesoría personalizada."
              breadcrumbLinks={breadcrumbLinks}
            />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default page;
