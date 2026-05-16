import {FooterSection} from "@/sections/footer";
import {AboutSection} from "@/sections/about";
import {ContactSection} from "@/sections/contact";
import {ExperienceSection} from "@/sections/experience";
import {HeroSection} from "@/sections/hero";
import {PhilosophySection} from "@/sections/philosophy";
import {ProjectsSection} from "@/sections/projects";
import {SkillsSection} from "@/sections/skills";
import {Navbar} from "@/components/navbar";
import {getPortfolioContent} from "@/data/portfolio";
import {type Locale, isValidLocale} from "@/lib/i18n";
import {notFound} from "next/navigation";

export default async function LocalizedHomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = getPortfolioContent(locale as Locale);

  return (
    <main className="relative overflow-hidden pb-6">
      <Navbar
        brand={content.brand}
        nav={content.nav}
        locale={content.locale}
        languageLabel={content.languageLabel}
        contactLabel={content.contact.eyebrow}
      />
      <HeroSection content={content.hero} />
      <AboutSection content={content.about} />
      <ExperienceSection content={content.experience} />
      <ProjectsSection content={content.projects} />
      <SkillsSection content={content.skills} />
      <PhilosophySection content={content.philosophy} />
      <ContactSection content={content.contact} />
      <FooterSection brand={content.brand} content={content.footer} />
    </main>
  );
}
