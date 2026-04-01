"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock3, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  firstName: z.string().min(2, "Ingresa un nombre válido").max(255),
  lastName: z.string().min(2, "Ingresa un apellido válido").max(255),
  email: z.string().email("Ingresa un correo válido"),
  subject: z.string().min(2, "Selecciona un asunto"),
  message: z.string().min(10, "Escribe un mensaje más detallado"),
});

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M19.05 4.94A9.94 9.94 0 0 0 12.02 2C6.5 2 2 6.48 2 12c0 1.76.46 3.48 1.34 5L2 22l5.13-1.32A9.98 9.98 0 0 0 12.02 22C17.54 22 22 17.52 22 12a9.94 9.94 0 0 0-2.95-7.06ZM12.02 20.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.04.78.81-2.96-.2-.31A8.17 8.17 0 0 1 3.8 12c0-4.53 3.69-8.2 8.22-8.2 2.2 0 4.27.85 5.82 2.4A8.14 8.14 0 0 1 20.24 12c0 4.52-3.69 8.2-8.22 8.2Zm4.5-6.15c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.12-.17.25-.66.8-.8.96-.15.17-.3.19-.56.06-.25-.13-1.08-.4-2.05-1.28-.76-.67-1.27-1.5-1.42-1.75-.15-.25-.02-.38.11-.5.11-.11.25-.3.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.21-.49-.42-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.02 2.61.13.17 1.77 2.7 4.3 3.78.6.26 1.07.41 1.44.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.1-.23-.17-.48-.29Z" />
  </svg>
);

const contactCardClass =
  "flex items-center gap-4 rounded-2xl border border-[#d4af63]/15 bg-white/95 p-4 shadow-[0_8px_24px_rgba(106,27,44,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(106,27,44,0.10)]";

const iconBoxClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-[#f3d68a] shadow-sm";

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Asesoría inmobiliaria",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;

    const mailToLink = `mailto:contacto@imperioreal.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hola, mi nombre es ${firstName} ${lastName}.
Mi correo es ${email}.

Mensaje:
${message}`
    )}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="contacto" className="container py-12 sm:py-14">
      <section className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4">
            <Badge
                variant="outline"
                className="mb-4 border-[#daba8a]/35 bg-white/10 px-4 py-2 text-sm text-[#48101e] backdrop-blur-sm"
              >
                Contacto
              </Badge>

            <h2 className="text-3xl font-bold md:text-4xl">
              Conversemos sobre tu caso
            </h2>
          </div>

          <p className="mb-8 leading-relaxed text-muted-foreground lg:w-5/6">
            En Imperio Real te brindamos orientación en asuntos inmobiliarios y
            jurídicos con un enfoque cercano, estratégico y profesional.
            Cuéntanos tu necesidad y nos pondremos en contacto contigo.
          </p>

          <div className="flex flex-col gap-4">
            <div className={contactCardClass}>
              <div className={iconBoxClass}>
                <Building2 className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary">Ubicación</span>
                <span className="text-[15px] text-muted-foreground">
                  Carrera 13 #90-20, Oficina 206,
                </span>
                <span className="text-[15px] text-muted-foreground">
                  Bogotá, Colombia
                </span>
              </div>
            </div>

            <div className={contactCardClass}>
              <div className={iconBoxClass}>
                <WhatsAppIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary">WhatsApp</span>
                <a
                  href="https://wa.me/573178935798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
                >
                  +57 317 893 5798
                </a>
              </div>
            </div>

            <div className={contactCardClass}>
              <div className={iconBoxClass}>
                <Mail className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary">Correo</span>
                <a
                  href="mailto:imperiorealabogadas@hotmail.com"
                  className="text-[15px] text-muted-foreground transition-colors hover:text-primary"
                >
                  imperiorealabogadas@hotmail.com
                </a>
              </div>
            </div>

            <div className={contactCardClass}>
              <div className={iconBoxClass}>
                <Clock3 className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-primary">
                  Horario de atención
                </span>
                <span className="text-[15px] text-muted-foreground">
                  Lunes a viernes
                </span>
                <span className="text-[15px] text-muted-foreground">
                  8:00 AM - 5:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-card/80 border border-primary/10 shadow-sm">
          <CardHeader className="text-2xl text-primary">
            Solicita información
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                <div className="flex flex-col gap-6 md:!flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nombres</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Apellidos</FormLabel>
                        <FormControl>
                          <Input placeholder="Apellido" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="correo@ejemplo.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo de consulta</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="Asesoría inmobiliaria">Asesoría inmobiliaria</SelectItem>
                          <SelectItem value="Revisión jurídica">Revisión jurídica</SelectItem>
                          <SelectItem value="Contratos y documentos">Contratos y documentos</SelectItem>
                          <SelectItem value="Acompañamiento legal">Acompañamiento legal</SelectItem>
                          <SelectItem value="Consulta general">Consulta general</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Cuéntanos brevemente en qué podemos ayudarte..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Enviar mensaje
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter />
        </Card>
      </section>
    </section>
  );
};