import { cn } from "@/lib/utils";

interface MacroProgressBarProps {
  label: string;
  value: number;
  target: number;
  unit?: string;
  colorClass?: string;
  className?: string;
}

export function MacroProgressBar({
  label,
  value,
  target,
  unit = "g",
  colorClass = "bg-primary",
  className,
}: MacroProgressBarProps) {
  const percent = Math.min(100, target > 0 ? (value / target) * 100 : 0);
  const isOver = value > target;

  return (
    <div
      className={cn("space-y-1.5", className)}
      data-ocid={`macro-bar-${label.toLowerCase()}`}
    >
      <div className="flex justify-between items-center text-sm">
        <span className="font-body font-medium text-foreground">{label}</span>
        <span
          className={cn(
            "font-mono text-xs",
            isOver ? "text-destructive" : "text-muted-foreground",
          )}
        >
          <span
            className={
              isOver
                ? "text-destructive font-bold"
                : "text-foreground font-semibold"
            }
          >
            {value}
          </span>
          <span className="text-muted-foreground">
            /{target}
            {unit}
          </span>
        </span>
      </div>

      <div
        className="h-2 bg-muted rounded-full overflow-hidden"
        aria-label={`${label}: ${value} of ${target}${unit}`}
      >
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            colorClass,
            isOver && "bg-destructive",
          )}
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{Math.round(percent)}%</span>
        {isOver && (
          <span className="text-destructive text-xs">
            +{value - target}
            {unit} over
          </span>
        )}
      </div>
    </div>
  );
}
