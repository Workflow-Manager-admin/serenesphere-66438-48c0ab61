import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * Landing page for Serene.
 * Logo at the top, tagline centered, then small vertical stack of action buttons,
 * with elegant aesthetic layout, removing any old top header/title.
 */
// PUBLIC_INTERFACE
function Landing() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen min-w-screen w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#f6fafc] via-[#e8eaf6] to-[#bbe2e2] relative"
      style={{
        width: "100vw",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #f6fafc 0%, #e8eaf6 55%, #bbe2e2 100%)",
      }}
    >
      <div
        className="flex flex-col items-center justify-center w-full"
        style={{
          flex: 1,
          minHeight: "100vh",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {/* Logo at the top, elegantly spaced */}
        <Logo size={110} />
        {/* Tagline only (no old "Serene Sphere" or "Serene" text above) */}
        <div
          className="w-full px-2 sm:px-4 max-w-2xl mb-7 mt-0"
          style={{ textAlign: "center" }}
        >
          <p
            className="serene-intro"
            style={{
              fontFamily: "'EB Garamond', 'Dancing Script', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "2.18rem",
              color: "#97a3b9",
              lineHeight: 1.18,
              textShadow: "0 1px 15px #bfc8e652",
              margin: 0,
            }}
          >
            a peaceful social spaave inspired by calm and beauty and connections
          </p>
        </div>
        {/* Small stacked action buttons, elegantly spaced and centered */}
        <div className="landing-btn-vertical">
          <button
            className="serene-btn serene-btn--gradient serene-btn--landing"
            onClick={() => navigate("/signup")}
          >
            Create a Serene Account
          </button>
          <button
            className="serene-btn serene-btn--google serene-btn--landing"
            onClick={() => navigate("/google-signin")}
            style={{ marginTop: "13px" }}
          >
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                style={{ display: "inline-block", verticalAlign: "middle" }}
                fill="none"
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
            <span style={{ marginLeft: 7 }}>Continue with Google Account</span>
          </button>
        </div>
      </div>
      {/* Persistent, bottom-centered copyright */}
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
          userSelect: "none",
        }}
      >
        <span style={{ pointerEvents: "none" }}>
          &copy; {new Date().getFullYear()} Serene
        </span>
      </footer>
    </div>
  );
}

export default Landing;
