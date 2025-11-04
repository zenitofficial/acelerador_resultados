import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export const HeroSection = () => {
  const handleCTA = () => {
    // Scroll to offer section or redirect to checkout
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-soft py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-destructive">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm font-semibold">Oferta exclusiva — Tempo limitado</span>
          </div>
          
          <h1 className="mb-4 text-3xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            🚨 Resultados ainda mais rápidos contra a acne!
          </h1>
          
          <h2 className="mb-8 text-xl text-muted-foreground md:text-2xl">
            Você está prestes a dar um passo enorme pra acabar com a acne.
            <br />
            <span className="font-semibold text-foreground">
              Mas e se você pudesse acelerar os resultados e ver a pele limpa em até 7 dias?
            </span>
          </h2>

          <Button 
            variant="cta" 
            size="xl" 
            onClick={handleCTA}
            className="shadow-strong"
          >
            👉 Sim, quero turbinar meus resultados!
          </Button>
        </div>
      </div>
    </section>
  );
};
