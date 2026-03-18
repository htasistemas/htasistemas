import { CheckCircle2 } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface SolutionSectionProps {
  product: ProductResolved;
}

export function SolutionSection({ product }: SolutionSectionProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <SectionTitle
        eyebrow="Solução"
        title="O G3N resolve tudo isso para você"
        description="O G3N é um sistema completo que centraliza todas as informações da sua instituição em um único lugar, trazendo organização, controle e eficiência."
      />

      <Card className="brand-surface border-white/10 text-white">
        <CardContent>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
            Como o G3N atua
          </div>
          <div className="mt-6 space-y-4">
            {product.features.slice(0, 3).map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-100" />
                <div>
                  <div className="font-semibold text-white">{feature.title}</div>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
