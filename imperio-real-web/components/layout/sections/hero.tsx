"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="inicio"
      className="relative container w-full overflow-hidden luxury-section"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-8%] top-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[70%] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto grid place-items-center gap-10 py-20 md:py-28 lg:max-w-screen-xl">
        <div className="space-y-8 text-center">
          <Badge
            variant="outline"
            className="border-[#d4af63]/35 bg-white/80 px-4 py-2 text-sm text-[#6a1b2c] backdrop-blur-sm"
          >
            <span className="mr-2 flex items-center gap-2">
              <Badge className="border border-[#d4af63]/20 bg-primary text-[#f3d68a] hover:bg-primary/90">
                Imperio Real
              </Badge>
            </span>
            <span className="font-medium">
              Servicios inmobiliarios y jurídicos
            </span>
          </Badge>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-[var(--font-title)] text-4xl font-bold leading-tight text-foreground md:text-6xl">
              Respaldo
              <span className="wine-gradient-text px-2"> profesional </span>
              para decisiones importantes
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            En Imperio Real reunimos experiencia en el sector inmobiliario y en
            servicios jurídicos para brindarte un acompañamiento confiable,
            estratégico y cercano, con una atención orientada a resultados.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Button
              asChild
              className="group/arrow min-w-[220px] rounded-full bg-primary px-8 py-6 font-semibold text-[#f3d68a] shadow-md hover:bg-[#581320]"
            >
              <Link href="#contacto">
                Contáctanos
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="min-w-[220px] rounded-full border-[#d4af63]/35 bg-white px-8 py-6 font-semibold text-primary hover:bg-primary hover:text-[#f3d68a]"
            >
              <Link href="#servicios">Conocer servicios</Link>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <div className="rounded-full border border-[#d4af63]/20 bg-white/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              Atención cercana y profesional
            </div>
            <div className="rounded-full border border-[#d4af63]/20 bg-white/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              Asesoría jurídica e inmobiliaria
            </div>
            <div className="rounded-full border border-[#d4af63]/20 bg-white/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
              Acompañamiento estratégico
            </div>
          </div>
        </div>

        <div className="relative mt-10 w-full">
          <div className="absolute left-1/2 top-2 h-28 w-[92%] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl lg:-top-8 lg:h-80" />

          <div className="absolute -left-3 top-10 hidden rounded-full border border-[#d4af63]/25 bg-white/85 px-4 py-2 text-sm text-[#6a1b2c] shadow-md backdrop-blur-sm md:flex md:items-center md:gap-2">
            <Sparkles className="h-4 w-4 text-[#b58a3a]" />
            Confianza y respaldo
          </div>

          <Image
            width={1200}
            height={800}
            priority
            loading="eager"
            style={{ width: "100%", height: "auto" }}
            className="relative mx-auto flex w-full items-center rounded-2xl border border-[#d8b46a]/30 shadow-2xl md:w-[1200px]"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="Vista principal de Imperio Real"
          />

          <div className="absolute bottom-0 left-0 h-20 w-full rounded-2xl bg-gradient-to-b from-background/0 via-background/35 to-background md:h-28" />
        </div>
      </div>
    </section>
  );
};