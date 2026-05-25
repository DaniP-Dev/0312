"use client";
import React, { useState, useEffect } from "react";
import "../../../../app/style/index.css";
import Link from "next/link";

export default function Calculator() {
  const [activeTab, setActiveTab] = useState("buy");
  const [price, setPrice] = useState(10000);

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };

  const handlePriceChange = (event: any) => {
    setPrice(event.target.value);
  };

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
            Ahorra tu dinero
          </h2>
          <p className="text-xl text-gray mb-12" data-aos="fade-left">
            A veces por accidente, a veces por necesidad, haciendo de este el primer generador real en Internet.
          </p>
          <div className="relative-container">
            <div className="main-div mb-16 pt-8">
              <div className="child-container flex w-full justify-between">
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <p className="text-3xl text-midnight_text">
                    3% de ahorro
                  </p>
                  <p className="text-gray text-base">Sobre $50K</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <p className="text-3xl text-midnight_text">
                    5% de ahorro
                  </p>
                  <p className="text-gray text-base">Sobre $75K</p>
                </div>
                <div
                  className="money-dot relative"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <p className="text-3xl text-midnight_text">
                    8% de ahorro
                  </p>
                  <p className="text-gray text-base">Sobre $90K</p>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up">
            <Link
              href="/propiedades/propiedades-list"
              className="text-xl bg-primary py-3 px-8 text-white rounded-lg me-3 mb-2 border border-primary hover:bg-blue-700"
            >
              Comprar casa
            </Link>
            
          </div>
        </div>
        <div className="lg:w-auto w-full" data-aos="fade-right">
          <div className="bg-primary rounded-t-lg p-16 w-full">
            <p className="text-4xl text-white mb-6 font-bold flex items-center justify-center">
              Calculadora de ahorro
            </p>
            <div className="flex justify-center">
              <div className="flex p-3 border-4 rounded-full bg-transparent border-cyan items-center justify-center">
                <button
                  className={`px-6 py-2 text-base focus:outline-none ${
                    activeTab === "buy"
                      ? "text-white bg-cyan rounded-full"
                      : "text-white transition duration-300 rounded-full"
                  }`}
                  onClick={() => handleTabChange("buy")}
                >
                  Comprar
                </button>
              </div>
            </div>
            <div className="items-center justify-center mt-12">
              <p className="text-white flex items-center justify-center font-bold">
                AHORRO
              </p>
              <p className="mb-6 text-white flex items-center justify-center font-bold text-[50px] leading-[1.2]">
                ${price}
              </p>
              <input
                type="range"
                min="10000"
                max="4000000"
                step=""
                value={price}
                onChange={handlePriceChange}
                className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer "
              />
            </div>
            <div className="flex justify-between text-sm text-white mt-2 font-bold">
              <p>$10K</p>
              <p>$400K</p>
            </div>
          </div>
          <div className="p-4 bg-blue-700 text-white text-xl rounded-b-lg">
              <p className="text-center mb-1 opacity-70">¿Tienes preguntas?</p>
              <Link
                href={"tel:+909 887 0980"}
                className="text-center font-bold inline-block w-full"
              >
                <span className="opacity-70 !font-normal">Llámanos: </span>+909
                887 0980
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
