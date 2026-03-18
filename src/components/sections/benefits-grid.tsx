import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface BenefitsGridProps {
  product: ProductResolved;
}

export function BenefitsGrid({ product }: BenefitsGridProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Benefícios"
        title="Resultados que você percebe no dia a dia"
        description="Quando a operação deixa de depender de planilhas e papéis, a instituição ganha fluidez, clareza e capacidade de decisão."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {product.benefits.map((benefit) => (
          <Card key={benefit.title} className="h-full bg-slate-50">
            <CardContent>
              <h3 className="font-display text-xl font-semibold text-slate-950">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {benefit.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
