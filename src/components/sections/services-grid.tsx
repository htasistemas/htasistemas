import {
  ChartColumnBig,
  Code2,
  Layers3,
  PlugZap,
  RefreshCcw,
  Workflow,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { company } from "@/data/company";
import type { ServiceIconKey } from "@/types/company";

const serviceIcons: Record<ServiceIconKey, typeof Code2> = {
  code: Code2,
  workflow: Workflow,
  layout: Layers3,
  chart: ChartColumnBig,
  plug: PlugZap,
  refresh: RefreshCcw,
  sparkles: Layers3,
  shield: Layers3,
};

export function ServicesGrid() {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Soluções e serviços"
        title="Estrutura comercial e técnica para tirar sistemas do papel e manter a evolução"
        description="A HTA combina produto, tecnologia e operação para construir sistemas profissionais, escaláveis e prontos para o crescimento."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {company.services.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <Card key={service.id} className="h-full">
              <CardContent>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
