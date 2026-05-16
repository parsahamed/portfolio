import {ArrowRight, Sparkles} from "lucide-react";

import {AnimatedReveal} from "@/components/animated-reveal";
import {BackgroundGrid} from "@/components/background-grid";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type HeroSectionProps = {
  content: PortfolioContent["hero"];
};

export function HeroSection({content}: HeroSectionProps) {
  return (
    <section className="section-padding">
      <div className="shell">
        <div className="surface-card relative overflow-hidden rounded-[2rem] px-6 py-10 md:px-10 md:py-14">
          <BackgroundGrid />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <AnimatedReveal className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
                <Sparkles className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {content.eyebrow}
              </div>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl md:leading-[1.05]">
                  {content.headline}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-text-secondary)] md:text-xl">
                  {content.subheadline}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href="#projects">
                    {content.ctaPrimary}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#contact">{content.ctaSecondary}</a>
                </Button>
              </div>
            </AnimatedReveal>
            <AnimatedReveal delay={0.08}>
              <Card className="rounded-[1.75rem] border-white/10 bg-[rgba(9,13,22,0.65)]">
                <CardContent className="grid gap-4 p-5 md:p-6">
                  {content.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                      <div className="text-3xl font-semibold tracking-tight">{stat.value}</div>
                      <div className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{stat.label}</div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

