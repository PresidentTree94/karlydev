import { ImageResponse } from "next/og";

export const runtime = "edge";

export default async function OG() {

  const playfair = await fetch(new URL("./PlayfairDisplay-Bold.ttf", import.meta.url)).then(res => res.arrayBuffer());

  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#faf8f5",
      fontSize: 80,
      fontFamily: "Playfair",
      position: "relative"
    }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
      }}>
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "700px",
            height: "700px",
            borderRadius: "9999px",
            backgroundColor: "rgba(254, 243, 198, 0.6)", // amber-100/60
        }}></div>
        <div
          style={{
            position: "absolute",
            bottom: "-240px",
            left: "-240px",
            width: "600px",
            height: "600px",
            borderRadius: "9999px",
            backgroundColor: "rgba(231, 229, 228, 0.5)", // stone-200/50
        }}></div>
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "150px",
            width: "900px",
            height: "900px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 251, 235, 0.4)", // amber-50/40
        }}></div>
      </div>
      <span style={{ color: "#292524" }}>karly</span>
      <span style={{ color: "#fd9a00" }}>.dev</span>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{
        name: "Playfair",
        data: playfair,
        weight: 700,
        style: "normal"
      }]
    }
  );
}