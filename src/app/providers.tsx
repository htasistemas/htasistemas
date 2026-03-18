import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "@/app/router";
import { Toaster } from "@/components/ui/sonner";

export function AppProviders() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  );
}
