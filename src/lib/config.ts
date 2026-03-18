import { company } from "@/data/company";
import { footerNavigation, mainNavigation } from "@/data/navigation";
import { pricingPlans } from "@/data/pricing";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import type { ProductResolved, ProductSummary } from "@/types/product";

const mainDomain = "htasistemas.com.br";
const mainUrl = `https://${mainDomain}`;

export const siteConfig = {
  companyName: company.name,
  slogan: company.slogan,
  email: "comercial@htasistemas.com.br",
  whatsappNumber: "5500000000000",
  whatsappDisplay: "(00) 00000-0000",
  whatsappUrl: "https://wa.me/5500000000000",
  mainDomain,
  mainUrl,
  mainNavigation,
  footerNavigation,
  products,
} as const;

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductHref(product: ProductSummary) {
  return product.fallbackPath;
}

export function getProductCanonicalUrl(product: ProductSummary) {
  return `https://${product.subdomain}`;
}

export function resolveProduct(product: ProductSummary): ProductResolved {
  return {
    ...product,
    canonicalUrl: getProductCanonicalUrl(product),
    pricing: pricingPlans.filter((plan) => product.pricingIds.includes(plan.id)),
    testimonials: testimonials.filter((item) =>
      product.testimonialIds.includes(item.id),
    ),
  };
}

export const portfolioProducts = products.map(resolveProduct);

export const featuredProduct =
  portfolioProducts.find((product) => product.isFeatured) ?? portfolioProducts[0];

export const publishedProducts = portfolioProducts.filter(
  (product) => product.status !== "Em breve",
);
