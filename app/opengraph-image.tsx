import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };

export default function OG() {
  return new ImageResponse(
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#faf8f5",
      fontSize: "60px"
    }}>
      <span style={{ color: "#292524" }}>karly</span>
      <span style={{ color: "#fd9a00" }}>.dev</span>
    </div>, size
  );
}