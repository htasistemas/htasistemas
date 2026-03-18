import { ArrowRight, Globe, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ProductResolved } from "@/types/product";

interface ProductCardProps {
  product: ProductResolved;
}

export function ProductCard({ product }: ProductCardProps) {
  const isAvailable = product.status !== "Em breve";
  const badgeClassName = isAvailable
    ? "border-brand-blue/15 bg-brand-blue/10 text-brand-blue"
    : "border-amber-200 bg-amber-50 text-amber-700";
  const ctaHref = isAvailable ? product.fallbackPath : product.ctaPrimaryHref;
  const ctaLabel = isAvailable ? "Ver solução" : product.ctaPrimaryLabel;

  return (
    <Card className="h-full overflow-hidden">
      <CardContent className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className={badgeClassName}>{product.status}</Badge>
            <h3 className="mt-4 font-display text-2xl font-bold text-slate-950">
              {product.name}
            </h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
              {product.segment}
            </p>
          </div>
          <div className="rounded-3xl bg-brand-cloud p-3 text-brand-blue">
            <Layers3 className="h-5 w-5" />
          </div>
        </div>

        <p className="mt-4 text-base leading-7 text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-6 grid gap-3 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-brand-blue" />
            <span>{product.subdomain}</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand-green" />
            <span>{product.category}</span>
          </div>
        </div>

        <div className="mt-8">
          <Button asChild>
            <Link to={ctaHref}>
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
