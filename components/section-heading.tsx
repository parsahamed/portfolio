import {cn} from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({eyebrow, title, description, align = "left"}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text-primary)] md:text-4xl">{title}</h2>
      <p className="text-base leading-7 text-[var(--color-text-secondary)] md:text-lg">{description}</p>
    </div>
  );
}

