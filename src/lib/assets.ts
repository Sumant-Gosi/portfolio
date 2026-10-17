import { existsSync } from "node:fs";
import path from "node:path";

export const PROFILE_PHOTO_PATH = "/images/profile.jpg";

// Checked at build time: drop a photo into public/images and rebuild to show it.
export function hasProfilePhoto(): boolean {
  return existsSync(path.join(process.cwd(), "public", PROFILE_PHOTO_PATH));
}
