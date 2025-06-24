import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import "../LandingFonts.css";

/**
 * Landing page for Serene, refactored:
 *  - Logo at the very top and centered
 *  - "Serene" in Nexa Script Heavy font, large and elegant
 *  - Tagline in Muller Next, centered and elegant
 *  - Two side-by-side, equal, capsule-shaped buttons directly below the tagline
 *  - All elements perfectly centered and responsive
 *  - Fonts imported via custom font-face and fallbacks provided
 */
// PUBLIC_INTERFACE
function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full h-full flex flex-col items-center justify-start bg-gradient-to-br from-[#f6fafc] via-[#e8eaf6] to-[#bbe2e2] relative"
      style={{
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f6fafc 0%, #e8eaf6 55%, #bbe2e2 100%)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="flex flex-col items-center w-full"
        style={{
          width: "100%",
          maxWidth: 600,
          margin: "0 auto",
          paddingTop: 48,
          paddingBottom: 74,
        }}
      >
        {/* Logo at the very top */}
        <div className="mb-3" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Logo size={110} />
        </div>
        {/* "Serene" in Nexa Script Heavy */}
        <h1
          className="landing-nexa-heading"
          style={{
            fontFamily: "'NexaScriptHeavy', 'Brush Script MT', 'Dancing Script', cursive",
            fontSize: "4.2rem",
            fontWeight: 700,
            letterSpacing: "0.03em",
            margin: 0,
            marginBottom: 8,
            color: "#b09fb6",
            textShadow: "0 2.5px 28px #e8eaf650, 0 1.5px 0 #ebeaf7, 0 2.7px 16px #bfc8e624",
            textAlign: "center",
            lineHeight: 1.07,
            whiteSpace: "nowrap",
            width: "100%",
            flex: 0,
          }}
        >
          Serene
        </h1>
        {/* Tagline in Muller Next: now italic, in quotes */}
        <div className="w-full max-w-2xl mb-8" style={{ textAlign: "center" }}>
          <p
            className="landing-muller-tagline"
            style={{
              fontFamily: "'MullerNext', 'Inter', Arial, Helvetica, sans-serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "1.58rem",
              color: "#97a3b9",
              lineHeight: 1.21,
              textShadow: "0 1px 13px #bfc8e652",
              margin: 0,
              letterSpacing: "0.01em"
            }}
          >
            &quot;A peaceful Social Space Inspired by Calm, Beauty and Connections&quot;
          </p>
        </div>
        {/* Button row: 2 equal, capsule-shaped, perfectly centered */}
        <div
          className="landing-btn-capsule-row"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            maxWidth: 440,
            gap: 24,
            margin: "0 auto",
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <button
            className="serene-btn serene-btn--gradient serene-btn--large serene-btn--capsule"
            style={{
              flex: 1,
              borderRadius: 9999,
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "1.07rem",
              minWidth: 0,
              margin: 0,
              whiteSpace: "pre-line"
            }}
            onClick={() => navigate("/signup")}
          >
            Create a Serene Account
          </button>
          <button
            className="serene-btn serene-btn--google serene-btn--large serene-btn--capsule"
            style={{
              flex: 1,
              borderRadius: 9999,
              fontFamily: "'Inter', Arial, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "1.07rem",
              minWidth: 0,
              margin: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              whiteSpace: "pre-line"
            }}
            onClick={() => navigate("/google-signin")}
          >
            <span>
              {/* Google G icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                style={{ display: "inline-block", verticalAlign: "middle" }}
                fill="none"
                aria-hidden="true"
              >
                <g>
                  <circle
                    cx="11"
                    cy="11"
                    r="10.5"
                    fill="white"
                    stroke="#bbe2e2"
                  />
                  <path
                    d="M16.93 11.1c0-.51-.05-.98-.14-1.4H11v2.04h3.38c-.09.5-.37.93-.77 1.22v1.02h1.24c.72-.67 1.13-1.65 1.13-2.88z"
                    fill="#4285F4"
                  />
                  <path
                    d="M11 17c1.44 0 2.64-.48 3.51-1.3l-1.69-1.02c-.47.31-1.09.5-1.82.5-1.39 0-2.57-.94-2.99-2.2H6.22v1.08C7.08 15.44 8.9 17 11 17z"
                    fill="#34A853"
                  />
                  <path
                    d="M8.01 13.18a3.45 3.45 0 010-2.18V9.92H6.22a5.003 5.003 0 000 4.52l1.79-1.26z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M11 8.67c.79 0 1.51.27 2.08.8l1.56-1.53C13.64 6.93 12.44 6.33 11 6.33c-2.1 0-3.92 1.56-4.78 3.67l1.79 1.26c.42-1.26 1.6-2.2 2.99-2.2z"
                    fill="#EA4335"
                  />
                </g>
              </svg>
            </span>
            <span style={{ marginLeft: 9 }}>Continue with Google Account</span>
          </button>
        </div>
      </div>
      {/* Footer */}
      <footer
        className="fixed left-0 bottom-0 w-full flex justify-center items-center"
        style={{
          zIndex: 99,
          pointerEvents: "none",
          fontFamily: "'EB Garamond', serif",
          color: "#b2b7c6",
          fontWeight: 400,
          fontSize: "1.09rem",
          letterSpacing: "0.03em",
          padding: "16px 0 10px 0",
          background: "transparent",
          userSelect: "none"
        }}
      >
        <span style={{ pointerEvents: "none" }}>
          &copy; {new Date().getFullYear()} Serene
        </span>
      </footer>
      {/* Responsive custom CSS for capsule row and font-fallbacks */}
      <style>{`
        @media (max-width: 650px) {
          .landing-nexa-heading {
            font-size: 2.1rem !important;
            margin-bottom: 6px !important;
          }
          .landing-muller-tagline {
            font-size: 1.06rem !important;
          }
          .landing-btn-capsule-row {
            flex-direction: column !important;
            gap: 13px !important;
            max-width: 98vw;
            width: 95vw !important;
          }
        }
        .landing-btn-capsule-row > button {
          /* ensure equal width for both buttons */
          min-width: 0 !important;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export default Landing;
