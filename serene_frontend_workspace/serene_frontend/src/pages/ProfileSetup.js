import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../components/Logo";

/**
 * PUBLIC_INTERFACE
 * ProfileSetup: Collects user info for profile, with avatar upload. Minimal, pastel, vertical stack, input validation.
 */
function ProfileSetup() {
  const navigate = useNavigate();
  const location = useLocation();
  // If previous page passed data, prefill name/email
  const initial = (location.state && typeof location.state === 'object') ? location.state : {};
  const [fields, setFields] = useState({
    name: initial.name || "",
    bio: "",
  });
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const fileInputRef = useRef(null);

  function handleInput(e) {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  }

  function handleAvatarChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setErrors(prev => ({ ...prev, avatar: "Please upload an image file" }));
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, avatar: "Max 2MB size allowed" }));
      return;
    }
    setAvatar(file);
    setAvatarPreview(URL.createObjectURL(file));
    setErrors(prev => ({ ...prev, avatar: undefined }));
  }

  function validate(fields, avatar) {
    const errs = {};
    if (!fields.name.trim()) errs.name = "Name is required";
    if (fields.bio.length > 150) errs.bio = "Max 150 characters";
    if (!avatar) errs.avatar = "Profile picture required";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(fields, avatar);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSaving(true);
      setTimeout(() => {
        setSaving(false);
        // Go to profile page (simulated)
        navigate("/profile", { state: { name: fields.name, bio: fields.bio, avatar: avatarPreview } });
      }, 1100);
    }
  }

  const pageBox = {
    background: "#e8eaf6",
    borderRadius: 13,
    padding: "38px 22px 35px 22px",
    maxWidth: 370,
    width: "100%",
    margin: "80px auto 0",
    boxShadow: "0 1.5px 28px rgba(187,226,226,0.18)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const fieldBox = {
    width: "100%",
    marginBottom: 16
  };

  const labelStyle = {
    display: "block",
    color: "#1a1a1a",
    fontWeight: 500,
    marginBottom: 3,
    marginTop: 7
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 7,
    border: "1px solid #bbe2e2",
    background: "#fff",
    fontSize: "1rem",
    marginBottom: 4
  };

  const errorStyle = {
    color: "#da5e69",
    fontSize: "0.96em",
    marginBottom: 4
  };

  function handleAvatarBoxClick() {
    fileInputRef.current && fileInputRef.current.click();
  }

  return (
    <div style={{
      minHeight: "80vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    }}>
      <Logo size={61} />
      <form
        style={pageBox}
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
        aria-label="Profile creation form"
      >
        <div style={{ marginBottom: 14, textAlign: "center" }}>
          <h2 className="title" style={{ color: "#bfc8e6", fontWeight: 600, fontSize: "1.55rem", margin: 0 }}>
            Set up your Profile
          </h2>
          <div style={{ color: "#bfc8e6", marginTop: 1, fontWeight: 500, fontSize: "1.03em" }}>
            Just a few essentials to get started.
          </div>
        </div>
        {/* Avatar upload */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", marginBottom: 18, width: "100%" }}>
          <div
            style={{
              width: 84,
              height: 84,
              borderRadius: "50%",
              background: "#bfc8e6",
              border: "2.5px dashed #bbe2e2",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
              marginBottom: 3,
              boxShadow: "0 0.5px 8px rgba(187,226,226,0.13)"
            }}
            tabIndex={0}
            onClick={handleAvatarBoxClick}
            aria-label="Upload profile picture"
            title="Upload profile picture"
            onKeyDown={e => (e.key === "Enter" || e.key === " ") && handleAvatarBoxClick()}
          >
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="profile preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <svg width="44" height="44" aria-hidden="true">
                <circle cx="22" cy="22" r="21" fill="#e8eaf6" stroke="#bbe2e2" strokeWidth="2.5"/>
                <path d="M13 28q2-6 7-6t7 6" stroke="#bbe2e2" strokeWidth="1.9" fill="none"/>
                <ellipse cx="22" cy="21" rx="4.1" ry="4.7" fill="#bbe2e2"/>
              </svg>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleAvatarChange}
            />
          </div>
          <button
            type="button"
            onClick={handleAvatarBoxClick}
            style={{
              background: "#bbe2e2",
              color: "#1a1a1a",
              border: "none",
              borderRadius: 24,
              padding: "6px 17px",
              fontSize: "1.01em",
              fontWeight: 600,
              cursor: "pointer",
              marginTop: 3,
              marginBottom: 0,
              transition: "opacity 0.17s",
            }}
          >
            {avatar ? "Change" : "Upload"} Photo
          </button>
          {errors.avatar &&
            <div style={errorStyle}>{errors.avatar}</div>
          }
        </div>
        <div style={fieldBox}>
          <label htmlFor="name" style={labelStyle}>Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your display name"
            value={fields.name}
            onChange={handleInput}
            style={inputStyle}
            maxLength={48}
            autoFocus={!fields.name}
          />
          {errors.name && <div style={errorStyle}>{errors.name}</div>}
        </div>
        <div style={fieldBox}>
          <label htmlFor="bio" style={labelStyle}>
            Bio <span style={{ color: "#566181", fontWeight: 400, fontSize: "0.96em" }}> (optional, max 150 chars)</span>
          </label>
          <textarea
            id="bio"
            name="bio"
            placeholder="Tell about yourself, what calms you, hobbies…"
            rows={3}
            maxLength={150}
            style={{
              ...inputStyle,
              resize: "none",
              fontFamily: "inherit"
            }}
            value={fields.bio}
            onChange={handleInput}
          />
          <div style={{ color: "#566181", fontSize: "0.94em", textAlign: "right" }}>
            {fields.bio.length}/150
          </div>
          {errors.bio && <div style={errorStyle}>{errors.bio}</div>}
        </div>
        <button
          type="submit"
          className="btn btn-large"
          disabled={saving}
          style={{
            background: "#bfc8e6",
            color: "#1a1a1a",
            fontWeight: 600,
            width: "100%",
            border: "none",
            borderRadius: 7,
            marginTop: 18,
            fontSize: "1.09em",
            boxShadow: "0 1.5px 6px rgba(187,226,226,.16)",
            opacity: saving ? 0.6 : 1,
            cursor: saving ? "not-allowed" : "pointer",
            transition: "opacity 0.2s"
          }}
        >
          {saving ? "Saving profile..." : "Complete Profile"}
        </button>
      </form>
    </div>
  );
}

export default ProfileSetup;
