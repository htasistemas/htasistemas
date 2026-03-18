import { SectionTitle } from "@/components/ui/section-title";
import type { ProductResolved } from "@/types/product";

interface HowItWorksProps {
  product: ProductResolved;
}

export function HowItWorks({ product }: HowItWorksProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Como funciona"
        title="Começar é simples"
        description="A implantação foi pensada para reduzir barreira de entrada e colocar o produto em operação rapidamente."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {product.steps.map((step, index) => (
          <div
            key={step.title}
            className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-panel"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue text-base font-bold text-white">
              {index + 1}
            </div>
            <h3 className="mt-5 font-display text-xl font-semibold text-slate-950">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
