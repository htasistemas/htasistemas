import { CheckCircle2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <Card
      className={
        plan.featured
          ? "border-brand-green/30 bg-gradient-to-b from-green-50 to-white"
          : ""
      }
    >
      <CardContent>
        {plan.featured ? (
          <Badge className="border-brand-green/20 bg-brand-green/10 text-brand-green">
            Plano principal
          </Badge>
        ) : null}
        <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">
          {plan.name}
        </h3>
        <div className="mt-3 text-3xl font-extrabold text-slate-950">
          {plan.price}
        </div>
        <p className="mt-4 text-base leading-7 text-slate-600">{plan.description}</p>

        <div className="mt-6 space-y-3">
          {plan.bullets.map((bullet) => (
            <div key={bullet} className="flex items-start gap-3 text-sm text-slate-600">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <Button
          variant={plan.featured ? "success" : "secondary"}
          className="mt-8 w-full"
          asChild
        >
          <a href="#contato">Solicitar demonstração</a>
        </Button>
      </CardContent>
    </Card>
  );
}
