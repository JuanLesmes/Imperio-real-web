"use client";

import Image from "next/image";
import { Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Link from "next/link";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: "inicio", label: "Inicio" },
  { href: "nosotros", label: "Nosotros" },
  { href: "servicios", label: "Servicios" },
  { href: "profesional", label: "Profesional" },
  { href: "contacto", label: "Contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const offset = 110;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed left-1/2 top-4 z-50 flex w-[94%] -translate-x-1/2 items-center justify-between rounded-2xl border border-[#daba8a]/30 bg-[#48101e] px-4 py-3 shadow-[0_16px_38px_rgba(53,8,21,0.30)] md:w-[90%] lg:w-[78%] lg:max-w-screen-xl">
      <a
        href="#inicio"
        onClick={(e) => handleNavClick(e, "inicio")}
        className="flex items-center"
      >
        <div className="mr-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#daba8a]/35 bg-[#350815] shadow-[0_6px_16px_rgba(53,8,21,0.30)]">
          <Image
            src="/EscudoImperioReal.jpg"
            alt="Escudo Imperio Real"
            width={44}
            height={44}
            className="h-full w-full object-contain p-[2px]"
            priority
          />
        </div>

        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-title)] text-xl tracking-wide text-[#f2dfb2]">
            Imperio Real
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-[#daba8a]/85 sm:block">
            Jurídico e inmobiliario
          </span>
        </div>
      </a>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="rounded-full p-2 text-[#f2dfb2] transition hover:bg-white/10 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-r border-[#daba8a]/25 bg-[#48101e] text-[#f2dfb2]"
          >
            <div>
              <SheetHeader className="mb-8 ml-1">
                <SheetTitle className="text-left">
                  <a
                    href="#inicio"
                    onClick={(e) => handleNavClick(e, "inicio")}
                    className="flex items-center"
                  >
                    <div className="mr-3 flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-[#daba8a]/35 bg-[#350815] shadow-[0_6px_16px_rgba(53,8,21,0.30)]">
                      <Image
                        src="/EscudoImperioReal.jpg"
                        alt="Escudo Imperio Real"
                        width={44}
                        height={44}
                        className="h-full w-full object-contain p-[2px]"
                      />
                    </div>

                    <div className="flex flex-col leading-none">
                      <span className="font-[var(--font-title)] text-xl tracking-wide text-[#f2dfb2]">
                        Imperio Real
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#daba8a]/85">
                        Jurídico e inmobiliario
                      </span>
                    </div>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    asChild
                    variant="ghost"
                    className="justify-start rounded-xl px-4 py-6 text-base text-[#f2dfb2] hover:bg-white/10 hover:text-white"
                  >
                    <a href={`#${href}`} onClick={(e) => handleNavClick(e, href)}>
                      {label}
                    </a>
                  </Button>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#daba8a] font-semibold text-[#48101e] shadow-sm hover:bg-[#e7c996]"
                >
                  <a
                    href="#contacto"
                    onClick={(e) => handleNavClick(e, "contacto")}
                  >
                    Agenda tu consulta
                  </a>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col items-start justify-start sm:flex-col">
              <Separator className="mb-4 bg-[#daba8a]/20" />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <nav className="hidden items-center gap-2 lg:flex">
        {routeList.map(({ href, label }) => (
          <a
            key={href}
            href={`#${href}`}
            onClick={(e) => handleNavClick(e, href)}
            className="rounded-full px-4 py-2 text-sm font-medium text-[#f2dfb2] transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="hidden items-center gap-3 lg:flex">
        <Button
          asChild
          className="rounded-full bg-[#daba8a] px-5 font-semibold text-[#48101e] shadow-sm hover:bg-[#e7c996]"
        >
          <a
            href="#contacto"
            onClick={(e) => handleNavClick(e, "contacto")}
          >
            Agenda tu consulta
          </a>
        </Button>
      </div>
    </header>
  );
};