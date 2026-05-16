import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="shell flex min-h-screen items-center justify-center py-16">
      <div className="surface-card max-w-xl rounded-[2rem] p-8 text-center md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Page not found</h1>
        <p className="mt-4 text-base leading-7 text-[var(--color-text-secondary)]">
          The route you requested does not exist in this portfolio.
        </p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/en">Back to homepage</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

