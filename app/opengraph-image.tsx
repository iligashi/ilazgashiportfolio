import { ImageResponse } from "next/og"

export const alt = "Ilaz Gashi — Full-stack Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
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
          background: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 80% 0%, rgba(200,255,61,0.28), transparent 45%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "100% 100%, 64px 64px, 64px 64px",
          color: "#f2f0eb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#c8ff3d",
              color: "#0b0d05",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            IG
          </div>
          <div style={{ fontSize: 26, color: "#8d9096" }}>ilazgashi.vercel.app</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Ilaz Gashi</div>
          <div style={{ fontSize: 56, color: "#c8ff3d", marginTop: 12, letterSpacing: -2 }}>
            Full-stack engineer who ships the whole product.
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#8d9096" }}>
          {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "MongoDB", "Socket.IO"].map((t) => (
            <div key={t} style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999, padding: "8px 18px" }}>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  )
}
