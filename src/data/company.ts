import type { CompanyData } from "@/types/company";

export const company: CompanyData = {
  name: "HTA Sistemas",
  legalName: "HTA Sistemas",
  slogan: "Organize. Controle. Evolua.",
  heroTitle: "A HTA Sistemas transforma operações em ecossistemas digitais escaláveis",
  heroSubtitle:
    "Desenvolvemos softwares, plataformas e produtos digitais para gestão, finanças, atendimento, automação e inteligência operacional, com arquitetura pronta para múltiplos sistemas e subdomínios.",
  aboutTitle: "Software house com visão de produto, arquitetura escalável e portfólio em evolução contínua",
  aboutParagraphs: [
    "A HTA Sistemas é uma fábrica de software especializada em sistemas de gestão, automação de processos, controle operacional e soluções sob medida para operações que precisam crescer com previsibilidade.",
    "Unimos estratégia, experiência de produto e engenharia para entregar plataformas confiáveis, com experiência clara, dados centralizados e base preparada para expansão contínua.",
  ],
  highlights: [
    {
      title: "Soluções sob medida",
      description:
        "Projetos digitais desenhados para a rotina real da operação, com clareza de processo, negócio e jornada comercial.",
    },
    {
      title: "Arquitetura escalável",
      description:
        "Estruturas pensadas para múltiplos sistemas, subdomínios, integrações e evolução sustentável de portfólio.",
    },
    {
      title: "Entrega orientada a resultado",
      description:
        "Menos improviso, mais controle operacional, melhor experiência e mais valor percebido pelo cliente final.",
    },
  ],
  services: [
    {
      id: "custom-software",
      title: "Desenvolvimento de sistemas sob medida",
      description:
        "Plataformas web criadas para processos específicos, jornadas complexas e operação com alta exigência.",
      icon: "code",
    },
    {
      id: "automation",
      title: "Automação de processos",
      description:
        "Fluxos digitais para reduzir retrabalho, acelerar aprovações e aumentar previsibilidade operacional.",
      icon: "workflow",
    },
    {
      id: "management",
      title: "Sistemas de gestão",
      description:
        "Ambientes completos para cadastro, acompanhamento, controle, indicadores e visão consolidada da operação.",
      icon: "layout",
    },
    {
      id: "dashboards",
      title: "Dashboards e indicadores",
      description:
        "Painéis executivos e operacionais para acompanhar desempenho, produtividade e gargalos em tempo real.",
      icon: "chart",
    },
    {
      id: "integrations",
      title: "Integrações",
      description:
        "Conexão entre ferramentas, APIs, CRM, ERP, plataformas de atendimento e ecossistemas já existentes.",
      icon: "plug",
    },
    {
      id: "continuous-evolution",
      title: "Evolução contínua",
      description:
        "Melhoria permanente do produto com roadmap, manutenção orientada a prioridade e ganho real de operação.",
      icon: "refresh",
    },
  ],
  contactPoints: [
    {
      label: "E-mail comercial",
      value: "comercial@htasistemas.com.br",
      href: "mailto:comercial@htasistemas.com.br",
    },
    {
      label: "WhatsApp",
      value: "(00) 00000-0000",
      href: "https://wa.me/5500000000000",
    },
    {
      label: "Domínio principal",
      value: "htasistemas.com.br",
      href: "https://htasistemas.com.br",
    },
  ],
  socialLinks: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp", href: "https://wa.me/5500000000000" },
  ],
  upcomingSystems: [
    {
      id: "finance-pro-master",
      name: "Finance Pro Master",
      category: "Financeiro",
      status: "Em breve",
      description:
        "Solução em preparação para gestão financeira com controle, indicadores e automações.",
    },
    {
      id: "gestor-politico",
      name: "Gestor Político",
      category: "Gestão pública",
      status: "Em breve",
      description:
        "Estrutura pensada para acompanhamento de demandas, gabinete, relacionamento e operação política.",
    },
    {
      id: "portal-atendimento",
      name: "Portal de Atendimento",
      category: "Atendimento",
      status: "Em breve",
      description:
        "Experiência digital para centralizar solicitações, filas, histórico e comunicação com usuários.",
    },
  ],
};
