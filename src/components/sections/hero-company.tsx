import { ArrowRight, Building2, Layers3, MessageCircle, Orbit } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { portfolioProducts, siteConfig } from "@/lib/config";

export function HeroCompany() {
  return (
    <section className="overflow-hidden px-6 pb-12 pt-10 lg:px-8 lg:pb-16 lg:pt-12">
      <div className="hero-company-surface mx-auto max-w-7xl rounded-[40px] border border-slate-200/80 px-6 py-10 shadow-panel lg:px-10 lg:py-12">
        <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-brand-blue/15 bg-brand-blue/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-brand-blue">
              Software house • Ecossistema digital • Produtos e soluções escaláveis
            </div>
            <h1 className="mt-6 max-w-4xl font-display text-3xl font-bold leading-tight text-slate-950 md:text-5xl">
              {company.heroTitle}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              {company.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="success" size="lg" asChild>
                <Link to="/sistemas">
                  Explorar sistemas
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link to="/contato">Solicitar demonstração</Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <a href={siteConfig.whatsappUrl}>
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {company.highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[28px] border border-slate-200 bg-white/80 p-5 backdrop-blur"
                >
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                    {item.title}
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="soft-panel rounded-[34px] p-5">
            <div className="rounded-[30px] border border-slate-200 bg-white/80 p-6 text-slate-950 lg:p-7">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-brand-blue">
                    Ecossistema HTA
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
                    Portfólio de sistemas com base institucional unificada
                  </h2>
                </div>
                <div className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">
                  {portfolioProducts.length} linhas de produto
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {portfolioProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="font-display text-base font-semibold text-slate-950 md:text-lg">
                          {product.name}
                        </div>
                        <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                          {product.segment}
                        </div>
                      </div>
                      <div className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600 shadow-sm">
                        {product.status}
                      </div>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {product.shortDescription}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <Building2 className="h-5 w-5 text-brand-blue" />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Domínio institucional
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    {siteConfig.mainDomain}
                  </div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <Orbit className="h-5 w-5 text-brand-teal" />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Subdomínios de produto
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Vitrine e jornada próprias
                  </div>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-slate-50/90 p-4">
                  <Layers3 className="h-5 w-5 text-brand-blue" />
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
                    Portfólio escalável
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Base pronta para expansão
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
