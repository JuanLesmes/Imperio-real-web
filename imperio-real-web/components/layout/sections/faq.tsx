import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Badge } from "@/components/ui/badge";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Por qué es importante la Ley 820 de arrendamiento?",
    answer:
      "La Ley 820 de 2003 es importante porque regula los contratos de arrendamiento de vivienda urbana en Colombia y establece reglas claras para arrendadores y arrendatarios. Esta norma define derechos, deberes, causales de terminación, reajustes del canon y mecanismos para resolver conflictos, lo que ayuda a dar mayor seguridad jurídica a la relación de arrendamiento.",
    value: "item-1",
  },
  {
    question: "¿Cuándo se utiliza la conciliación extra judicial en derecho?",
    answer:
      "La conciliación se utiliza cuando dos o más personas tienen un conflicto y desean buscar una solución de manera pacífica, ágil y sin acudir de inmediato a un proceso judicial. En Colombia puede usarse, entre otros asuntos, en temas civiles, de familia, comerciales y algunos conflictos sobre bienes, siempre que la materia sea conciliable. Además, en ciertos casos puede ser requisito previo antes de demandar.",
    value: "item-2",
  },
  {
    question: "¿Cuánto tiempo puede estar una herencia en Colombia?",
    answer:
      "En Colombia no existe un plazo único que determine cuánto “puede durar” una herencia, porque el tiempo depende de si los herederos están de acuerdo, de la cantidad de bienes, deudas, documentos y trámites pendientes. Si hay acuerdo, la sucesión puede adelantarse ante notaría; si no lo hay, normalmente debe tramitarse ante un juez, lo que suele tomar más tiempo. Ahora bien, la acción de petición de herencia prescribe en 10 años.",
    value: "item-3",
  },
  {
    question: "¿Cuáles son los 4 elementos esenciales de un contrato?",
    answer:
      "En Colombia, los cuatro elementos esenciales para que una persona se obligue por un contrato son: capacidad legal, consentimiento libre de vicios, objeto lícito y causa lícita. Si falta uno de estos elementos, el contrato puede verse afectado en su validez.",
    value: "item-4",
  },
  {
    question: "¿Cuáles son los tipos de custodia en Colombia?",
    answer:
      "En Colombia, cuando se habla de custodia de menores, normalmente se hace referencia a la custodia y cuidado personal del niño, niña o adolescente. En la práctica, la custodia puede definirse por mutuo acuerdo entre los padres mediante conciliación, por decisión de una autoridad administrativa en un proceso de restablecimiento de derechos, o por decisión judicial de un juez de familia. Además, en los conflictos de custodia pueden establecerse esquemas como custodia exclusiva o custodia compartida, siempre atendiendo al interés superior del menor.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container max-w-3xl py-10 sm:py-12">
      <div className="mb-6 text-center">
        <Badge
          variant="outline"
          className="mb-4 border-[#daba8a]/35 bg-white/10 px-4 py-2 text-sm text-[#48101e] backdrop-blur-sm"
        >
          Preguntas y Respuestas
        </Badge>

        <h2 className="text-3xl font-bold md:text-4xl">
          Preguntas Frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};