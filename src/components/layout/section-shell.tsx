import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionShellProps {
  id?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export function SectionShell({
  id,
  className,
  contentClassName,
  children,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("px-6 py-20 lg:px-8", className)}>
      <div className={cn("mx-auto max-w-7xl", contentClassName)}>{children}</div>
    </section>
  );
}
