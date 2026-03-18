import { ArrowRight, Globe2, LayoutGrid, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { portfolioProducts, siteConfig } from "@/lib/config";

export function FeaturedProduct() {
  return (
    <div className="institutional-surface rounded-[36px] px-6 py-10 text-slate-950 shadow-panel lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <SectionTitle
          eyebrow="Arquitetura comercial da HTA"
          title="Uma presença institucional forte para sustentar várias soluções digitais"
          description="A HTA não depende de um único produto. O portal principal fortalece a marca e direciona o visitante para as soluções certas, enquanto cada sistema pode crescer com comunicação e subdomínio próprios."
          className="[&_h2]:text-slate-950 [&_p]:text-slate-600"
        />

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="institutional-panel rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Globe2 className="h-4 w-4 text-brand-blue" />
                Domínio principal
              </div>
              <div className="mt-2 text-2xl font-semibold text-slate-950">
                {siteConfig.mainDomain}
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Marca, narrativa institucional, linhas de solução e distribuição de leads.
              </p>
            </div>

            <div className="institutional-panel rounded-[28px] p-6">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                <LayoutGrid className="h-4 w-4 text-brand-teal" />
                Portfólio atual
              </div>
              <div className="mt-2 text-2xl font-semibold text-slate-950">
                {portfolioProducts.length} produtos mapeados
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                G3N, Finance Pro Master, Gestor Político e Portal de Atendimento já aparecem como estrutura de ecossistema.
              </p>
            </div>
          </div>

          <div className="institutional-panel rounded-[28px] p-6">
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Estratégia de expansão
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Cada novo sistema pode entrar com página dedicada, CTA próprio, SEO individual, domínio canônico e fallback interno no portal principal.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {portfolioProducts.map((product) => (
                <span
                  key={product.id}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700 shadow-sm"
                >
                  {product.name}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="success" asChild>
              <Link to="/sistemas">
                Ver portfólio completo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link to="/contato">Falar com a HTA</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
