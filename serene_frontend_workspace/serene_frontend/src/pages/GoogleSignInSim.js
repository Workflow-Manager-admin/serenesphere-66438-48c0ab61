import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * GoogleSignInSim: Simulated Google sign-in + profile for Serene.
 * Clean, soft pastel minimal form. Validates inputs, transitions to feed.
 */
// PUBLIC_INTERFACE
function GoogleSignInSim() {
  const navigate = useNavigate();
  // Google's simulated fields
  const [fields, setFields] = useState({ email: "", first: "", last: "" });
  const [errors, setErrors] = useState({});
  const [signing, setSigning] = useState(false);

  function validate(values) {
    const err = {};
    if (!values.email) err.email = "Enter your Google email";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email))
      err.email = "Invalid email";
    if (!values.first.trim()) err.first = "First name required";
    if (!values.last.trim()) err.last = "Last name required";
    return err;
  }
  function handleInput(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }
  function signInSim(e) {
    e.preventDefault();
    const err = validate(fields);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSigning(true);
      setTimeout(() => {
        setSigning(false);
        // Fake storing "Google" session, then go to Feed
        navigate("/feed", { state: { user: fields.email, name: `${fields.first} ${fields.last}` } });
      }, 900);
    }
  }

  const googleBtnStyle = {
    background: "#fff",
    border: "1.5px solid #bbe2e2",
    color: "#586284",
    borderRadius: 8,
    padding: "11px 0",
    fontWeight: 600,
    fontSize: "1.08rem",
    marginBottom: 12,
    width: "100%",
    transition: "box-shadow 0.16s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    boxShadow: "0 2px 20px rgba(200,230,230, 0.06)",
    cursor: signing ? "not-allowed" : "pointer",
    opacity: signing ? 0.6 : 1,
  };

  const panelStyle = {
    background: "#e8eaf6",
    borderRadius: 12,
    padding: "44px 28px 32px 28px",
    boxShadow: "0 1.5px 26px 0px rgba(187,226,226,0.13)",
    minWidth: 320,
    maxWidth: 380,
    margin: "80px auto 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start" }}>
      <Logo size={70} />
      <form style={panelStyle} onSubmit={signInSim} autoComplete="off">
        <div style={{ marginBottom: 14, textAlign: "center" }}>
          <h2 className="title" style={{ fontSize: "2rem", color: "#bfc8e6", fontWeight: 600, margin: 0 }}>
            Sign in with Google
          </h2>
          <div style={{ fontWeight: 500, color: "#bfc8e6", fontSize: "1.04em", margin: "3px 0 0" }}>
            (Simulation)
          </div>
        </div>
        <button
          type="button"
          onClick={() => setFields({
            email: "jane.doe@gmail.com", first: "Jane", last: "Doe"
          })}
          style={{ ...googleBtnStyle, marginBottom: 18 }}>
          <img
            src="https://static-00.iconduck.com/assets.00/google-icon-512x512-1jg9405f.png"
            width={22}
            height={22}
            alt="Google icon"
            style={{ borderRadius: 3, marginRight: 7, verticalAlign: "middle" }}
          />
          Pre-fill w/ Test Google
        </button>
        <div style={{ width: "100%" }}>
          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginBottom: 4 }}>
            Google Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="gmail address"
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
            autoFocus
          />
          {errors.email &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.email}</div>
          }

          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginTop: 8, marginBottom: 4 }}>
            First Name
          </label>
          <input
            name="first"
            type="text"
            placeholder="First Name"
            value={fields.first}
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
          {errors.first &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.first}</div>
          }

          <label style={{ display: "block", fontWeight: 500, color: "#1a1a1a", marginTop: 8, marginBottom: 4 }}>
            Last Name
          </label>
          <input
            name="last"
            type="text"
            placeholder="Last Name"
            value={fields.last}
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
          {errors.last &&
            <div style={{ color: "#da5e69", fontSize: "0.95em", marginBottom: 6 }}>{errors.last}</div>
          }
        </div>
        <button
          type="submit"
          className="btn btn-large"
          disabled={signing}
          style={{
            background: "#bbe2e2",
            color: "#1a1a1a",
            fontWeight: 600,
            width: "100%",
            border: "none",
            borderRadius: 6,
            marginTop: 21,
            opacity: signing ? 0.6 : 1,
            cursor: signing ? "not-allowed" : "pointer",
            transition: "opacity 0.2s"
          }}
        >
          {signing ? "Signing in..." : "Sign In"}
        </button>
        <div style={{ marginTop: 10, color: "#586284", fontSize: "0.99em" }}>
          Want to create manually?{" "}
          <span
            style={{ color: "#bfc8e6", cursor: "pointer", fontWeight: 600 }}
            onClick={() => navigate("/signup")}
          >
            Create account
          </span>
        </div>
      </form>
    </div>
  );
}

export default GoogleSignInSim;
