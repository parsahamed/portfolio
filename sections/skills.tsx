import {AnimatedReveal} from "@/components/animated-reveal";
import {SectionHeading} from "@/components/section-heading";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import type {PortfolioContent} from "@/types/content";

type SkillsSectionProps = {
  content: PortfolioContent["skills"];
};

export function SkillsSection({content}: SkillsSectionProps) {
  return (
    <section id="skills" className="anchor-offset section-padding">
      <div className="shell space-y-12">
        <AnimatedReveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} />
        </AnimatedReveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {content.categories.map((category, index) => (
            <AnimatedReveal key={category.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </CardContent>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

