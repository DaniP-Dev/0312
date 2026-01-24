import { NextResponse } from "next/server";

const headerData = [
  { label: "Home", href: "/" },
  {
    label: "Properties",
    href: "/properties/properties-list",
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
  { label: "Contact", href: "/contact" },
  { label: "Documentation", href: "/documentation" },
];

export const GET = async () => {
  return NextResponse.json({
    headerData,
  });
};
