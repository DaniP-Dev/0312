"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Logo from "./logo";
import HeaderLink from "./navigation/HeaderLink";
import MobileHeaderLink from "./navigation/MobileHeaderLink";
import { CONTACT } from "@/config/contact";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const isHomePage = pathUrl === "/";

  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState<{ user: any } | null>(null);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Function to handle scroll to set sticky class
  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  // Function to handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathUrl]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/layoutdata");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setData(data?.headerData || []);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  console.log("data", data);

  const handleSignOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const isMobileHeroMode = isHomePage && !sticky && !navbarOpen;

  return (
    <header
      className={`fixed h-24 top-0 z-50 w-full transition-all duration-300 ${
        isMobileHeroMode
          ? "bg-transparent border-b border-transparent shadow-none lg:bg-white lg:border-border lg:shadow-sm"
          : "bg-white border-b border-border shadow-sm"
      } ${sticky ? "shadow-lg" : ""}`}
    >
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4">
        <div className="h-24 py-1">
          <Logo />
        </div>
        <nav className="hidden lg:flex flex-grow items-center justify-center space-x-6">
          {data.map((item: any, index: any) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <Link
            href={CONTACT.whatsappUrl}
            className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </Link>
          {!isMobileHeroMode && (
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-xl transition-colors bg-transparent border border-transparent"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 mt-1.5 bg-black"></span>
              <span className="block w-6 h-0.5 mt-1.5 bg-black"></span>
            </button>
          )}
        </div>
      </div>
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40" />
      )}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 z-50 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${navbarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text">
            Menu
          </h2>
          <button
            onClick={() => setNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-start p-4">
          {data.map((item: any, index: any) => (
            <MobileHeaderLink key={index} item={item} />
          ))}
          <div className="mt-4 flex flex-col space-y-4 w-full">
            <Link
              href={CONTACT.whatsappUrl}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
