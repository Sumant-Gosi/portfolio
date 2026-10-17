import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export const PROFILE_PHOTO_PATH = "/images/profile.jpg";

export type ImageSize = { width: number; height: number };

// Reads width and height from a JPEG's frame header, so the photo is shown uncropped.
function jpegSize(file: string): ImageSize | null {
  const buf = readFileSync(file);
  let i = 2;
  while (i + 9 < buf.length && buf[i] === 0xff) {
    const marker = buf[i + 1];
    const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker);
    if (isFrame) return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

// Checked at build time: drop a photo into public/images and rebuild to show it.
export function profilePhotoSize(): ImageSize | null {
  const file = path.join(process.cwd(), "public", PROFILE_PHOTO_PATH);
  return existsSync(file) ? jpegSize(file) : null;
}
