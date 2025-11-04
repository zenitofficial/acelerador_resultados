import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
            <ShieldCheck className="h-10 w-10 text-success" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Sem risco: satisfação garantida ou seu dinheiro de volta
          </h2>

          <p className="text-lg text-muted-foreground">
            Se em até <strong className="text-foreground">15 dias</strong> você não perceber melhora, 
            devolvemos seu investimento.
            <br />
            <strong className="text-foreground">Simples assim.</strong> Porque acreditamos no que entregamos.
          </p>
        </div>
      </div>
    </section>
  );
};
