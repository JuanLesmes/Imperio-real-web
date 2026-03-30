import { Building2, FileText, Scale, ShieldCheck } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const serviceList: ServiceProps[] = [
  {
    title: "Asesoría inmobiliaria",
    description:
      "Acompañamiento en procesos de compra, venta, arriendo y negociación de inmuebles, con enfoque estratégico y respaldo profesional.",
    icon: <Building2 className="h-6 w-6 text-primary" />,
  },
  {
    title: "Estudio y revisión jurídica",
    description:
      "Análisis de documentos, contratos y situaciones legales relacionadas con bienes inmuebles y otros procesos jurídicos relevantes.",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
  {
    title: "Representación y acompañamiento legal",
    description:
      "Orientación y respaldo en trámites, conflictos y decisiones jurídicas que requieren claridad, seguridad y buena estrategia.",
    icon: <Scale className="h-6 w-6 text-primary" />,
  },
  {
    title: "Seguridad y confianza en cada proceso",
    description:
      "Nuestro enfoque combina seriedad, seguimiento y atención cercana para que cada cliente avance con mayor tranquilidad.",
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="container py-20 sm:py-24">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <h2 className="mb-2 text-lg tracking-wider text-primary">
          Servicios
        </h2>

        <h3 className="mb-4 font-[var(--font-title)] text-3xl font-bold text-foreground md:text-4xl">
          Soluciones inmobiliarias y jurídicas
        </h3>

        <p className="mx-auto text-base leading-8 text-muted-foreground md:text-lg">
          En Imperio Real ofrecemos acompañamiento profesional para personas y
          negocios que buscan respaldo confiable en decisiones inmobiliarias y
          procesos jurídicos.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {serviceList.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="group relative h-full overflow-hidden rounded-2xl border border-[#d4af63]/15 bg-white shadow-[0_10px_30px_rgba(106,27,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(106,27,44,0.10)]"
          >
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6a1b2c] via-[#d4af63] to-[#6a1b2c]" />

            <CardHeader className="space-y-4 p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d4af63]/20 bg-[#faf7f8] shadow-sm transition-transform duration-300 group-hover:scale-105">
                {icon}
              </div>

              <CardTitle className="min-h-[56px] font-[var(--font-title)] text-xl leading-snug text-primary">
                {title}
              </CardTitle>

              <CardDescription className="text-[15px] leading-7 text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};