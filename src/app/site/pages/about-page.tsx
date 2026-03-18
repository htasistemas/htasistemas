import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { CompanyAbout } from "@/components/sections/company-about";
import { CtaBand } from "@/components/sections/cta-band";
import { SectionTitle } from "@/components/ui/section-title";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

const seo = buildSeoMeta({
  title: "Sobre a HTA Sistemas | Software house com foco em gestão e automação",
  description:
    "Conheça a HTA Sistemas, sua proposta institucional, diferenciais técnicos e visão de construção de produtos digitais.",
  canonical: `${siteConfig.mainUrl}/sobre`,
});

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <SectionShell className="pb-10 pt-14">
        <SectionTitle
          eyebrow="Sobre"
          title="Uma base institucional pensada para posicionar a HTA como empresa de software séria, escalável e comercial"
          description="Esta página aprofunda o posicionamento da marca, a visão de produto e a capacidade de evoluir soluções sob medida ou próprias."
        />
      </SectionShell>
      <SectionShell className="pt-0">
        <CompanyAbout />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <CtaBand />
      </SectionShell>
    </>
  );
}
