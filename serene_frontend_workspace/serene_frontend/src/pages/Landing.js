import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

// PUBLIC_INTERFACE
function Landing() {
  /**
   * Vertically centered, calming welcome page with SereneSphere logo,
   * inviting message, and navigation buttons.
   */
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Logo size={88} />
      <h1 className="title" style={{ color: "#bfc8e6", marginBottom: 12 }}>
        Welcome to Serene
      </h1>
      <div
        className="description"
        style={{
          color: "#bbe2e2",
          fontWeight: 500,
          fontSize: "1.13rem",
          marginBottom: 32,
        }}
      >
        Discover a calming, minimal social experience in soft pastel. <br />
        Join the Sphere—where inspiration and serenity meet.
      </div>
      <div style={{ display: "flex", gap: 18 }}>
        <button
          className="btn btn-large"
          style={{
            background: "#bfc8e6",
            color: "#1a1a1a",
            fontWeight: 600,
            minWidth: 140,
          }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
        <button
          className="btn btn-large"
          style={{
            background: "#bbe2e2",
            color: "#1a1a1a",
            fontWeight: 600,
            minWidth: 140,
            border: "1px solid #bfc8e6",
          }}
          onClick={() => navigate("/google-signin")}
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}

export default Landing;
