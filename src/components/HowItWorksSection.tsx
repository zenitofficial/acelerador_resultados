import { Droplets, Shield, Sparkles } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Droplets,
      title: "Penetra profundamente",
      description: "A fórmula leve atinge as camadas internas da pele"
    },
    {
      icon: Shield,
      title: "Combate bactérias",
      description: "Ingredientes ativos reduzem inflamações"
    },
    {
      icon: Sparkles,
      title: "Regenera rápido",
      description: "Acelera o processo de renovação celular"
    }
  ];

  return (
    <section className="bg-gradient-soft py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            Como o Sérum Turbo funciona?
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="mb-2 text-2xl font-bold text-foreground">
                    {index + 1}️⃣
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
