import { createBrowserRouter, Outlet } from "react-router-dom";

import { ScrollToTop } from "@/app/scroll-to-top";
import { G3nPage } from "@/app/products/pages/g3n-page";
import { ContactPage } from "@/app/site/pages/contact-page";
import { HomePage } from "@/app/site/pages/home-page";
import { SolutionsPage } from "@/app/site/pages/solutions-page";
import { AboutPage } from "@/app/site/pages/about-page";
import { SystemsPage } from "@/app/site/pages/systems-page";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

function SiteFrame() {
  return (
    <div className="min-h-screen">
      <ScrollToTop />
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteFrame />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "sobre", element: <AboutPage /> },
      { path: "solucoes", element: <SolutionsPage /> },
      { path: "sistemas", element: <SystemsPage /> },
      { path: "contato", element: <ContactPage /> },
      { path: "g3n", element: <G3nPage /> },
    ],
  },
]);
