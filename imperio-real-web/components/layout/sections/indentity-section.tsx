import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Gem, ShieldCheck, Target } from "lucide-react";

const identityItems = [
  {
    title: "Misión",
    icon: Target,
    content:
      "Nuestra misión es brindar asesoría jurídica e inmobiliaria con cercanía, agilidad y excelencia, integrando herramientas tecnológicas que faciliten el acceso a soluciones legales eficaces en Colombia.",
  },
  {
    title: "Visión",
    icon: Eye,
    content:
      "Nuestra visión es consolidarnos como la firma líder en asesoría jurídica e inmobiliaria en Colombia, reconocida por ofrecer soluciones integrales, virtuales y presenciales, en derecho civil, comercial, de familia e inmobiliario.",
  },
  {
    title: "Valores",
    icon: Gem,
    content:
      "Nos guiamos por la integridad, la transparencia, la confianza, la excelencia profesional y la empatía en cada relación con nuestros clientes.",
  },
  {
    title: "Compromiso",
    icon: ShieldCheck,
    content:
      "Nos comprometemos a brindar atención personalizada, soluciones efectivas y un acompañamiento constante, asegurando que cada proceso se desarrolle con ética, responsabilidad y cercanía.",
  },
];

export const IdentitySection = () => {
  return (
    <section id="nosotros" className="container py-16 sm:py-20">
      <div className="mx-auto mb-10 max-w-4xl text-center">
        <Badge
          variant="outline"
          className="mb-4 border-[#daba8a]/35 bg-white/10 px-4 py-2 text-sm text-[#48101e] backdrop-blur-sm"
        >
          Identidad institucional
        </Badge>

        <h2 className="mb-4 font-[var(--font-title)] text-3xl font-bold text-foreground md:text-4xl">
          Nuestra Esencia, Visión y Compromiso
        </h2>

        <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
          Imperio Real es una firma de asesoría jurídica e inmobiliaria
          con 20 años de trayectoria en Colombia, comprometida con la 
          excelencia, la innovación y el cierre de la brecha de género 
          a través de la vinculación y proyección de abogadas en su equipo. 
          Brindamos consultoría, asesoría y representación legal en las áreas 
          de derecho civil, de familia, comercial e inmobiliario, de manera 
          presencial y virtual, distinguiéndonos por la agilidad, la eficiencia, 
          la economía procesal y el impulso de mecanismos extraprocesales como la conciliación.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
        {identityItems.map((item) => {
          const Icon = item.icon;

          return (
            <Card
              key={item.title}
              className="group relative h-full overflow-hidden rounded-2xl border border-[#d4af63]/15 bg-white shadow-[0_10px_30px_rgba(106,27,44,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(106,27,44,0.10)]"
            >
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#6a1b2c] via-[#d4af63] to-[#6a1b2c]" />

              <CardHeader className="space-y-3 p-5 pb-2 sm:p-6 sm:pb-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af63]/20 bg-[#faf7f8] shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5 text-primary" />
                </div>

                <CardTitle className="font-[var(--font-title)] text-2xl text-primary">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="p-5 pt-0 text-[15px] leading-7 text-muted-foreground sm:p-6 sm:pt-0">
                {item.content}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};