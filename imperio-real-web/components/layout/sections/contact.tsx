"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Building2, Clock3, Mail, Phone } from "lucide-react";
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

const formSchema = z.object({
  firstName: z.string().min(2, "Ingresa un nombre válido").max(255),
  lastName: z.string().min(2, "Ingresa un apellido válido").max(255),
  email: z.string().email("Ingresa un correo válido"),
  subject: z.string().min(2, "Selecciona un asunto"),
  message: z.string().min(10, "Escribe un mensaje más detallado"),
});

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
    <section id="contacto" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contacto
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">
              Conversemos sobre tu caso
            </h2>
          </div>

          <p className="mb-8 text-muted-foreground lg:w-5/6 leading-relaxed">
            En Imperio Real te brindamos orientación en asuntos inmobiliarios y
            jurídicos con un enfoque cercano, estratégico y profesional. Cuéntanos
            tu necesidad y nos pondremos en contacto contigo.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2 mb-1 items-center">
                <Building2 className="text-primary" />
                <div className="font-bold">Ubicación</div>
              </div>

              <div className="text-muted-foreground">
                Bogotá, Colombia
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1 items-center">
                <Phone className="text-primary" />
                <div className="font-bold">Teléfono</div>
              </div>

              <div className="text-muted-foreground">
                +57 300 000 0000
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1 items-center">
                <Mail className="text-primary" />
                <div className="font-bold">Correo</div>
              </div>

              <div className="text-muted-foreground">
                contacto@imperioreal.com
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1 items-center">
                <Clock3 className="text-primary" />
                <div className="font-bold">Horario de atención</div>
              </div>

              <div className="text-muted-foreground">
                <div>Lunes a viernes</div>
                <div>8:00 AM - 5:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-card/80 border border-primary/10 shadow-sm">
          <CardHeader className="text-primary text-2xl">
            Solicita información
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col md:!flex-row gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Nombres</FormLabel>
                        <FormControl>
                          <Input placeholder="Juan" {...field} />
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
                          <Input placeholder="Pérez" {...field} />
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
                        <Input
                          type="email"
                          placeholder="correo@ejemplo.com"
                          {...field}
                        />
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
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona una opción" />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value="Asesoría inmobiliaria">
                            Asesoría inmobiliaria
                          </SelectItem>
                          <SelectItem value="Revisión jurídica">
                            Revisión jurídica
                          </SelectItem>
                          <SelectItem value="Contratos y documentos">
                            Contratos y documentos
                          </SelectItem>
                          <SelectItem value="Acompañamiento legal">
                            Acompañamiento legal
                          </SelectItem>
                          <SelectItem value="Consulta general">
                            Consulta general
                          </SelectItem>
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