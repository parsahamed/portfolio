import {Mail, Github, Linkedin, PenSquare} from "lucide-react";

import {AnimatedReveal} from "@/components/animated-reveal";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Medium: PenSquare,
  Email: Mail
};

type ContactSectionProps = {
  content: PortfolioContent["contact"];
};

export function ContactSection({content}: ContactSectionProps) {
  return (
    <section id="contact" className="anchor-offset section-padding">
      <div className="shell">
        <AnimatedReveal>
          <Card className="overflow-hidden rounded-[2rem]">
            <CardContent className="grid gap-10 p-6 md:p-10 xl:grid-cols-[1fr_0.95fr] xl:items-center">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">{content.eyebrow}</p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{content.title}</h2>
                <p className="max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">{content.description}</p>
                <div className="rounded-2xl border border-[rgba(59,130,246,0.24)] bg-[rgba(59,130,246,0.10)] p-5 text-sm leading-7 text-[var(--color-text-primary)]">
                  {content.cta}
                </div>
                <Button asChild size="lg">
                  <a href={content.links.find((item) => item.label === "Email")?.href ?? "#"}>Start a Conversation</a>
                </Button>
              </div>
              <div className="grid gap-4">
                {content.links.map((link) => {
                  const Icon = iconMap[link.label as keyof typeof iconMap] ?? Mail;

                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="block">
                      <Card className="h-full border-white/10 hover:border-white/18 hover:bg-white/[0.04]">
                        <CardHeader className="flex-row items-center justify-between space-y-0">
                          <div className="space-y-2">
                            <CardTitle className="text-lg">{link.label}</CardTitle>
                            <CardDescription>{link.value}</CardDescription>
                          </div>
                          <Icon className="h-5 w-5 text-[var(--color-text-secondary)]" />
                        </CardHeader>
                      </Card>
                    </a>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </AnimatedReveal>
      </div>
    </section>
  );
}

