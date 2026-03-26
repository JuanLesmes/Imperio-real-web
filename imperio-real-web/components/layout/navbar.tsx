"use client";

import { Building2, Menu, Scale } from "lucide-react";
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
    href: "#servicios",
    label: "Servicios",
  },
  {
    href: "#nosotros",
    label: "Nosotros",
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
    <header className="shadow-inner bg-background/85 backdrop-blur-md w-[92%] md:w-[88%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-primary/20 z-40 rounded-2xl flex justify-between items-center px-3 py-2">
      <Link href="/" className="font-bold text-lg flex items-center text-foreground">
        <div className="bg-gradient-to-tr from-[#6E1F2A] via-[#8A2C3B] to-[#C8A15A] rounded-lg w-10 h-10 mr-3 border border-primary/20 text-white flex items-center justify-center shadow-sm">
          <Scale className="w-5 h-5" />
        </div>
        <span>Imperio Real</span>
      </Link>

      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden text-foreground"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-primary/20"
          >
            <div>
              <SheetHeader className="mb-6 ml-2">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <div className="bg-gradient-to-tr from-[#6E1F2A] via-[#8A2C3B] to-[#C8A15A] rounded-lg w-10 h-10 mr-3 border border-primary/20 text-white flex items-center justify-center shadow-sm">
                      <Building2 className="w-5 h-5" />
                    </div>
                    Imperio Real
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
                    className="justify-start text-base hover:text-primary"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-3" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          {routeList.map(({ href, label }) => (
            <NavigationMenuItem key={href}>
              <NavigationMenuLink asChild>
                <Link
                  href={href}
                  className="text-base px-3 py-2 transition-colors hover:text-primary"
                >
                  {label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />

        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          <Link href="#contacto">Agenda tu consulta</Link>
        </Button>
      </div>
    </header>
  );
};