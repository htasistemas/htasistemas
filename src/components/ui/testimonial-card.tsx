import { Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full">
      <CardContent>
        <Quote className="h-8 w-8 text-brand-blue/30" />
        <p className="mt-5 text-lg leading-8 text-slate-700">
          "{testimonial.quote}"
        </p>
        <div className="mt-6 border-t border-slate-200 pt-5">
          <div className="font-semibold text-slate-950">{testimonial.author}</div>
          <div className="text-sm text-slate-500">{testimonial.role}</div>
        </div>
      </CardContent>
    </Card>
  );
}
