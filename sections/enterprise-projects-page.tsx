import Link from "next/link";
import {ArrowLeft, ArrowRight, BriefcaseBusiness} from "lucide-react";

import {AnimatedReveal} from "@/components/animated-reveal";
import {VisualEvidenceGrid} from "@/components/project-visuals";
import {SectionHeading} from "@/components/section-heading";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {publicAssetExists} from "@/lib/project-visuals";
import type {PortfolioContent} from "@/types/content";

type EnterpriseProjectsPageProps = {
  locale: PortfolioContent["locale"];
  content: PortfolioContent["enterpriseProjects"];
};

export function EnterpriseProjectsPage({locale, content}: EnterpriseProjectsPageProps) {
  const isPersian = locale === "fa";
  const BackIcon = isPersian ? ArrowRight : ArrowLeft;

  return (
    <section className="section-padding">
      <div className="shell space-y-10">
        <AnimatedReveal>
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--color-text-secondary)]">
                <BriefcaseBusiness className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {content.eyebrow}
              </div>
              <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
              <div className="rounded-2xl border border-[rgba(59,130,246,0.24)] bg-[rgba(59,130,246,0.10)] p-5 text-sm leading-7 text-[var(--color-text-primary)] md:text-base">
                {content.recruiterIntro}
              </div>
              <Button asChild variant="outline">
                <Link href={`/${locale}`}>
                  <BackIcon className="h-4 w-4" />
                  {content.backToHome}
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedReveal>
        <div className="grid gap-5">
          {content.items.map((project, index) => {
            const hasVisualEvidence = project.visuals?.some((visual) => publicAssetExists(visual.src)) ?? false;

            return (
              <AnimatedReveal key={project.title} delay={index * 0.04}>
                <Card className="overflow-hidden">
                  <CardHeader className="space-y-3 border-b border-white/8 pb-5">
                    <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.problem}</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-6 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
                    <div className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.problem}
                      </div>
                      <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{project.problem}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.role}
                      </div>
                      <p className="text-sm leading-7 text-[var(--color-text-secondary)]">{project.role}</p>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.technologies}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <Badge key={technology}>{technology}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.architecture}
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
                        {content.labels.keyFeatures}
                      </div>
                      <ul className="grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {project.keyFeatures.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.businessImpact}
                      </div>
                      <ul className="grid gap-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                        {project.businessImpact.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.visualHighlights ? (
                      <div className="space-y-3">
                        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          {content.labels.visualHighlights}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {project.visualHighlights.map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] p-4 text-sm leading-6 text-[var(--color-text-primary)]"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {project.measuredOutcomes ? (
                      <div className="space-y-3">
                        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          {content.labels.measuredOutcomes}
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {project.measuredOutcomes.map((item) => (
                            <div
                              key={item}
                              className="rounded-2xl border border-[rgba(59,130,246,0.18)] bg-[rgba(59,130,246,0.08)] p-4 text-sm leading-6 text-[var(--color-text-primary)]"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    {hasVisualEvidence ? (
                      <div className="space-y-4 md:col-span-2 xl:col-span-3">
                        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                          {content.labels.visualEvidence}
                        </div>
                        <VisualEvidenceGrid projectName={project.title} visuals={project.visuals} />
                      </div>
                    ) : null}
                    <div className="space-y-3 md:col-span-2 xl:col-span-3">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                        {content.labels.scale}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.scale.map((item) => (
                          <Badge key={item}>{item}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
