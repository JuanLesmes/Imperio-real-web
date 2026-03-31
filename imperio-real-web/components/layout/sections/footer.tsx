import { Separator } from "@/components/ui/separator";
import { Building2, Mail, MapPin, Phone, Scale } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container pt-20 pb-0 sm:pt-24 sm:pb-0">
      <div className="overflow-hidden rounded-t-[2rem] border border-b-0 border-[#d4af63]/30 bg-[#6a1b2c] text-[#f3d68a] shadow-[0_18px_45px_rgba(106,27,44,0.28)]">
        <div className="p-8 sm:p-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 xl:grid-cols-4">
            <div className="xl:col-span-1">
              <Link href="/" className="mb-4 flex items-center font-bold">
                <div className="mr-3 flex h-11 w-11 items-center justify-center rounded-xl border border-[#d4af63]/30 bg-gradient-to-br from-[#5b1624] via-[#7b2333] to-[#b58a3a] text-[#f8e7b5] shadow-md">
                  <Scale className="h-5 w-5" />
                </div>

                <div className="flex flex-col leading-none">
                  <h3 className="font-[var(--font-title)] text-2xl text-[#f3d68a]">
                    Imperio Real
                  </h3>
                  <span className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#f8e7b5]/70">
                    Jurídico e inmobiliario
                  </span>
                </div>
              </Link>

              <p className="leading-relaxed text-[#f8e7b5]/78">
                Acompañamiento inmobiliario y jurídico con enfoque profesional,
                estratégico y confiable.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-[var(--font-title)] text-xl text-[#f3d68a]">
                Navegación
              </h3>

              <Link
                href="#inicio"
                className="text-[#f8e7b5]/78 transition-all hover:text-white"
              >
                Inicio
              </Link>

              <Link
                href="#nosotros"
                className="text-[#f8e7b5]/78 transition-all hover:text-white"
              >
                Nosotros
              </Link>

              <Link
                href="#servicios"
                className="text-[#f8e7b5]/78 transition-all hover:text-white"
              >
                Servicios
              </Link>

              <Link
                href="#profesional"
                className="text-[#f8e7b5]/78 transition-all hover:text-white"
              >
                Profesional
              </Link>

              <Link
                href="#contacto"
                className="text-[#f8e7b5]/78 transition-all hover:text-white"
              >
                Contacto
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-[var(--font-title)] text-xl text-[#f3d68a]">
                Servicios
              </h3>

              <div className="text-[#f8e7b5]/78">Asesoría inmobiliaria</div>
              <div className="text-[#f8e7b5]/78">Revisión jurídica</div>
              <div className="text-[#f8e7b5]/78">Contratos y documentos</div>
              <div className="text-[#f8e7b5]/78">Acompañamiento legal</div>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="font-[var(--font-title)] text-xl text-[#f3d68a]">
                Contacto
              </h3>

              <div className="flex items-center gap-2 text-[#f8e7b5]/78">
                <MapPin className="h-4 w-4 text-[#d4af63]" />
                <span>Bogotá, Colombia</span>
              </div>

              <div className="flex items-center gap-2 text-[#f8e7b5]/78">
                <Phone className="h-4 w-4 text-[#d4af63]" />
                <span>+57 317 893 5798</span>
              </div>

              <div className="flex items-center gap-2 text-[#f8e7b5]/78">
                <Mail className="h-4 w-4 text-[#d4af63]" />
                <span>serviciosjuridicosIR@gmail.com</span>
              </div>
            </div>
          </div>

          <Separator className="my-6 bg-[#d4af63]/20" />

          <section className="flex flex-col items-center justify-between gap-3 text-sm text-[#f8e7b5]/72 md:flex-row">
            <h3>&copy; 2026 Imperio Real. Todos los derechos reservados.</h3>

            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#d4af63]" />
              <span>Servicios inmobiliarios y jurídicos</span>
            </div>
          </section>
        </div>

        <div className="border-t border-[#d4af63]/20 bg-[#541321] px-8 py-4 text-center text-sm text-[#f8e7b5]/80 sm:px-10">
          Esta página web fue hecha por{" "}
          <a
            href="https://intisolutions.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#f3d68a] underline-offset-4 transition hover:text-white hover:underline"
          >
            Inti Solutions
          </a>
        </div>
      </div>
    </footer>
  );
};