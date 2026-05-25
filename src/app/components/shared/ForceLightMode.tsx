"use client";

import { useEffect } from "react";

export default function ForceLightMode() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark");
    root.style.colorScheme = "light";
    localStorage.removeItem("theme");
    localStorage.setItem("theme", "light");
  }, []);

  return null;
}
