import { NextResponse } from "next/server";

const headerData = [
  { label: "Inicio", href: "/" },
  {
    label: "Propiedades",
    href: "/propiedades/propiedades-list",
  },
  {
    label: "Blogs",
    href: "/blogs",
    // ...existing code...
    /*
submenu: [
  { label: "Blog Grid", href: "/blogs" },
  { label: "Blog Details", href: "/blogs/blog_1" },
],
*/
    // ...existing code...
  },
  { label: "Contacto", href: "/contact" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData,
  });
};
