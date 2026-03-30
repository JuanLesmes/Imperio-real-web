import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Building2, Mail, Scale, ShieldCheck } from "lucide-react";
import Image from "next/image";


const highlights = [
  {
    title: "Enfoque inmobiliario",
    description:
      "Acompañamiento cercano en procesos relacionados con bienes raíces, negociación y orientación comercial.",
    icon: <Building2 className="h-5 w-5 text-primary" />,
  },
  {
    title: "Respaldo jurídico",
    description:
      "Visión profesional para revisar, orientar y dar mayor seguridad a decisiones legales importantes.",
    icon: <Scale className="h-5 w-5 text-primary" />,
  },
  {
    title: "Confianza y seriedad",
    description:
      "Cada caso se atiende con responsabilidad, claridad y compromiso en cada etapa del proceso.",
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
  },
  {
    title: "Atención personalizada",
    description:
      "Acompañamiento humano, estratégico y cercano según las necesidades de cada cliente.",
    icon: <Mail className="h-5 w-5 text-primary" />,
  },
];

export const TeamSection = () => {
  return (
    <section id="profesional" className="container py-20 sm:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <Badge
          variant="outline"
          className="mb-4 border-[#d4af63]/30 bg-white/80 px-4 py-2 text-primary"
        >
          Profesional
        </Badge>

        <h2 className="font-[var(--font-title)] text-3xl font-bold text-foreground md:text-4xl">
          Liderazgo con experiencia y cercanía
        </h2>
      </div>

      <div className="mx-auto max-w-7xl">
        {/* FILA SUPERIOR */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          {/* IMAGEN */}
          <div className="h-full">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-[#d4af63]/20 bg-white shadow-[0_12px_35px_rgba(106,27,44,0.08)]">
              <Image
                src="/profesional.jpeg"
                alt="Directora de Imperio Real"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* TEXTO */}
          <div className="flex h-full flex-col justify-center rounded-3xl border border-[#d4af63]/15 bg-white/80 p-6 shadow-[0_12px_35px_rgba(106,27,44,0.04)] md:p-8">
            <h3 className="mb-6 font-[var(--font-title)] text-3xl text-primary">
              Una trayectoria construida desde la confianza
            </h3>

            <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
              <p>
                Nuestra directora lidera este proyecto con una visión enfocada en
                la confianza, la atención cercana y el acompañamiento profesional
                en procesos inmobiliarios y jurídicos.
              </p>

              <p>
                Soy una abogada especializada en conciliación, así como en derecho
                civil, comercial, inmobiliario y de familia. A lo largo de mi
                carrera, he construido una sólida trayectoria basada en el
                profesionalismo y la confianza.
              </p>

              <p>
                Me dedico a lograr acuerdos extraprocesales efectivos, especialmente
                en conciliación y transacción, garantizando soluciones ágiles y
                responsables. Con empatía, claridad y un compromiso inquebrantable,
                he logrado que mis clientes no solo queden satisfechos, sino que,
                gracias a mi trabajo, me recomienden de generación en generación.
              </p>
            </div>
          </div>
        </div>

        {/* FILA INFERIOR: LOS 4 EN LA MISMA FILA */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, icon }) => (
            <Card
              key={title}
              className="group relative h-full overflow-hidden rounded-2xl border border-[#d4af63]/15 bg-white shadow-[0_10px_30px_rgba(106,27,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(106,27,44,0.10)]"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6a1b2c] via-[#d4af63] to-[#6a1b2c]" />

              <CardContent className="p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af63]/20 bg-[#faf7f8] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  {icon}
                </div>

                <CardTitle className="mb-2 font-[var(--font-title)] text-xl text-primary">
                  {title}
                </CardTitle>

                <p className="text-[15px] leading-7 text-muted-foreground">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};