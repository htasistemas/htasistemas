import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-blue">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
