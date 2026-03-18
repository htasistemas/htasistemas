interface SeoInput {
  title: string;
  description: string;
  canonical: string;
  image?: string;
}

export function buildSeoMeta({
  title,
  description,
  canonical,
  image = "https://htasistemas.com.br/og-default.jpg",
}: SeoInput) {
  return {
    title,
    description,
    canonical,
    image,
  };
}
