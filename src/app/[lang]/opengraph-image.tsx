import { ImageResponse } from "next/og";
import { getDictionary, hasLocale, locales } from "@/content";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, Embedded Software Engineer, Automotive`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const trace = "M0 60 H80 V10 H160 V60 H200 V10 H240 V60 H320 V10 H440 V60 H480 V10 H520 V60 H600";

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const hero = getDictionary(hasLocale(lang) ? lang : "en").hero;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0e0c",
          backgroundImage:
            "linear-gradient(rgba(228,234,230,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(228,234,230,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          color: "#e4eae6",
        }}
      >
        <svg width="600" height="70" viewBox="0 0 600 70">
          <path d={trace} fill="none" stroke="#3ddc84" strokeWidth="4" />
        </svg>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, color: "#3ddc84", letterSpacing: 2 }}>
            {hero.availability.toUpperCase()}
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, marginTop: 16 }}>{hero.name}</div>
          <div style={{ fontSize: 36, color: "#98a59f", marginTop: 12 }}>{hero.title}</div>
        </div>
      </div>
    ),
    size,
  );
}
