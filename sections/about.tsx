import {AnimatedReveal} from "@/components/animated-reveal";
import {SectionHeading} from "@/components/section-heading";
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type AboutSectionProps = {
  content: PortfolioContent["about"];
};

export function AboutSection({content}: AboutSectionProps) {
  return (
    <section id="about" className="anchor-offset section-padding">
      <div className="shell space-y-12">
        <AnimatedReveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </AnimatedReveal>
        <div className="grid gap-5 md:grid-cols-2">
          {content.pillars.map((pillar, index) => (
            <AnimatedReveal key={pillar.title} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{pillar.title}</CardTitle>
                  <CardDescription>{pillar.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-px w-full bg-white/8" />
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

