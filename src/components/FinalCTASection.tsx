import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

export const FinalCTASection = () => {
  const handleFinalCTA = () => {
    // Redirect to checkout
    console.log("Final CTA clicked");
    document.getElementById('offer-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-soft py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-destructive">
            <Clock className="h-5 w-5" />
            <span className="text-sm font-semibold">Última chance — Esta oferta não volta</span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Se você quer ver sua pele limpa mais rápido…
            <br />
            <span className="text-primary">essa é a hora.</span>
          </h2>

          <p className="mb-8 text-xl text-muted-foreground">
            Essa oferta não aparece de novo.
            <br />
            <strong className="text-foreground">Depois que fechar essa página, ela desaparece pra sempre.</strong>
          </p>

          <Button 
            variant="success" 
            size="xl"
            onClick={handleFinalCTA}
            className="w-full md:w-auto"
          >
            ✅ Adicionar Sérum Turbo Antiacne ao meu pedido
          </Button>
        </div>
      </div>
    </section>
  );
};
