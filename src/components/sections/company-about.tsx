import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionTitle } from "@/components/ui/section-title";
import { company } from "@/data/company";

export function CompanyAbout() {
  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
      <SectionTitle
        eyebrow="Sobre a HTA Sistemas"
        title={company.aboutTitle}
        description={company.aboutParagraphs[0]}
      />

      <div className="grid gap-4">
        <Card>
          <CardContent>
            <Badge className="border-brand-blue/15 bg-brand-blue/10 text-brand-blue">
              Posicionamento institucional
            </Badge>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {company.aboutParagraphs[1]}
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-4 sm:grid-cols-3">
          {company.highlights.map((item) => (
            <Card key={item.title} className="bg-slate-50">
              <CardContent>
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {item.title}
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
