import { Helmet } from "react-helmet-async";

import { SectionShell } from "@/components/layout/section-shell";
import { ContactSection } from "@/components/sections/contact-section";
import { buildSeoMeta } from "@/lib/seo";
import { siteConfig } from "@/lib/config";

const seo = buildSeoMeta({
  title: "Contato | Solicite uma demonstração com a HTA Sistemas",
  description:
    "Entre em contato com a HTA Sistemas para apresentar sua necessidade, solicitar demonstração e conhecer o portfólio de soluções da empresa.",
  canonical: `${siteConfig.mainUrl}/contato`,
});

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <link rel="canonical" href={seo.canonical} />
      </Helmet>

      <SectionShell className="pt-14">
        <ContactSection />
      </SectionShell>
    </>
  );
}
