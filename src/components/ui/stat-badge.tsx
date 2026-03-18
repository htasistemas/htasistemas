import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatBadgeProps {
  label: string;
  value: string;
  className?: string;
}

export function StatBadge({ label, value, className }: StatBadgeProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/10 px-4 py-4 backdrop-blur",
        className,
      )}
    >
      <Badge className="border-white/15 bg-white/10 text-white/75">{label}</Badge>
      <div className="mt-3 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
