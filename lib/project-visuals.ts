import {existsSync} from "node:fs";
import path from "node:path";

export function publicAssetExists(src: string) {
  const normalizedSrc = src.startsWith("/") ? src.slice(1) : src;
  return existsSync(path.join(process.cwd(), "public", normalizedSrc));
}

