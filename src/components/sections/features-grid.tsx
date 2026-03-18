import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface FeaturesGridProps {
  product: ProductResolved;
}

export function FeaturesGrid({ product }: FeaturesGridProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Funcionalidades"
        title="Tudo que você precisa em um só sistema"
        description="Recursos organizados para facilitar a rotina, padronizar dados e melhorar o controle operacional."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {product.features.map((feature) => (
          <Card key={feature.title} className="h-full">
            <CardContent>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                <span className="h-2.5 w-2.5 rounded-full bg-brand-blue" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
