import type { ProductSummary } from "@/types/product";

export const products: ProductSummary[] = [
  {
    id: "g3n",
    name: "G3N",
    slug: "g3n",
    subdomain: "g3n.htasistemas.com.br",
    shortDescription: "Sistema de gestão do terceiro setor",
    fullDescription:
      "Plataforma desenvolvida para centralizar a operação institucional, organizar processos, acompanhar atendimentos e melhorar a tomada de decisão com indicadores e relatórios.",
    category: "Gestão institucional",
    segment: "Terceiro setor",
    status: "Pronto para comercialização",
    isFeatured: true,
    tagline: "Organize. Controle. Evolua.",
    ctaPrimaryLabel: "Solicitar demonstração",
    ctaPrimaryHref: "#contato",
    ctaSecondaryLabel: "Falar no WhatsApp",
    ctaSecondaryHref: "https://wa.me/5500000000000",
    fallbackPath: "/g3n",
    canonicalUrl: "https://g3n.htasistemas.com.br",
    heroTitle: "Gestão completa para instituições em um só sistema",
    heroSubtitle:
      "Organize processos, reduza erros e tenha controle total da sua operação com o G3N.",
    challenges: [
      "Informações espalhadas em planilhas e papéis",
      "Falta de controle sobre atendimentos e processos",
      "Retrabalho constante",
      "Dificuldade para tomar decisões",
    ],
    features: [
      {
        title: "Cadastro completo de usuários",
        description:
          "Centralize perfis, histórico e informações estratégicas em uma base única e confiável.",
      },
      {
        title: "Controle de atendimentos",
        description:
          "Acompanhe rotinas, status, responsáveis e andamento de cada atendimento sem depender de planilhas.",
      },
      {
        title: "Gestão de processos internos",
        description:
          "Padronize fluxos, etapas e responsabilidades para reduzir ruído e aumentar a previsibilidade.",
      },
      {
        title: "Relatórios inteligentes",
        description:
          "Transforme dados operacionais em visão gerencial com filtros, acompanhamento e análise mais clara.",
      },
      {
        title: "Painel com indicadores em tempo real",
        description:
          "Tenha leitura rápida da operação e das prioridades com indicadores atualizados continuamente.",
      },
    ],
    benefits: [
      {
        title: "Mais organização",
        description: "Tudo passa a existir em um fluxo centralizado, rastreável e simples de acompanhar.",
      },
      {
        title: "Redução de erros",
        description: "Menos retrabalho, menos duplicidade e mais consistência de informação.",
      },
      {
        title: "Economia de tempo",
        description: "Sua equipe ganha velocidade com processos mais claros e menos tarefas manuais.",
      },
      {
        title: "Aumento de produtividade",
        description: "A operação fica mais fluida e a gestão ganha mais poder de execução.",
      },
      {
        title: "Melhor tomada de decisão",
        description: "Os dados certos passam a sustentar priorização, planejamento e crescimento.",
      },
    ],
    steps: [
      {
        title: "Implantamos o sistema para você",
        description: "A HTA conduz a entrada do produto para reduzir curva de adaptação e acelerar resultado.",
      },
      {
        title: "Configuramos conforme sua necessidade",
        description: "Ajustamos fluxos, estrutura e parâmetros para aderir à sua operação institucional.",
      },
      {
        title: "Sua equipe começa a usar imediatamente",
        description: "Com apoio inicial e operação organizada, o time entra em produção com rapidez.",
      },
    ],
    stats: [
      { label: "Segmento", value: "Terceiro setor" },
      { label: "Modelo", value: "SaaS + implantação" },
      { label: "Subdomínio", value: "g3n.htasistemas.com.br" },
    ],
    pricingIds: ["g3n-essential", "g3n-professional", "g3n-premium"],
    testimonialIds: ["g3n-carlos", "g3n-fernanda"],
  },
  {
    id: "finance-pro-master",
    name: "Finance Pro Master",
    slug: "finance-pro-master",
    subdomain: "financepro.htasistemas.com.br",
    shortDescription: "Plataforma para gestão financeira e visão executiva",
    fullDescription:
      "Solução planejada para consolidar fluxo financeiro, indicadores, aprovações e inteligência operacional em uma jornada única.",
    category: "Gestão financeira",
    segment: "Financeiro e controladoria",
    status: "Em breve",
    isFeatured: false,
    tagline: "Controle financeiro com visão de crescimento.",
    ctaPrimaryLabel: "Quero saber mais",
    ctaPrimaryHref: "/contato",
    ctaSecondaryLabel: "Falar no WhatsApp",
    ctaSecondaryHref: "https://wa.me/5500000000000",
    fallbackPath: "/contato",
    canonicalUrl: "https://financepro.htasistemas.com.br",
    heroTitle: "Gestão financeira com dados, automação e previsibilidade",
    heroSubtitle:
      "Estruture a operação financeira com mais clareza, velocidade de análise e base confiável para tomada de decisão.",
    challenges: [],
    features: [],
    benefits: [],
    steps: [],
    stats: [
      { label: "Categoria", value: "Financeiro" },
      { label: "Modelo", value: "Produto HTA" },
      { label: "Subdomínio", value: "financepro.htasistemas.com.br" },
    ],
    pricingIds: [],
    testimonialIds: [],
  },
  {
    id: "gestor-politico",
    name: "Gestor Político",
    slug: "gestor-politico",
    subdomain: "gestorpolitico.htasistemas.com.br",
    shortDescription: "Sistema para operação política, gabinete e relacionamento",
    fullDescription:
      "Produto desenhado para estruturar demandas, base de relacionamento, organização de gabinete e indicadores de atuação.",
    category: "Gestão pública e política",
    segment: "Mandatos e equipes institucionais",
    status: "Em breve",
    isFeatured: false,
    tagline: "Mais controle político, institucional e operacional.",
    ctaPrimaryLabel: "Quero saber mais",
    ctaPrimaryHref: "/contato",
    ctaSecondaryLabel: "Falar no WhatsApp",
    ctaSecondaryHref: "https://wa.me/5500000000000",
    fallbackPath: "/contato",
    canonicalUrl: "https://gestorpolitico.htasistemas.com.br",
    heroTitle: "Organize a operação política com mais controle e inteligência",
    heroSubtitle:
      "Centralize demandas, relacionamentos e rotinas do gabinete em uma estrutura clara e acompanhável.",
    challenges: [],
    features: [],
    benefits: [],
    steps: [],
    stats: [
      { label: "Categoria", value: "Gestão pública" },
      { label: "Modelo", value: "Produto HTA" },
      { label: "Subdomínio", value: "gestorpolitico.htasistemas.com.br" },
    ],
    pricingIds: [],
    testimonialIds: [],
  },
  {
    id: "portal-atendimento",
    name: "Portal de Atendimento",
    slug: "portal-atendimento",
    subdomain: "atendimento.htasistemas.com.br",
    shortDescription: "Plataforma para atendimento, filas, histórico e comunicação",
    fullDescription:
      "Estrutura pensada para digitalizar relacionamento, solicitações, acompanhamento e experiência de atendimento em diferentes canais.",
    category: "Atendimento e relacionamento",
    segment: "Operações com alta demanda de atendimento",
    status: "Em breve",
    isFeatured: false,
    tagline: "Atendimento centralizado, rastreável e inteligente.",
    ctaPrimaryLabel: "Quero saber mais",
    ctaPrimaryHref: "/contato",
    ctaSecondaryLabel: "Falar no WhatsApp",
    ctaSecondaryHref: "https://wa.me/5500000000000",
    fallbackPath: "/contato",
    canonicalUrl: "https://atendimento.htasistemas.com.br",
    heroTitle: "Atendimento organizado com visibilidade de ponta a ponta",
    heroSubtitle:
      "Centralize solicitações, acompanhe filas e melhore a experiência dos usuários com uma operação digital confiável.",
    challenges: [],
    features: [],
    benefits: [],
    steps: [],
    stats: [
      { label: "Categoria", value: "Atendimento" },
      { label: "Modelo", value: "Produto HTA" },
      { label: "Subdomínio", value: "atendimento.htasistemas.com.br" },
    ],
    pricingIds: [],
    testimonialIds: [],
  },
];
