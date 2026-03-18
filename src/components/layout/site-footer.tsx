import { Link } from "react-router-dom";

import { siteConfig } from "@/lib/config";
import { company } from "@/data/company";

export function SiteFooter() {
  return (
    <footer className="footer-surface border-t border-white/10 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <div className="font-display text-2xl font-bold text-white">
            {siteConfig.companyName}
          </div>
          <p className="mt-3 max-w-md text-sm leading-7 text-slate-200/80">
            Empresa de tecnologia orientada a gestão, automação de processos e evolução digital com estrutura pronta para múltiplos produtos.
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            {siteConfig.slogan}
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Navegação rápida
          </div>
          <div className="mt-5 grid gap-3">
            {siteConfig.footerNavigation.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-sm text-slate-200/75 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
            Contato
          </div>
          <div className="mt-5 grid gap-3 text-sm text-slate-200/80">
            {company.contactPoints.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-white">
                <span className="font-medium text-slate-200">{item.label}:</span> {item.value}
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {company.socialLinks.map((item) => (
              <a key={item.label} href={item.href} className="text-slate-200/75 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-200/60 lg:px-8">
        © {new Date().getFullYear()} {siteConfig.companyName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
