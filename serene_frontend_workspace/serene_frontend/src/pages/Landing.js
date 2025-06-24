import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * Landing page for Serene.
 * Vertically and horizontally centers content, places logo above giant title,
 * makes intro text and title dramatically larger, and fixes copyright at bottom.
 */
function Landing() {
  const navigate = useNavigate();

  // Harmonious pastel gradient and container flex centering
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
        {/* Logo above the title, visually dominant, soft shadow */}
        <Logo size={112} />
        {/* "Serene" Dramatic Title */}
        <h1
          className="serene-heading"
          style={{
            fontFamily: "'Playfair Display', 'Dancing Script', serif",
            fontWeight: 900,
            fontSize: "5.7rem",
            letterSpacing: "0.08em",
            color: "#b09fb6",
            textShadow:
              "0 2px 40px #e8eaf650, 0 1.5px 0 #ebeaf7, 0 3px 16px #bfc8e633",
            margin: 0,
            marginBottom: 19,
            lineHeight: 1.08,
            textAlign: "center",
            transition: "font-size 0.2s",
          }}
        >
          Serene
        </h1>

        {/* Dramatic intro quote/text */}
        <div
          className="w-full px-2 sm:px-4 max-w-2xl mb-11 mt-0"
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
            "A peaceful social space inspired by calm, beauty, and connection."
          </p>
        </div>
        {/* Main buttons, beautiful large size */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-7 w-full md:w-auto mt-1">
          <button
            className="rounded-full px-10 py-4 min-w-[230px] text-2xl font-semibold text-[#415973] shadow-xl transition-all duration-300 ease-in-out bg-gradient-to-tr from-[#bbe2e2] via-[#e8eaf6] to-[#bfc8e6] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#bfc8e6] animate-pop"
            style={{
              letterSpacing: "0.03em",
              background:
                "linear-gradient(90deg, #bbe2e2 8%, #e8eaf6 60%, #bfc8e6 100%)",
              boxShadow: "0 3px 28px #bdd9e330",
              marginBottom: 0,
              marginTop: 0,
            }}
            onClick={() => navigate("/signup")}
          >
            Create a Serene Account
          </button>
          <button
            className="rounded-full px-10 py-4 min-w-[230px] text-2xl font-semibold shadow-lg transition-all duration-300 ease-in-out bg-white/80 border border-[#bbe2e2] text-[#53616c] hover:border-[#bfc8e6] hover:text-[#7ba5b7] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#bbe2e2] relative flex items-center gap-2"
            style={{
              marginBottom: 0,
              marginTop: 0,
              fontWeight: 600,
              letterSpacing: "0.02em",
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 3px 28px #bdd9e31e",
            }}
            onClick={() => navigate("/google-signin")}
          >
            <span>
              <svg
                width="28"
                height="28"
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
            <span>Continue with Google</span>
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
