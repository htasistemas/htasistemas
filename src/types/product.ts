import type { PricingPlan } from "@/types/pricing";
import type { Testimonial } from "@/types/testimonial";

export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductBenefit {
  title: string;
  description: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

export interface ProductStat {
  label: string;
  value: string;
}

export interface ProductSummary {
  id: string;
  name: string;
  slug: string;
  subdomain: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  segment: string;
  status: string;
  isFeatured: boolean;
  tagline: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  fallbackPath: string;
  canonicalUrl: string;
  heroTitle: string;
  heroSubtitle: string;
  challenges: string[];
  features: ProductFeature[];
  benefits: ProductBenefit[];
  steps: ProductStep[];
  stats: ProductStat[];
  pricingIds: string[];
  testimonialIds: string[];
}

export interface ProductResolved extends ProductSummary {
  pricing: PricingPlan[];
  testimonials: Testimonial[];
}
