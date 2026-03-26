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
    icon: <Building2 className="w-8 h-8 text-primary" />,
  },
  {
    title: "Estudio y revisión jurídica",
    description:
      "Análisis de documentos, contratos y situaciones legales relacionadas con bienes inmuebles y otros procesos jurídicos relevantes.",
    icon: <FileText className="w-8 h-8 text-primary" />,
  },
  {
    title: "Representación y acompañamiento legal",
    description:
      "Orientación y respaldo en trámites, conflictos y decisiones jurídicas que requieren claridad, seguridad y buena estrategia.",
    icon: <Scale className="w-8 h-8 text-primary" />,
  },
  {
    title: "Seguridad y confianza en cada proceso",
    description:
      "Nuestro enfoque combina seriedad, seguimiento y atención cercana para que cada cliente avance con mayor tranquilidad.",
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Servicios
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Soluciones inmobiliarias y jurídicas
      </h2>

      <h3 className="md:w-2/3 mx-auto text-xl text-center text-muted-foreground mb-12">
        En Imperio Real ofrecemos acompañamiento profesional para personas y
        negocios que buscan respaldo confiable en decisiones inmobiliarias y
        procesos jurídicos.
      </h3>

      <div className="grid sm:grid-cols-2 gap-6 w-full lg:w-[80%] mx-auto">
        {serviceList.map(({ title, description, icon }) => (
          <Card
            key={title}
            className="bg-card/80 border border-primary/10 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <CardHeader className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
              </div>

              <CardTitle className="text-xl">{title}</CardTitle>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};