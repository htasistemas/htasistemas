import { Globe2, Layers3, Waypoints } from "lucide-react";
import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { SystemsShowcase } from "@/components/sections/systems-showcase";
import { SectionTitle } from "@/components/ui/section-title";
import { featuredProduct, siteConfig } from "@/lib/config";
import { buildSeoMeta } from "@/lib/seo";

const seo = buildSeoMeta({
  title: "Sistemas desenvolvidos | Portal escalável da HTA Sistemas",
  description:
    "Conheça a estrutura institucional e comercial da HTA Sistemas para múltiplos produtos e subdomínios, com base pronta para expansão do portfólio.",
  canonical: `${siteConfig.mainUrl}/sistemas`,
});

export function SystemsPage() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <SectionShell className="pb-10 pt-14">
        <SectionTitle
          eyebrow="Sistemas"
          title="Uma arquitetura comercial preparada para site institucional, produtos próprios e futuros subdomínios"
          description="O domínio principal apresenta a marca. Cada produto pode operar com narrativa comercial, SEO e campanhas próprias, sem perder a consistência da HTA."
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
            <Globe2 className="h-5 w-5 text-brand-blue" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
              htasistemas.com.br
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Vitrine institucional da HTA Sistemas, seus serviços, produtos publicados e captação de leads.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
            <Waypoints className="h-5 w-5 text-brand-green" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
              {featuredProduct.subdomain}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Página comercial do G3N, com SEO próprio, CTA direto e fallback local em {featuredProduct.fallbackPath}.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
            <Layers3 className="h-5 w-5 text-brand-blue" />
            <h3 className="mt-4 font-display text-xl font-semibold text-slate-950">
              Novos produtos
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Estrutura reutilizável para futuras landing pages como sistema-x.htasistemas.com.br e sistema-y.htasistemas.com.br.
            </p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white/75">
        <SystemsShowcase />
      </SectionShell>
      <SectionShell>
        <FeaturedProduct />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <CtaBand />
      </SectionShell>
    </>
  );
}
