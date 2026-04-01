"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, ShieldCheck, Building2 } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-10 md:pt-14"
    >
      <div className="relative min-h-[92vh] overflow-hidden rounded-[2.5rem] bg-[#48101e]">
        {/* Fondo */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat opacity-35 blur-[3px]"
            style={{
              backgroundImage: "url('/EscudoImperioReal.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-[#48101e]/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,186,138,0.10),transparent_45%)]" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl items-center justify-center px-6 py-16 text-center md:px-10">
          <div className="max-w-4xl space-y-8">
            <Badge
              variant="outline"
              className="border-[#daba8a]/35 bg-white/10 px-4 py-2 text-sm text-[#f3e5c3] backdrop-blur-sm"
            >
              <span className="mr-2 rounded-full border border-[#daba8a]/20 bg-[#350815] px-3 py-1 text-[#f3e5c3]">
                Imperio Real
              </span>
              <span className="font-medium text-[#f3e5c3]">
                Servicios inmobiliarios y jurídicos
              </span>
            </Badge>

            <div className="space-y-5">
              <h1 className="font-[var(--font-title)] text-4xl font-bold leading-tight text-white md:text-6xl">
                Respaldo jurídico e inmobiliario
                <span className="mt-2 block text-[#daba8a]">
                  para decisiones importantes
                </span>
              </h1>

              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#f3e5c3] md:text-xl">
                Acompañamos a personas y empresas con una atención cercana,
                estratégica y profesional, para brindar claridad, seguridad y
                confianza en cada proceso.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="group/arrow min-w-[220px] rounded-full bg-[#daba8a] px-8 py-6 font-semibold text-[#48101e] shadow-md hover:bg-[#e7c996]"
              >
                <Link href="#contacto">
                  Agenda tu consulta
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="min-w-[220px] rounded-full border-[#daba8a]/45 bg-white/10 px-8 py-6 font-semibold text-white hover:bg-white/15 hover:text-[#f3e5c3]"
              >
                <Link href="#servicios">Conocer servicios</Link>
              </Button>
            </div>

            <div className="grid gap-4 pt-4 md:grid-cols-3">
              <div className="flex items-start gap-3 rounded-2xl border border-[#daba8a]/25 bg-white/10 p-4 text-left backdrop-blur-sm">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#daba8a]">
                  <Scale className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Asesoría confiable
                  </h3>
                  <p className="text-sm leading-6 text-[#f3e5c3]">
                    Orientación clara y profesional en cada etapa.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#daba8a]/25 bg-white/10 p-4 text-left backdrop-blur-sm">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#daba8a]">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Enfoque inmobiliario
                  </h3>
                  <p className="text-sm leading-6 text-[#f3e5c3]">
                    Acompañamiento estratégico en decisiones patrimoniales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-[#daba8a]/25 bg-white/10 p-4 text-left backdrop-blur-sm">
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#daba8a]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    Seguridad jurídica
                  </h3>
                  <p className="text-sm leading-6 text-[#f3e5c3]">
                    Respaldo serio para actuar con tranquilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};