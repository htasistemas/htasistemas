import { PricingCard } from "@/components/ui/pricing-card";
import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface PricingSectionProps {
  product: ProductResolved;
}

export function PricingSection({ product }: PricingSectionProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Planos"
        title="Escolha o plano ideal para sua instituição"
        description="A base comercial do G3N já foi organizada para entrada rápida, operação completa ou implantação personalizada."
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {product.pricing.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
