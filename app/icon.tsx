import {ImageResponse} from "next/og";

export const size = {
  width: 64,
  height: 64
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0f19",
          color: "#f5f7fa",
          fontSize: 28,
          fontWeight: 700,
          border: "1px solid #1f2937"
        }}
      >
        HP
      </div>
    ),
    size
  );
}
