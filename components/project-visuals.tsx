import {publicAssetExists} from "@/lib/project-visuals";
import type {ProjectVisual} from "@/types/content";

import {ProjectThumbnailClient, VisualEvidenceGridClient} from "@/components/project-visuals-client";

function getExistingVisuals(visuals?: ProjectVisual[]) {
  if (!visuals || visuals.length === 0) {
    return [];
  }

  return visuals.filter((visual) => publicAssetExists(visual.src));
}

type ProjectThumbnailProps = {
  projectName: string;
  visuals?: ProjectVisual[];
};

export function ProjectThumbnail({projectName, visuals}: ProjectThumbnailProps) {
  const existingVisuals = getExistingVisuals(visuals);

  if (existingVisuals.length === 0) {
    return null;
  }

  return <ProjectThumbnailClient projectName={projectName} visual={existingVisuals[0]} />;
}

type VisualEvidenceGridProps = {
  projectName: string;
  visuals?: ProjectVisual[];
};

export function VisualEvidenceGrid({projectName, visuals}: VisualEvidenceGridProps) {
  const existingVisuals = getExistingVisuals(visuals);

  if (existingVisuals.length === 0) {
    return null;
  }

  return <VisualEvidenceGridClient projectName={projectName} visuals={existingVisuals} />;
}

