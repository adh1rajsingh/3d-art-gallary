import * as React from "react";
import { cn } from "@/lib/utils";

// Panel component for information display
export interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-white p-6 shadow-lg animate-in fade-in-50 zoom-in-95",
          className
        )}
        {...props}
      />
    );
  }
);

Panel.displayName = "Panel";
