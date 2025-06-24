import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { AppContext } from "../App";

/**
 * SignUp: SereneSphere minimal soft pastel sign-up page.
 * Sets global context for user (demo), transitions to ProfileSetup.
 */
// PUBLIC_INTERFACE
function SignUp() {
  const navigate = useNavigate();
  const { setUser, setProfile } = useContext(AppContext);
  const [fields, setFields] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function validate(values) {
    const errs = {};
    if (!values.name.trim()) errs.name = "Enter your name";
    if (!values.email) errs.email = "Enter your email";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
      errs.email = "Invalid email address";
    if (!values.password) errs.password = "Create a password";
    else if (values.password.length < 6)
      errs.password = "At least 6 characters";
    return errs;
  }

  function handleInput(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validation = validate(fields);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setUser({ name: fields.name, email: fields.email });
        setProfile(null); // force profile setup step after signup
        navigate("/profile-setup");
      }, 1100);
    }
  }

  // Inline pastel/soft styles for this page
  const boxStyle = {
    background: "#e8eaf6",
    borderRadius: 12,
    padding: "44px 28px 32px 28px",
    boxShadow: "0 2px 28px rgba(187,226,226,0.18)",
    minWidth: 320,
    maxWidth: 370,
    margin: "80px auto 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
      <Logo size={70} />
      <form style={boxStyle} onSubmit={handleSubmit} autoComplete="off" noValidate>
        <div style={{ marginBottom: 14, textAlign: "center" }}>
          <h2 className="title" style={{ fontSize: "2rem", color: "#bfc8e6", fontWeight: 600, margin: 0, letterSpacing: 0.2 }}>
            Create your Serene account
          </h2>
        </div>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginBottom: 4 }}>
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={fields.name}
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #bfc8e6",
              marginBottom: 6,
              background: "#fff",
              fontSize: "1rem"
            }}
            autoFocus
          />
          {errors.name &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.name}</div>
          }

          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginTop: 8, marginBottom: 4 }}>
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={fields.email}
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #bfc8e6",
              marginBottom: 6,
              background: "#fff",
              fontSize: "1rem"
            }}
          />
          {errors.email &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.email}</div>
          }

          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginTop: 8, marginBottom: 4 }}>
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Choose a password"
            value={fields.password}
            onChange={handleInput}
            style={{
              width: "100%",
              padding: "10px 12px",
              borderRadius: 6,
              border: "1px solid #bfc8e6",
              marginBottom: 6,
              background: "#fff",
              fontSize: "1rem"
            }}
          />
          {errors.password &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.password}</div>
          }
        </div>
        <button
          type="submit"
          className="btn btn-large"
          disabled={loading}
          style={{
            background: "#bfc8e6",
            color: "#1a1a1a",
            fontWeight: 600,
            width: "100%",
            border: "none",
            borderRadius: 6,
            marginTop: 22,
            marginBottom: 2,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer",
            transition: "opacity 0.2s"
          }}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        <div style={{ marginTop: 10, color: "#586284", fontSize: "0.99em" }}>
          Already have an account?{" "}
          <span
            style={{ color: "#bbe2e2", cursor: "pointer", fontWeight: 600 }}
            onClick={() => {
              setUser(null);
              setProfile(null);
              navigate("/google-signin");
            }}
          >
            Sign in with Google
          </span>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
