import { cn } from "@/lib/utils"

export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-card/60 backdrop-blur-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
