"use client";

import Image from "next/image";
import {X} from "lucide-react";
import {useEffect, useId, useState} from "react";

import {cn} from "@/lib/utils";
import type {ProjectVisual} from "@/types/content";

function getVisualFrameClasses(orientation?: ProjectVisual["orientation"], compact = false) {
  switch (orientation) {
    case "mobile":
      return {
        wrapper: compact
          ? "mx-auto w-full max-w-[16rem]"
          : "mx-auto w-full max-w-[18rem] md:max-w-[19rem]",
        frame: "relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(255,255,255,0.02)]",
        image: "object-contain p-3"
      };
    case "diagram":
      return {
        wrapper: "w-full",
        frame:
          "relative flex min-h-[18rem] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.02)] max-h-[720px]",
        image: "object-contain p-4"
      };
    case "document":
      return {
        wrapper: compact ? "mx-auto w-full max-w-[22rem]" : "mx-auto w-full max-w-[28rem]",
        frame:
          "relative flex min-h-[20rem] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.02)] max-h-[720px]",
        image: "object-contain p-4"
      };
    case "desktop":
    default:
      return {
        wrapper: "w-full",
        frame: "relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[rgba(255,255,255,0.02)]",
        image: "object-contain p-3"
      };
  }
}

type LightboxProps = {
  open: boolean;
  onClose: () => void;
  projectName: string;
  visual: ProjectVisual | null;
};

function Lightbox({open, onClose, projectName, visual}: LightboxProps) {
  useEffect(() => {
    if (!open) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  if (!open || !visual) {
    return null;
  }

  const frame = getVisualFrameClasses(visual.orientation);
  const altText = visual.caption ? `${projectName} - ${visual.caption}` : projectName;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(3,7,18,0.92)] p-4"
      role="dialog"
      aria-modal="true"
      aria-label={altText}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close fullscreen image"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-[var(--color-text-primary)] hover:bg-white/[0.12]"
      >
        <X className="h-5 w-5" />
      </button>
      <div className={cn("w-full max-w-6xl", frame.wrapper)} onClick={(event) => event.stopPropagation()}>
        <div className={cn(frame.frame, "mx-auto")}>
          <Image src={visual.src} alt={altText} fill sizes="100vw" className={frame.image} priority />
        </div>
        {visual.caption ? (
          <div className="mt-4 text-center text-sm leading-6 text-[var(--color-text-secondary)]">{visual.caption}</div>
        ) : null}
      </div>
    </div>
  );
}

type BaseVisualCardProps = {
  projectName: string;
  visual: ProjectVisual;
  sizes: string;
  className?: string;
  compact?: boolean;
  onOpen: () => void;
};

function BaseVisualCard({projectName, visual, sizes, className, compact = false, onOpen}: BaseVisualCardProps) {
  const frame = getVisualFrameClasses(visual.orientation, compact);
  const captionId = useId();
  const altText = visual.caption ? `${projectName} - ${visual.caption}` : projectName;

  return (
    <div className={cn(frame.wrapper, className)}>
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open image${visual.caption ? `: ${visual.caption}` : ` for ${projectName}`}`}
        aria-describedby={visual.caption ? captionId : undefined}
        className="block w-full text-left"
      >
        <div className={cn("surface-card transition-transform hover:-translate-y-0.5", frame.frame)}>
          <Image src={visual.src} alt={altText} fill sizes={sizes} className={frame.image} />
        </div>
      </button>
      {visual.caption ? (
        <div id={captionId} className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
          {visual.caption}
        </div>
      ) : null}
    </div>
  );
}

type ProjectThumbnailClientProps = {
  projectName: string;
  visual: ProjectVisual;
};

export function ProjectThumbnailClient({projectName, visual}: ProjectThumbnailClientProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BaseVisualCard
        projectName={projectName}
        visual={visual}
        sizes="(min-width: 1280px) 40vw, 100vw"
        className="mb-6"
        compact
        onOpen={() => setOpen(true)}
      />
      <Lightbox open={open} onClose={() => setOpen(false)} projectName={projectName} visual={visual} />
    </>
  );
}

type VisualEvidenceGridClientProps = {
  projectName: string;
  visuals: ProjectVisual[];
};

export function VisualEvidenceGridClient({projectName, visuals}: VisualEvidenceGridClientProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visuals.map((visual, index) => (
          <BaseVisualCard
            key={`${projectName}-${visual.src}`}
            projectName={projectName}
            visual={visual}
            sizes="(min-width: 1280px) 28vw, (min-width: 768px) 44vw, 100vw"
            onOpen={() => setActiveIndex(index)}
          />
        ))}
      </div>
      <Lightbox
        open={activeIndex !== null}
        onClose={() => setActiveIndex(null)}
        projectName={projectName}
        visual={activeIndex !== null ? visuals[activeIndex] : null}
      />
    </>
  );
}
