import {ArrowUpRight} from "lucide-react";

import {AnimatedReveal} from "@/components/animated-reveal";
import {SectionHeading} from "@/components/section-heading";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type ProjectsSectionProps = {
  content: PortfolioContent["projects"];
};

export function ProjectsSection({content}: ProjectsSectionProps) {
  return (
    <section id="projects" className="anchor-offset section-padding">
      <div className="shell space-y-12">
        <AnimatedReveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </AnimatedReveal>
        <div className="grid gap-5 xl:grid-cols-2">
          {content.items.map((project, index) => (
            <AnimatedReveal key={project.title} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl">{project.title}</CardTitle>
                    <ArrowUpRight className="mt-1 h-5 w-5 text-[var(--color-text-secondary)]" />
                  </div>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Architecture Highlights
                    </div>
                    <ul className="grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {project.architecture.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <Badge key={technology}>{technology}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                      Key Achievements
                    </div>
                    <ul className="grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

