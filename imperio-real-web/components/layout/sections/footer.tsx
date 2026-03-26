import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-primary/15 rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-10">
          <div className="xl:col-span-1">
            <Link href="/" className="flex font-bold items-center mb-4">
              <div className="w-10 h-10 mr-3 rounded-lg bg-gradient-to-tr from-[#6E1F2A] via-[#8A2C3B] to-[#C8A15A] text-white flex items-center justify-center border border-primary/20">
                <Scale className="w-5 h-5" />
              </div>

              <h3 className="text-2xl">Imperio Real</h3>
            </Link>

            <p className="text-muted-foreground leading-relaxed">
              Acompañamiento inmobiliario y jurídico con enfoque profesional,
              estratégico y confiable.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Navegación</h3>

            <Link href="#inicio" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              Inicio
            </Link>

            <Link href="#servicios" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              Servicios
            </Link>

            <Link href="#equipo" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              Equipo
            </Link>

            <Link href="#contacto" className="opacity-70 hover:opacity-100 hover:text-primary transition-all">
              Contacto
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Servicios</h3>

            <div className="opacity-70">Asesoría inmobiliaria</div>
            <div className="opacity-70">Revisión jurídica</div>
            <div className="opacity-70">Contratos y documentos</div>
            <div className="opacity-70">Acompañamiento legal</div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Contacto</h3>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Bogotá, Colombia</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="w-4 h-4 text-primary" />
              <span>+57 300 000 0000</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <span>contacto@imperioreal.com</span>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <section className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
          <h3>
            &copy; 2026 Imperio Real. Todos los derechos reservados.
          </h3>

          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-primary" />
            <span>Servicios inmobiliarios y jurídicos</span>
          </div>
        </section>
      </div>
    </footer>
  );
};