import React from "react";
import { useNavigate } from "react-router-dom";

// Inline SVG Lotus Icon for pastel logo
const LotusIcon = () => (
  <svg
    width="92"
    height="70"
    viewBox="0 0 92 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Serene Lotus Logo"
    className="mx-auto mb-6 drop-shadow-lg"
  >
    <ellipse cx="46" cy="59" rx="11" ry="8" fill="#bbe2e2" />
    <path
      d="M46 49C50.4183 50.8333 52.8246 62 52.8246 62C52.8246 62 55.3333 52 64 48.5C72.6667 45 87.5 56.5 87.5 56.5C87.5 56.5 70 44.5 70 30C70 7.5 60.5 1.5 46 25C31.5 1.5 22 7.5 22 30C22 44.5 4.5 56.5 4.5 56.5C4.5 56.5 19.3333 45 28 48.5C36.6667 52 39.1754 62 39.1754 62C39.1754 62 41.5817 50.8333 46 49Z"
      fill="#bfc8e6"
      stroke="#e8eaf6"
      strokeWidth="2"
    />
    <ellipse cx="46" cy="33" rx="8" ry="14" fill="#e8eaf6" opacity="0.5" />
  </svg>
);

function Landing() {
  const navigate = useNavigate();

  // Gradient colors from pastel palette
  const gradientBtn =
    "bg-gradient-to-tr from-[#bbe2e2] via-[#e8eaf6] to-[#bfc8e6]";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f6fafc] via-[#e8eaf6] to-[#bbe2e2] relative text-[#222]">
      <header className="absolute top-8 left-0 w-full text-center pointer-events-none">
        <h1
          className="font-serif text-5xl md:text-7xl font-extrabold tracking-widest text-[#b09fb6] drop-shadow-xl"
          style={{
            fontFamily: "'Playfair Display', 'Dancing Script', serif",
            letterSpacing: "0.05em"
          }}
        >
          Serene
        </h1>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center z-10 w-full mt-12 mb-6">
        <LotusIcon />
        <div className="mb-10 w-full px-4 max-w-xl">
          <p
            className="italic text-xl md:text-2xl text-center font-light text-[#97a3b9]"
            style={{
              fontFamily: "'EB Garamond', 'Dancing Script', serif"
            }}
          >
            "A peaceful social space inspired by calm, beauty, and connection."
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full md:w-auto">
          <button
            className={
              `${gradientBtn} rounded-full px-8 py-3 min-w-[220px] text-lg font-semibold text-[#415973] shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-tr hover:from-[#bfc8e6] hover:to-[#bbe2e2] focus:outline-none focus:ring-2 focus:ring-[#bfc8e6] animate-pop`
            }
            onClick={() => navigate("/signup")}
          >
            Create a Serene Account
          </button>

          <button
            className={
              "rounded-full px-8 py-3 min-w-[220px] text-lg font-semibold shadow-lg transition-all duration-300 ease-in-out bg-white/70 border border-[#bbe2e2] text-[#53616c] hover:border-[#bfc8e6] hover:text-[#7ba5b7] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#bbe2e2] relative flex items-center gap-2"
            }
            onClick={() => navigate("/google-signin")}
          >
            <span className="inline-block">
              {/* Google G icon (SVG) */}
              <svg width="22" height="22" viewBox="0 0 22 22" className="inline-block align-middle" fill="none">
                <g>
                  <circle cx="11" cy="11" r="10.5" fill="white" stroke="#bbe2e2" />
                  <path d="M16.93 11.1c0-.51-.05-.98-.14-1.4H11v2.04h3.38c-.09.5-.37.93-.77 1.22v1.02h1.24c.72-.67 1.13-1.65 1.13-2.88z" fill="#4285F4"/>
                  <path d="M11 17c1.44 0 2.64-.48 3.51-1.3l-1.69-1.02c-.47.31-1.09.5-1.82.5-1.39 0-2.57-.94-2.99-2.2H6.22v1.08C7.08 15.44 8.9 17 11 17z" fill="#34A853"/>
                  <path d="M8.01 13.18a3.45 3.45 0 010-2.18V9.92H6.22a5.003 5.003 0 000 4.52l1.79-1.26z" fill="#FBBC05"/>
                  <path d="M11 8.67c.79 0 1.51.27 2.08.8l1.56-1.53C13.64 6.93 12.44 6.33 11 6.33c-2.1 0-3.92 1.56-4.78 3.67l1.79 1.26c.42-1.26 1.6-2.2 2.99-2.2z" fill="#EA4335"/>
                </g>
              </svg>
            </span>
            <span>Continue with Google</span>
          </button>
        </div>
      </main>
      <footer className="absolute bottom-3 left-0 w-full flex justify-center text-sm text-[#b2b7c6] font-serif tracking-wide z-0">
        &copy; {new Date().getFullYear()} Serene
      </footer>
    </div>
  );
}

export default Landing;
