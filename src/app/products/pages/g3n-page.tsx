import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { BenefitsGrid } from "@/components/sections/benefits-grid";
import { ContactSection } from "@/components/sections/contact-section";
import { FeaturesGrid } from "@/components/sections/features-grid";
import { FinalCta } from "@/components/sections/final-cta";
import { HeroProduct } from "@/components/sections/hero-product";
import { HowItWorks } from "@/components/sections/how-it-works";
import { PainPoints } from "@/components/sections/pain-points";
import { PricingSection } from "@/components/sections/pricing-section";
import { SolutionSection } from "@/components/sections/solution-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { featuredProduct } from "@/lib/config";
import { buildSeoMeta } from "@/lib/seo";

const seo = buildSeoMeta({
  title: "G3N | Sistema de gestão do terceiro setor",
  description:
    "Landing page comercial do G3N, sistema de gestão para instituições do terceiro setor com controle, organização e indicadores.",
  canonical: featuredProduct.canonicalUrl,
});

export function G3nPage() {
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

      <HeroProduct product={featuredProduct} />
      <SectionShell>
        <PainPoints product={featuredProduct} />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <SolutionSection product={featuredProduct} />
      </SectionShell>
      <SectionShell>
        <FeaturesGrid product={featuredProduct} />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <BenefitsGrid product={featuredProduct} />
      </SectionShell>
      <SectionShell>
        <HowItWorks product={featuredProduct} />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <PricingSection product={featuredProduct} />
      </SectionShell>
      <SectionShell>
        <TestimonialsSection product={featuredProduct} />
      </SectionShell>
      <SectionShell className="bg-white/75">
        <FinalCta product={featuredProduct} />
      </SectionShell>
      <SectionShell id="contato">
        <ContactSection
          mode="product"
          title="Fale com a gente"
          description="Preencha os dados abaixo para receber uma demonstração comercial do G3N e alinhar os próximos passos com a HTA Sistemas."
        />
      </SectionShell>
    </>
  );
}
