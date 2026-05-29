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
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        pointerEvents: "none"
      }}>
          <div style={{
            position: "absolute",
            top: -128,
            right: -128,
            borderRadius: "100%",
            width: 700,
            height: 700
          }}></div>
          {/*<div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-stone-200/50"></div>*/}
          {/*<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-amber-50/40"></div>*/}
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