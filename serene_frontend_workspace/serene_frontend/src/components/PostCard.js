import React from "react";
import { avatars } from "../mockData";

/**
 * PUBLIC_INTERFACE
 * PostCard: Renders a single feed post in a soft pastel styled card.
 * Accepts props for avatar, name, text, image, likes count, and comments count.
 */
function PostCard({ avatar, name, time, text, image, likes, comments }) {
  // Styles
  const cardStyle = {
    background: "#e8eaf6",
    borderRadius: 18,
    boxShadow: "0 1.5px 16px 0px rgba(187,226,226,0.10)",
    margin: "0 auto 25px auto",
    maxWidth: 470,
    padding: "18px 20px 12px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    transition: "box-shadow 0.17s",
    border: "1px solid #bbe2e2",
  };
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: 10,
    gap: 11,
  };
  const avatarStyle = {
    width: 43,
    height: 43,
    borderRadius: "50%",
    objectFit: "cover",
    background: "#bbe2e2",
    border: "2px solid #bfc8e6",
    marginRight: 4,
    flexShrink: 0,
  };
  const nameStyle = {
    fontWeight: 600,
    color: "#566181",
    fontSize: "1rem",
    letterSpacing: 0,
  };
  const timeStyle = {
    color: "#a3b0c0",
    fontSize: "0.97em",
    fontWeight: 400,
    marginLeft: 4,
  };
  const textStyle = {
    color: "#1a1a1a",
    fontWeight: 460,
    fontSize: "1.07rem",
    margin: image ? "5px 0 10px 0" : "5px 0 15px 0",
    lineHeight: 1.5,
    textAlign: "left",
    whiteSpace: "pre-wrap"
  };
  const imageBoxStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  };
  const imageStyle = {
    maxWidth: "100%",
    maxHeight: 310,
    borderRadius: 12,
    boxShadow: "0 0.5px 9px rgba(187, 226, 226, 0.18)"
  };
  const actionsStyle = {
    display: "flex",
    alignItems: "center",
    marginTop: 5,
    gap: 25,
    color: "#586284"
  };
  const actionItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: "1.03em",
    cursor: "pointer",
    userSelect: "none"
  };
  return (
    <div style={cardStyle}>
      {/* Header avatar + user */}
      <div style={headerStyle}>
        <img
          src={avatar || "https://api.dicebear.com/6.x/personas/svg?seed=demo"}
          alt={name || "User avatar"}
          style={avatarStyle}
        />
        <div>
          <span style={nameStyle}>{name || "Serene User"}</span>
          <span style={timeStyle}>{time && (" • " + time)}</span>
        </div>
      </div>
      {/* Text content */}
      {text && <div style={textStyle}>{text}</div>}
      {/* Post image */}
      {image && (
        <div style={imageBoxStyle}>
          <img src={image} alt="Post" style={imageStyle} />
        </div>
      )}
      {/* Actions row */}
      <div style={actionsStyle}>
        <div style={actionItemStyle} title="Like">
          <svg width="20" height="20" viewBox="0 0 20 20" style={{marginRight:2}} aria-hidden="true">
            <path d="M10 17.5s-5.5-3.8-7.5-7.3C.7 7.8 2.6 5 5.2 5A4.16 4.16 0 0 1 10 7.48 4.16 4.16 0 0 1 14.8 5c2.6 0 4.5 2.8 2.7 5.2C15.5 13.7 10 17.5 10 17.5z" fill="#bfc8e6" stroke="#bbe2e2" strokeWidth="1.2"/>
          </svg>
          <span>{likes ?? 0}</span>
        </div>
        <div style={actionItemStyle} title="Comments">
          <svg width="20" height="20" viewBox="0 0 20 20" style={{marginRight:1}} aria-hidden="true">
            <ellipse cx="10" cy="10" rx="7.4" ry="6.2" fill="#bbe2e2" stroke="#bfc8e6" strokeWidth="1.1"/>
            <ellipse cx="10" cy="15.4" rx="2.7" ry="1.2" fill="#e8eaf6"/>
          </svg>
          <span>{comments ?? 0}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
