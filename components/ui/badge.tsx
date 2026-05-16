import * as React from "react";

import {cn} from "@/lib/utils";

export function Badge({className, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--color-text-secondary)]",
        className
      )}
      {...props}
    />
  );
}

