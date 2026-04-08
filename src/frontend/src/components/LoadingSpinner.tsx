import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}

const sizeMap = {
  sm: "w-5 h-5 border-2",
  md: "w-8 h-8 border-2",
  lg: "w-12 h-12 border-[3px]",
};

export function LoadingSpinner({
  size = "md",
  className,
  label = "Loading...",
}: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className,
      )}
      aria-label={label}
    >
      <div
        role="presentation"
        className={cn(
          "rounded-full border-border border-t-primary animate-spin",
          sizeMap[size],
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

interface PageLoadingProps {
  label?: string;
}

export function PageLoading({ label = "Loading..." }: PageLoadingProps) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="lg" />
        <p className="text-muted-foreground font-body text-sm animate-pulse">
          {label}
        </p>
      </div>
    </div>
  );
}
