import { Building2, Globe2, Mail, PhoneCall } from "lucide-react";

import { ContactForm } from "@/components/forms/contact-form";
import { LeadForm } from "@/components/forms/lead-form";
import { SectionTitle } from "@/components/ui/section-title";
import { company } from "@/data/company";
import { siteConfig } from "@/lib/config";

interface ContactSectionProps {
  mode?: "institutional" | "product";
  title?: string;
  description?: string;
}

export function ContactSection({
  mode = "institutional",
  title = "Fale com a gente",
  description = "Solicite uma demonstração, apresente seu cenário e descubra como a HTA pode estruturar a próxima evolução do seu sistema.",
}: ContactSectionProps) {
  const isProductMode = mode === "product";

  return (
    <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
      <div>
        <SectionTitle
          eyebrow="Contato"
          title={title}
          description={description}
        />

        <div className="mt-8 grid gap-4">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Building2 className="h-4 w-4 text-brand-blue" />
              HTA Sistemas
            </div>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Portal institucional preparado para apresentar a empresa, destacar produtos, captar leads e sustentar expansão por subdomínios.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-panel">
            <div className="space-y-4 text-sm text-slate-600">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-blue" />
                <span>{siteConfig.email}</span>
              </a>
              <a href={siteConfig.whatsappUrl} className="flex items-center gap-3">
                <PhoneCall className="h-4 w-4 text-brand-green" />
                <span>{siteConfig.whatsappDisplay}</span>
              </a>
              <a href={siteConfig.whatsappUrl} className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-brand-blue" />
                <span>{company.contactPoints[2]?.value ?? siteConfig.mainDomain}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {isProductMode ? (
        <LeadForm
          title="Receba uma demonstração do G3N"
          description="Preencha os dados abaixo e nossa equipe retorna com a próxima etapa."
        />
      ) : (
        <ContactForm />
      )}
    </div>
  );
}
