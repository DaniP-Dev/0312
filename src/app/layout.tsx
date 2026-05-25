import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Aoscompo from "@/utils/aos";
const dmsans = DM_Sans({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
import { AppContextProvider } from "../context-api/PropertyContext";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/scroll-to-top";
import Header from "./components/layout/header";
import SessionProviderComp from "./provider/SessionProviderComp";
import type { Metadata } from "next";

const description =
  "Constructora inmobiliaria especializada en la venta de condominios modernos y de calidad | La Guajira, Colombia";

export const metadata: Metadata = {
  title: "Constructora 0312",
  description,
  openGraph: {
    title: "Constructora 0312",
    description,
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${dmsans.className}`}>
        <AppContextProvider>
          <SessionProviderComp>
            <ThemeProvider
              attribute="class"
              enableSystem={false}
              defaultTheme="light"
            >
              <Aoscompo>
                <Header />
                <NextTopLoader />
                {children}
                <Footer />
              </Aoscompo>
              <ScrollToTop />
            </ThemeProvider>
          </SessionProviderComp>
        </AppContextProvider>
      </body>
    </html>
  );
}
