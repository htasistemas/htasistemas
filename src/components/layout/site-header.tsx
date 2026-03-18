import { LayoutGrid, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue via-sky-400 to-brand-teal font-display text-sm font-bold text-white shadow-[0_16px_40px_-24px_rgba(14,165,233,0.75)]">
            HTA
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-[0.28em] text-slate-950">
              {siteConfig.companyName}
            </div>
            <div className="text-xs text-slate-500">{siteConfig.slogan}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.mainNavigation.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium text-slate-600 transition hover:text-slate-950",
                  isActive && "text-slate-950",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="secondary" asChild>
            <Link to="/sistemas">
              Explorar sistemas
              <LayoutGrid className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild>
            <Link to="/contato">Solicitar demonstração</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {siteConfig.mainNavigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="secondary" asChild className="mt-2">
              <Link to="/sistemas" onClick={() => setIsOpen(false)}>
                Explorar sistemas
              </Link>
            </Button>
            <Button asChild>
              <Link to="/contato" onClick={() => setIsOpen(false)}>
                Solicitar demonstração
              </Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
