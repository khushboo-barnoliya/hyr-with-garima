import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  label: string;
  value: string | number;
  unit?: string;
  delta?: string;
  deltaPositive?: boolean;
  icon?: LucideIcon;
  iconColor?: string;
  className?: string;
  "data-ocid"?: string;
}

export function StatsCard({
  label,
  value,
  unit,
  delta,
  deltaPositive,
  icon: Icon,
  iconColor = "text-primary",
  className,
  "data-ocid": ocid,
}: StatsCardProps) {
  return (
    <div
      data-ocid={ocid ?? "stats-card"}
      className={cn(
        "bg-card border border-border rounded-xl p-5 flex flex-col gap-3 shadow-subtle",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-body text-muted-foreground uppercase tracking-wide">
          {label}
        </span>
        {Icon && (
          <div className={cn("p-2 rounded-lg bg-muted", iconColor)}>
            <Icon size={18} aria-hidden="true" />
          </div>
        )}
      </div>

      <div className="flex items-end gap-1.5">
        <span className="text-3xl font-display font-bold text-foreground leading-none">
          {value}
        </span>
        {unit && (
          <span className="text-sm font-body text-muted-foreground mb-0.5">
            {unit}
          </span>
        )}
      </div>

      {delta !== undefined && (
        <div
          className={cn(
            "flex items-center gap-1 text-xs font-medium",
            deltaPositive ? "text-primary" : "text-destructive",
          )}
        >
          <span aria-hidden="true">{deltaPositive ? "▲" : "▼"}</span>
          <span>{delta}</span>
        </div>
      )}
    </div>
  );
}
