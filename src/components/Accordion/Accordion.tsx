import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

type PerguntasFrequentesType = {
  pergunta: string;
  descricao: string;
};

const perguntasFrequentes: PerguntasFrequentesType[] = [
  {
    pergunta: "Pergunta X",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi suscipit officiis minima magnam et, recusandae doloremque ullam asperiores, nemo, temporibus veniam molestiae molestias. Sunt aperiam culpa officia iusto repellat nulla."
  },
  { pergunta: "Pergunta 2", descricao: "Descrição 2" },
  { pergunta: "Pergunta 3", descricao: "Descrição 3" }
];

export function AccordionComponent() {
  return (
    <section className="text-white bg-kramer_bg flex flex-col items-center justify-center py-10">
     
      <div className="py-14 flex">
        <h1 className="text-3xl font-black text-center">PERGUNTAS FREQUENTES</h1>
      </div>
      <Accordion
        type="single"
        collapsible
        className=" flex flex-col gap-2 rounded-[10px]"
      >
        {perguntasFrequentes.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="flex flex-col w-[350px] bg-sky-400 hover:shadow-[0px_0px_30px_#38bdf8] duration-300 rounded-[10px]"
          >
            <AccordionTrigger className="flex justify-center gap-8">
              <h6 className="text-lg font-bold">{item.pergunta}</h6>
            </AccordionTrigger>
            <AccordionContent className="flex  justify-center text-justify rounded-b-[10px]">
              <p className="p-5 text-lg font-medium">{item.descricao}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
