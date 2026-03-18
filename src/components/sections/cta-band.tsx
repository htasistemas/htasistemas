import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";

interface CtaBandProps {
  title?: string;
  description?: string;
}

export function CtaBand({
  title = "A HTA Sistemas conecta estratégia, produto e tecnologia para construir operações mais fortes",
  description = "Converse com a HTA, conheça o portfólio de soluções e entenda qual linha de produto faz sentido para a sua operação.",
}: CtaBandProps) {
  return (
    <div className="institutional-surface rounded-[34px] px-6 py-10 text-slate-950 shadow-panel lg:px-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-teal">
            CTA institucional
          </p>
          <h2 className="mt-4 font-display text-2xl font-bold md:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg md:leading-8">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button variant="success" size="lg" asChild>
            <Link to="/contato">
              Solicitar demonstração
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href={siteConfig.whatsappUrl}>
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
