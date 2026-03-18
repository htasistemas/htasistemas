import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { CompanyAbout } from "@/components/sections/company-about";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { HeroCompany } from "@/components/sections/hero-company";
import { ServicesGrid } from "@/components/sections/services-grid";
import { SystemsShowcase } from "@/components/sections/systems-showcase";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

const seo = buildSeoMeta({
  title: "HTA Sistemas | Tecnologia para gestão, automação e evolução digital",
  description:
    "Portal institucional da HTA Sistemas para apresentar a empresa, seus serviços e seu ecossistema de produtos digitais, incluindo G3N, Finance Pro Master, Gestor Político e Portal de Atendimento.",
  canonical: siteConfig.mainUrl,
});

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.canonical} />
      </Helmet>

      <HeroCompany />
      <SectionShell id="sobre">
        <CompanyAbout />
      </SectionShell>
      <SectionShell id="solucoes" className="bg-white/75">
        <ServicesGrid />
      </SectionShell>
      <SectionShell id="sistemas">
        <SystemsShowcase />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <FeaturedProduct />
      </SectionShell>
      <SectionShell>
        <CtaBand />
      </SectionShell>
      <SectionShell id="contato" className="bg-white/75">
        <ContactSection />
      </SectionShell>
    </>
  );
}
