"use client";

import { Menu, Scale } from "lucide-react";
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
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { ToggleTheme } from "./toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#inicio",
    label: "Inicio",
  },
  {
    href: "#nosotros",
    label: "Nosotros",
  },
  {
    href: "#servicios",
    label: "Servicios",
  },
  {
    href: "#profesional",
    label: "Profesional",
  },
  {
    href: "#contacto",
    label: "Contacto",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-5 z-40 mx-auto flex w-[94%] items-center justify-between rounded-2xl border border-[#d4af63]/25 bg-[#6a1b2c]/95 px-4 py-3 shadow-[0_10px_30px_rgba(106,27,44,0.18)] backdrop-blur-md md:w-[90%] lg:w-[78%] lg:max-w-screen-xl">
      <Link href="/" className="flex items-center">
        <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af63]/30 bg-gradient-to-br from-[#5b1624] via-[#7b2333] to-[#b58a3a] text-[#f5e7c2] shadow-md">
          <Scale className="h-5 w-5" />
        </div>

        <div className="flex flex-col leading-none">
          <span className="font-[var(--font-title)] text-xl tracking-wide text-[#f3d68a]">
            Imperio Real
          </span>
          <span className="hidden text-[11px] uppercase tracking-[0.25em] text-[#f8e7b5]/70 sm:block">
            Jurídico e inmobiliario
          </span>
        </div>
      </Link>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Abrir menú"
              className="rounded-full p-2 text-[#f3d68a] transition hover:bg-white/10 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-r border-[#d4af63]/25 bg-[#6a1b2c] text-[#f3d68a]"
          >
            <div>
              <SheetHeader className="mb-8 ml-1">
                <SheetTitle className="text-left">
                  <Link href="/" className="flex items-center">
                    <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af63]/30 bg-gradient-to-br from-[#5b1624] via-[#7b2333] to-[#b58a3a] text-[#f5e7c2] shadow-md">
                      <Scale className="h-5 w-5" />
                    </div>

                    <div className="flex flex-col leading-none">
                      <span className="font-[var(--font-title)] text-xl tracking-wide text-[#f3d68a]">
                        Imperio Real
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-[#f8e7b5]/70">
                        Jurídico e inmobiliario
                      </span>
                    </div>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start rounded-xl px-4 py-6 text-base text-[#f3d68a] hover:bg-white/10 hover:text-white"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>

              <div className="mt-6">
                <Button
                  asChild
                  className="w-full rounded-full bg-[#f3d68a] font-semibold text-[#6a1b2c] hover:bg-[#e7c56f]"
                >
                  <Link href="#contacto" onClick={() => setIsOpen(false)}>
                    Agenda tu consulta
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col items-start justify-start sm:flex-col">
              <Separator className="mb-4 bg-[#d4af63]/20" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList className="gap-2">
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-[#f3d68a] transition-all duration-300 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden items-center gap-3 lg:flex">
        <ToggleTheme />

        <Button
          asChild
          className="rounded-full bg-[#f3d68a] px-5 font-semibold text-[#6a1b2c] shadow-sm hover:bg-[#e7c56f]"
        >
          <Link href="#contacto">Agenda tu consulta</Link>
        </Button>
      </div>
    </header>
  );
};