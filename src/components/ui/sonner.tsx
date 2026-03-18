import { Toaster as Sonner } from "sonner";

export function Toaster() {
  return (
    <Sonner
      closeButton
      position="top-right"
      richColors
      toastOptions={{
        classNames: {
          toast: "rounded-3xl border border-slate-200 shadow-panel",
          title: "font-semibold",
          description: "text-sm text-slate-500",
        },
      }}
    />
  );
}
