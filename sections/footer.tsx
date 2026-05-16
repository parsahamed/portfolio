import type {PortfolioContent} from "@/types/content";

type FooterSectionProps = {
  content: PortfolioContent["footer"];
  brand: string;
};

export function FooterSection({content, brand}: FooterSectionProps) {
  return (
    <footer className="border-t border-white/6 py-8">
      <div className="shell flex flex-col gap-3 text-sm text-[var(--color-text-secondary)] md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-semibold text-[var(--color-text-primary)]">{brand}</div>
          <div>{content.statement}</div>
        </div>
        <div>{content.copyright}</div>
      </div>
    </footer>
  );
}

