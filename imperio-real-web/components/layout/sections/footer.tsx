import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer
      id="footer"
      className="w-full overflow-hidden border-t border-[#daba8a]/20 bg-[#48101e] text-[#f2dfb2]"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-10">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-span-1">
            <Link href="/" className="mb-3 flex items-center font-bold">
              <div className="mr-3 flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#daba8a]/35 bg-[#350815] shadow-[0_6px_16px_rgba(53,8,21,0.25)]">
                <Image
                  src="/EscudoImperioReal.jpg"
                  alt="Escudo Imperio Real"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain p-[2px]"
                />
              </div>

              <div className="flex flex-col leading-none">
                <h3 className="font-[var(--font-title)] text-xl text-[#f2dfb2]">
                  Imperio Real
                </h3>
                <span className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[#daba8a]/85">
                  Jurídico e inmobiliario
                </span>
              </div>
            </Link>

            <p className="max-w-xs leading-7 text-[#f3e5c3]/78">
              Acompañamiento inmobiliario y jurídico con enfoque profesional,
              estratégico y confiable.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="font-[var(--font-title)] text-lg text-[#f2dfb2]">
              Navegación
            </h3>

            <Link href="#inicio" className="text-[#f3e5c3]/78 transition-all hover:text-white">Inicio</Link>
            <Link href="#nosotros" className="text-[#f3e5c3]/78 transition-all hover:text-white">Nosotros</Link>
            <Link href="#servicios" className="text-[#f3e5c3]/78 transition-all hover:text-white">Servicios</Link>
            <Link href="#profesional" className="text-[#f3e5c3]/78 transition-all hover:text-white">Profesional</Link>
            <Link href="#contacto" className="text-[#f3e5c3]/78 transition-all hover:text-white">Contacto</Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="font-[var(--font-title)] text-lg text-[#f2dfb2]">
              Servicios
            </h3>

            <div className="text-[#f3e5c3]/78">Asesoría inmobiliaria</div>
            <div className="text-[#f3e5c3]/78">Revisión jurídica</div>
            <div className="text-[#f3e5c3]/78">Contratos y documentos</div>
            <div className="text-[#f3e5c3]/78">Acompañamiento legal</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <h3 className="font-[var(--font-title)] text-lg text-[#f2dfb2]">
              Contacto
            </h3>

            <div className="flex items-center gap-2 text-[#f3e5c3]/78">
              <MapPin className="h-4 w-4 text-[#daba8a]" />
              <span>Bogotá, Colombia</span>
            </div>

            <div className="flex items-center gap-2 text-[#f3e5c3]/78">
              <Phone className="h-4 w-4 text-[#daba8a]" />
              <span>+57 317 893 5798</span>
            </div>

            <div className="flex items-center gap-2 text-[#f3e5c3]/78">
              <Mail className="h-4 w-4 text-[#daba8a]" />
              <span>serviciosjuridicosIR@gmail.com</span>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-[#daba8a]/20" />

        <section className="flex flex-col items-center justify-between gap-3 text-sm text-[#f3e5c3]/72 md:flex-row">
          <h3>&copy; 2026 Imperio Real. Todos los derechos reservados.</h3>

          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-[#daba8a]" />
            <span>Servicios inmobiliarios y jurídicos</span>
          </div>
        </section>
      </div>

      <div className="border-t border-[#daba8a]/20 bg-[#350815] px-6 py-3 text-center text-sm text-[#f3e5c3]/82">
        Hecho por INTI NOVA by Juan Lesmes
      </div>
    </footer>
  );
};