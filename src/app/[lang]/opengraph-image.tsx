import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, locales } from "@/content";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, Embedded Software Engineer, Automotive`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Cached so the file read happens once at build time and the image stays static.
async function carDataUrl() {
  "use cache";
  const car = await readFile(path.join(process.cwd(), "public/images/ecu-network.jpg"));
  return `data:image/jpeg;base64,${car.toString("base64")}`;
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const hero = getDictionary(hasLocale(lang) ? lang : "en").hero;
  const carSrc = await carDataUrl();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 40,
          padding: "0 48px 0 64px",
          background: "#101923",
          color: "#f0f4f8",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 330 }}>
          <div style={{ fontSize: 18, color: "#55c4d8", letterSpacing: 2, lineHeight: 1.4 }}>
            {hero.availability.toUpperCase()}
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, marginTop: 18, lineHeight: 1.05 }}>
            {hero.name}
          </div>
          <div style={{ fontSize: 24, color: "#9daebf", marginTop: 18, lineHeight: 1.3 }}>
            {hero.title}
          </div>
        </div>
        <img
          src={carSrc}
          alt=""
          width={714}
          height={476}
          style={{ borderRadius: 16, border: "2px solid #253a4b" }}
        />
      </div>
    ),
    size,
  );
}
