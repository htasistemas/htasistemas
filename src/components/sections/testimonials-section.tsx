import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { ProductResolved } from "@/types/product";

interface TestimonialsSectionProps {
  product: ProductResolved;
}

export function TestimonialsSection({ product }: TestimonialsSectionProps) {
  return (
    <div className="space-y-10">
      <SectionTitle
        eyebrow="Prova social"
        title="Quem usa, recomenda"
        description="A linguagem do produto deve transmitir maturidade, confiança e prontidão comercial."
        align="center"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {product.testimonials.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>
    </div>
  );
}
