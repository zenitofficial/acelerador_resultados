import beforeAfter1 from "@/assets/before-after-1.jpg";
import beforeAfter2 from "@/assets/before-after-2.jpg";

export const BeforeAfterSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            Resultados reais de quem usou o Sérum Turbo junto com o tratamento
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-xl shadow-soft">
              <img 
                src={beforeAfter1} 
                alt="Antes e depois do tratamento com Sérum Turbo Antiacne - Redução visível de acne em 7 dias"
                className="w-full"
              />
              <div className="bg-card p-4 text-center">
                <p className="text-sm font-semibold text-success">
                  Resultados em 7 dias — uso combinado com o tratamento principal
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl shadow-soft">
              <img 
                src={beforeAfter2} 
                alt="Transformação da pele com Sérum Turbo Antiacne - Pele mais clara e saudável"
                className="w-full"
              />
              <div className="bg-card p-4 text-center">
                <p className="text-sm font-semibold text-success">
                  Resultados em 7 dias — uso combinado com o tratamento principal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
