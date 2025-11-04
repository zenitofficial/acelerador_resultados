import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

export const OfferSection = () => {
  const handleCheckout = () => {
    // Redirect to checkout or add to cart
    console.log("Redirecting to checkout...");
    alert("Redirecionando para o checkout...");
  };

  return (
    <section id="offer-section" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-gradient-hero p-8 text-center shadow-strong md:p-12">
            <Badge variant="secondary" className="mb-4 text-sm font-semibold">
              Oferta única pra quem já garantiu o tratamento principal 👇
            </Badge>

            <h2 className="mb-6 text-3xl font-bold text-primary-foreground md:text-4xl">
              Por tempo limitado, você pode levar o Sérum Turbo Antiacne – Efeito Intensivo 7 Dias por apenas:
            </h2>

            <div className="mb-4">
              <div className="mb-2 text-2xl text-primary-foreground/80 line-through">
                R$ 69,90
              </div>
              <div className="text-5xl font-bold text-primary-foreground md:text-6xl">
                💰 R$ 39,90
              </div>
            </div>

            <div className="mb-8 flex items-center justify-center gap-2 text-primary-foreground">
              <Truck className="h-5 w-5" />
              <span className="text-sm font-medium">
                Disponível somente nesta página, com frete grátis combinado ao seu pedido
              </span>
            </div>

            <Button 
              variant="cta" 
              size="xl"
              onClick={handleCheckout}
              className="w-full md:w-auto"
            >
              🔥 Sim! Quero adicionar o Sérum Turbo ao meu pedido
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
