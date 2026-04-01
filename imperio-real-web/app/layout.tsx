import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Imperio Real | Servicios inmobiliarios y jurídicos",
  description:
    "Imperio Real ofrece acompañamiento profesional en servicios inmobiliarios y jurídicos, con atención cercana, estratégica y confiable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={cn(
          "min-h-screen bg-background font-[var(--font-body)] bg-luxury-waves",
          inter.variable,
          playfair.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}