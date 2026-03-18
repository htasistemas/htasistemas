import { AlertTriangle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface PainPointsProps {
  product: ProductResolved;
}

export function PainPoints({ product }: PainPointsProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Problema"
        title="Sua instituição ainda enfrenta esses desafios?"
        description="Operações descentralizadas costumam gerar atraso, retrabalho e pouca visibilidade sobre o que realmente precisa de atenção."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {product.challenges.map((challenge) => (
          <Card key={challenge} className="h-full border-amber-100 bg-white">
            <CardContent>
              <AlertTriangle className="h-6 w-6 text-amber-500" />
              <p className="mt-5 text-base leading-7 text-slate-700">{challenge}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-base leading-7 text-amber-900">
        Isso gera perda de tempo, erros e falta de crescimento.
      </div>
    </div>
  );
}
