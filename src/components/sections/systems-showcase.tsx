import { Globe2, Layers3, Waypoints } from "lucide-react";

import { ProductCard } from "@/components/ui/product-card";
import { SectionTitle } from "@/components/ui/section-title";
import { portfolioProducts, siteConfig } from "@/lib/config";

export function SystemsShowcase() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Ecossistema de produtos"
        title="A HTA Sistemas organiza seus softwares como portfólio, não como páginas isoladas"
        description="A home institucional apresenta a empresa, o posicionamento e as frentes de produto. Cada sistema pode ganhar narrativa comercial, SEO, campanhas e subdomínio próprios."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {portfolioProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
          <Globe2 className="h-5 w-5 text-brand-blue" />
          <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
            Portal institucional
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {siteConfig.mainDomain} concentra a marca, as linhas de solução, o posicionamento institucional e a geração de leads.
          </p>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
          <Waypoints className="h-5 w-5 text-brand-green" />
          <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
            Produtos com jornada própria
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            O G3N é o primeiro produto publicado, mas a mesma estrutura já suporta novos lançamentos e campanhas específicas por sistema.
          </p>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
          <Layers3 className="h-5 w-5 text-brand-blue" />
          <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
            Crescimento sem retrabalho
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Novos produtos entram como cards, páginas e subdomínios sem desmontar a base institucional da HTA.
          </p>
        </div>
      </div>
    </div>
  );
}
