import { MessageCircle, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StatBadge } from "@/components/ui/stat-badge";
import type { ProductResolved } from "@/types/product";

interface HeroProductProps {
  product: ProductResolved;
}

export function HeroProduct({ product }: HeroProductProps) {
  return (
    <section className="overflow-hidden px-6 pb-12 pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="hero-surface mx-auto max-w-7xl rounded-[40px] border border-white/10 px-6 py-10 shadow-panel lg:px-10 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.92fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/85">
              {product.name} • {product.segment} • {product.status}
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-white md:text-5xl">
              {product.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              {product.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="success" size="lg" asChild>
                <a href="#contato">
                  <PlayCircle className="h-4 w-4" />
                  Solicitar demonstração
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

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {product.stats.map((stat) => (
              <StatBadge key={stat.label} label={stat.label} value={stat.value} />
            ))}
            <div className="rounded-[28px] border border-white/15 bg-white/12 p-5 backdrop-blur">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Frase de marca
              </div>
              <div className="mt-3 font-display text-xl font-bold text-white md:text-2xl">
                {product.tagline}
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Produto pronto para apresentação comercial, demonstração e entrada em operação com apoio da HTA Sistemas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
