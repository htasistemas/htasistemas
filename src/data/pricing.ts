import type { PricingPlan } from "@/types/pricing";

export const pricingPlans: PricingPlan[] = [
  {
    id: "g3n-essential",
    productId: "g3n",
    name: "Essencial",
    price: "R$ 297/mês",
    description: "Ideal para começar com organização básica.",
    bullets: [
      "Cadastro operacional centralizado",
      "Controle inicial de atendimentos",
      "Implantação orientada pela HTA",
    ],
  },
  {
    id: "g3n-professional",
    productId: "g3n",
    name: "Profissional",
    price: "R$ 697/mês",
    description: "A solução completa para controle total.",
    featured: true,
    bullets: [
      "Processos internos organizados",
      "Relatórios e indicadores em tempo real",
      "Configuração avançada para a operação",
    ],
  },
  {
    id: "g3n-premium",
    productId: "g3n",
    name: "Premium",
    price: "Sob consulta",
    description: "Para instituições que precisam de personalização.",
    bullets: [
      "Ajustes sob medida",
      "Fluxos adaptados à operação",
      "Acompanhamento consultivo",
    ],
  },
];
