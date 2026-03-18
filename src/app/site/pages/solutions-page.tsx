import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { CtaBand } from "@/components/sections/cta-band";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SectionTitle } from "@/components/ui/section-title";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

const seo = buildSeoMeta({
  title: "Soluções da HTA Sistemas | Desenvolvimento, gestão e automação",
  description:
    "Serviços e soluções da HTA Sistemas para operações que precisam de sistemas de gestão, automação, dashboards e evolução contínua.",
  canonical: `${siteConfig.mainUrl}/solucoes`,
});

export function SolutionsPage() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <SectionShell className="pb-10 pt-14">
        <SectionTitle
          eyebrow="Soluções"
          title="A HTA Sistemas organiza produto, engenharia e operação em uma única frente de entrega"
          description="Do sistema sob medida ao produto comercializável, a estrutura foi desenhada para gerar resultado e sustentar crescimento sem improviso."
        />
      </SectionShell>
      <SectionShell className="pt-0">
        <ServicesGrid />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <CtaBand />
      </SectionShell>
    </>
  );
}
