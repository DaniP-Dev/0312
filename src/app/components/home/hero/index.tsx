"use client";
import "./styleHero.css";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { PropertyContext } from "@/context-api/PropertyContext";
import Carousel from "../../carousel";

const Hero = () => {
  const router = useRouter();
  const [propertiesData, setPropertiesData] = useState<any[]>([]);
  const { properties, updateFilter } = useContext(PropertyContext)!;
  const [activeTab, setActiveTab] = useState("buy");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/propertydata");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setPropertiesData(data || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const handleAdvancedSearch = () => {
    router.push("/propiedades/propiedades-list");
  };

  const handleSearchBuy = () => {
    if (location.trim() === "") {
      setError("Please enter a location to search.");
      return;
    }
    setError("");
    updateFilter("location", location);
    updateFilter("tag", "Buy");
    router.push(`/propiedades/propiedades-list`);
  };

  const suggestions = Array.from(
    new Set(propertiesData.map((item) => item.location)),
  );

  const handleSelect = (value: any) => {
    setLocation(value);
    setShowSuggestions(false);
  };

  return (
    <section className="min-h-screen relative pb-0 mt-10 lg:mt-0 dark:bg-darklight bg-no-repeat bg-gradient-to-b from-white from-10% dark:from-darkmode  to-90% dark:to-darklight overflow-x-hidden">
      <div className="flex flex-col lg:flex-row w-full h-screen flex-1">
        <div className="flex-1 lg:basis-2/3 flex items-center justify-center ">
          <Carousel />
        </div>
        <div className="bg-[#F0F6FA] dark:bg-darklight flex-1 lg:basis-1/3 flex items-start md:items-center justify-center pb-30 pt-5">
          <div className="flex flex-col gap-0 w-full px-6">
            <h2 className="flex text-center text-5xl font-bold dark:text-white">
              Encuentra tu mejor propiedad
            </h2>
            <div className="searchHost">
              <div className="buttonStyle">
                <input
                  type="text"
                  placeholder="Search..."
                  className="dark:bg-[#23272f] dark:text-white dark:placeholder:text-gray-300"
                />
                <div className="search"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
