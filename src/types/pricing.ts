export interface PricingPlan {
  id: string;
  productId: string;
  name: string;
  price: string;
  description: string;
  featured?: boolean;
  bullets: string[];
}
