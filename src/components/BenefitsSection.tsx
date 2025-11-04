import { CheckCircle2 } from "lucide-react";

export const BenefitsSection = () => {
  const benefits = [
    "Reduz a vermelhidão em até 48h",
    "Desobstrui poros e controla a oleosidade",
    "Acelera a cicatrização de espinhas ativas",
    "Resultado visível em até 7 dias"
  ];

  return (
    <section className="bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
            Por que quem acelera o tratamento vê resultado antes?
          </h2>
          
          <div className="mb-8 text-center text-lg text-muted-foreground">
            <p className="mb-4">
              O <strong className="text-foreground">Sérum Turbo Antiacne</strong> foi criado pra agir junto com seu tratamento principal, 
              potencializando os efeitos nas primeiras semanas.
            </p>
            <p>
              Enquanto o produto base limpa e equilibra a pele, o sérum atua diretamente nos poros, 
              combatendo inflamações e reduzindo marcas ativas.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 rounded-lg bg-success/5 p-4 transition-all hover:bg-success/10"
              >
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-success" />
                <span className="text-base font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
