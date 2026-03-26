import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Scale, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const TeamSection = () => {
  return (
    <section id="profesional" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center lg:w-[85%] mx-auto">
        <div className="relative">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl"></div>

          <div className="relative overflow-hidden rounded-3xl border border-primary/15 shadow-xl bg-card">
            {/*<Image
              src="/duena-inmobiliaria.jpg"
              alt="Directora de Imperio Real"
              width={900}
              height={1100}
              className="w-full h-auto object-cover"
              priority
            />*/}
          </div>
        </div>

        <div className="space-y-6">
          <Badge variant="outline" className="border-primary/20 text-primary">
            Dirección y liderazgo
          </Badge>

          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Conoce a la persona detrás de
              <span className="text-transparent px-2 bg-gradient-to-r from-[#6E1F2A] to-[#C8A15A] bg-clip-text">
                Imperio Real
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Nuestra directora lidera este proyecto con una visión enfocada en
              la confianza, la atención cercana y el acompañamiento profesional
              en procesos inmobiliarios y jurídicos.
            </p>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Su experiencia y compromiso permiten brindar a cada cliente una
              orientación clara, estratégica y humana, entendiendo que detrás de
              cada trámite, negocio o consulta existen decisiones importantes.
            </p>

            <p>
              En Imperio Real buscamos que cada persona se sienta respaldada
              desde el primer contacto, con una atención seria, elegante y
              enfocada en generar tranquilidad y resultados.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="rounded-2xl border border-primary/10 bg-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Enfoque inmobiliario</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Acompañamiento cercano en procesos relacionados con bienes
                raíces, negociación y orientación comercial.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <Scale className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Respaldo jurídico</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Visión profesional para revisar, orientar y dar mayor seguridad
                a decisiones legales importantes.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Confianza y seriedad</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Atención con criterio, responsabilidad y una imagen profesional
                alineada con la marca.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/10 bg-card p-4">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Atención personalizada</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Cada caso se aborda con escucha, claridad y acompañamiento
                adaptado a la necesidad del cliente.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#contacto">Hablar con nosotros</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};