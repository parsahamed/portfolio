import {AnimatedReveal} from "@/components/animated-reveal";
import {SectionHeading} from "@/components/section-heading";
import {Card, CardContent} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type PhilosophySectionProps = {
  content: PortfolioContent["philosophy"];
};

export function PhilosophySection({content}: PhilosophySectionProps) {
  return (
    <section id="philosophy" className="anchor-offset section-padding">
      <div className="shell space-y-12">
        <AnimatedReveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} align="center" />
        </AnimatedReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.statements.map((statement, index) => (
            <AnimatedReveal key={statement} delay={index * 0.05}>
              <Card className="h-full">
                <CardContent className="flex h-full items-center p-6 text-lg leading-8 text-[var(--color-text-primary)]">
                  {statement}
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

