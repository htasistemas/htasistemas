import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProductResolved } from "@/types/product";

interface FinalCtaProps {
  product: ProductResolved;
}

export function FinalCta({ product }: FinalCtaProps) {
  return (
    <div className="brand-surface rounded-[36px] border border-white/10 px-6 py-10 text-white shadow-panel lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
            CTA final
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            Leve sua instituição para outro nível
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            Comece agora e tenha mais controle, organização e resultados com o {product.name}.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="success" size="lg" asChild>
            <a href="#contato">
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={product.ctaSecondaryHref}>
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
