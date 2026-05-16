import Image from "next/image";
import {
  BarChart3,
  Blocks,
  FileStack,
  MessageSquareText,
  MonitorSmartphone,
  Network,
  PanelsTopLeft,
  Smartphone,
  Sparkles,
  Workflow
} from "lucide-react";

import {publicAssetExists} from "@/lib/project-visuals";
import {cn} from "@/lib/utils";
import type {ProjectVisual, ProjectVisualKind} from "@/types/content";

const iconMap: Record<ProjectVisualKind, typeof PanelsTopLeft> = {
  dashboard: PanelsTopLeft,
  architecture: Network,
  workflow: Workflow,
  mobile: Smartphone,
  forms: FileStack,
  realtime: BarChart3,
  chat: MessageSquareText,
  impact: Sparkles,
  legacy: Blocks,
  pwa: MonitorSmartphone,
  android: Smartphone,
  responsive: MonitorSmartphone
};

type VisualCardProps = {
  projectName: string;
  visual: ProjectVisual;
  sizes: string;
  className?: string;
  priority?: boolean;
};

export function VisualCard({projectName, visual, sizes, className, priority = false}: VisualCardProps) {
  const Icon = iconMap[visual.kind] ?? PanelsTopLeft;
  const hasImage = publicAssetExists(visual.src);
  console.log(`Checking visual for project "${projectName}":`, visual, "Image exists:", hasImage);

  return (
    <div
      className={cn(
        "surface-card relative overflow-hidden rounded-3xl border border-white/8 bg-[rgba(255,255,255,0.02)]",
        className
      )}
    >
      {hasImage ? (
        <>
          <div className="relative aspect-[16/10]">
            <Image src={visual.src} alt={`${projectName} - ${visual.label}`} fill sizes={sizes} className="object-cover" priority={priority} />
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(11,15,25,0.9)] via-[rgba(11,15,25,0.38)] to-transparent p-4">
            <div className="text-sm font-medium text-[var(--color-text-primary)]">{visual.label}</div>
          </div>
        </>
      ) : (
        <div className="relative flex aspect-[16/10] flex-col justify-between bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_46%)] p-5">
          <div className="flex items-center justify-between">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
              <Icon className="h-5 w-5 text-[var(--color-accent)]" />
            </div>
            <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]/70" />
          </div>
          <div className="space-y-2">
            <div className="text-base font-semibold text-[var(--color-text-primary)]">{projectName}</div>
            <div className="text-sm leading-6 text-[var(--color-text-secondary)]">{visual.label}</div>
          </div>
        </div>
      )}
    </div>
  );
}

type ProjectThumbnailProps = {
  projectName: string;
  visuals?: ProjectVisual[];
};

export function ProjectThumbnail({projectName, visuals}: ProjectThumbnailProps) {
  const visual = visuals?.[0] ?? {
    kind: "dashboard" as const,
    label: "Project visual",
    src: "/projects/placeholder/dashboard.png"
  };

  return <VisualCard projectName={projectName} visual={visual} sizes="(min-width: 1280px) 40vw, 100vw" className="mb-6" />;
}

type VisualEvidenceGridProps = {
  projectName: string;
  visuals?: ProjectVisual[];
};

export function VisualEvidenceGrid({projectName, visuals}: VisualEvidenceGridProps) {
  console.log("Visuals for project:", projectName, visuals);

  if (!visuals || visuals.length === 0) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {visuals.map((visual, index) => (
        <VisualCard
          key={`${projectName}-${visual.label}`}
          projectName={projectName}
          visual={visual}
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 100vw"
          priority={index === 0}
        />
      ))}
    </div>
  );
}
