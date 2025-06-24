import React from "react";

// PUBLIC_INTERFACE
function Logo({ size = 72 }) {
  /**
   * Placeholder, calming pastel-tone logo for Serene.
   * Returns a simple SVG logo centered in a circle.
   */
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 24,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SereneSphere Logo"
      >
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="#bfc8e6"
          stroke="#bbe2e2"
          strokeWidth="4"
        />
        <ellipse
          cx="36"
          cy="39"
          rx="18"
          ry="14"
          fill="#e8eaf6"
          stroke="#bbe2e2"
          strokeWidth="2"
        />
        <circle
          cx="36"
          cy="34"
          r="7"
          fill="#bbe2e2"
          stroke="#bfc8e6"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}

export default Logo;
