import {AnimatedReveal} from "@/components/animated-reveal";
import {SectionHeading} from "@/components/section-heading";
import {Card, CardContent} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type ExperienceSectionProps = {
  content: PortfolioContent["experience"];
};

export function ExperienceSection({content}: ExperienceSectionProps) {
  return (
    <section id="experience" className="anchor-offset section-padding">
      <div className="shell space-y-12">
        <AnimatedReveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </AnimatedReveal>
        <div className="relative ms-3 border-s border-white/10 ps-8">
          {content.items.map((item, index) => (
            <AnimatedReveal key={item.company} delay={index * 0.05} className="relative pb-8 last:pb-0">
              <span className="absolute -start-[2.2rem] top-8 h-3.5 w-3.5 rounded-full border border-[rgba(59,130,246,0.45)] bg-[var(--color-bg)] shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />
              <Card>
                <CardContent className="space-y-5 p-6 md:p-7">
                  <div className="space-y-2">
                    <div className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-accent)]">{item.company}</div>
                    <h3 className="text-2xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="text-base leading-7 text-[var(--color-text-secondary)]">{item.summary}</p>
                  </div>
                  <ul className="grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                    {item.achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

