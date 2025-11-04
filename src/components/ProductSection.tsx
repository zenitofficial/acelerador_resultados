import productImage from "@/assets/serum-product.jpg";

export const ProductSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          <img 
            src={productImage} 
            alt="Sérum Turbo Antiacne - Frasco profissional com fórmula intensiva para tratamento de acne"
            className="w-full rounded-2xl shadow-strong"
          />
        </div>
      </div>
    </section>
  );
};
