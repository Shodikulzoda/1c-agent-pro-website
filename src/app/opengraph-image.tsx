import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 96px",
        background: "linear-gradient(135deg, #123a66, #1d6fd8)",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          color: "#ffffff",
          fontSize: 32,
          fontWeight: 800,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: 16,
            background: "rgba(255,255,255,0.16)",
            fontSize: 24,
          }}
        >
          1C
        </div>
        1C Agent Pro
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 48,
          fontSize: 56,
          fontWeight: 800,
          color: "#ffffff",
          lineHeight: 1.15,
          maxWidth: 900,
        }}
      >
        Ваши продажи в надёжных руках
      </div>
      <div
        style={{
          display: "flex",
          marginTop: 28,
          fontSize: 28,
          color: "rgba(255,255,255,0.82)",
          maxWidth: 820,
        }}
      >
        Мобильное рабочее место торгового агента с полной интеграцией с 1С
      </div>
    </div>,
    size,
  );
}
