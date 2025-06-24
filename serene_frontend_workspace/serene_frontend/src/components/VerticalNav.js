import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * VerticalNav: Persistent vertical navigation bar for SereneSphere.
 * Pastel/minimal style, fixed left on main app pages post-login.
 * Navigation: Feed, Explore, Chatbot, Profile, TuneMyMood.
 */
function VerticalNav() {
  const location = useLocation();

  // Minimal icon SVGs (soft, rounded, pastel style)
  const navItems = [
    {
      label: "Feed",
      path: "/feed",
      icon: (
        <svg width={24} height={24} aria-hidden="true">
          <rect x="3" y="7" width="18" height="4.5" rx="2" fill="#bfc8e6" />
          <rect x="3" y="15" width="12" height="3.5" rx="1.8" fill="#bbe2e2" />
        </svg>
      )
    },
    {
      label: "Explore",
      path: "/explore",
      icon: (
        <svg width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="12" r="7" fill="#e8eaf6" stroke="#bbe2e2" strokeWidth="2" />
          <ellipse cx="17.2" cy="16.8" rx="4.3" ry="2.1" fill="#bfc8e6" />
        </svg>
      )
    },
    {
      label: "Chatbot",
      path: "/chatbot",
      icon: (
        <svg width={24} height={24} aria-hidden="true">
          <ellipse cx="12" cy="11" rx="7" ry="6" fill="#bbe2e2" />
          <ellipse cx="12" cy="20" rx="2.4" ry="1.3" fill="#bfc8e6" />
          <circle cx="9.5" cy="11" r="1.1" fill="#e8eaf6" />
          <circle cx="14.5" cy="11" r="1.1" fill="#e8eaf6" />
        </svg>
      )
    },
    {
      label: "Profile",
      path: "/profile",
      icon: (
        <svg width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="9" r="4" fill="#bfc8e6" />
          <ellipse cx="12" cy="17" rx="6" ry="3" fill="#e8eaf6" />
        </svg>
      )
    },
    {
      label: "TuneMyMood",
      path: "/tunemymood",
      icon: (
        <svg width={24} height={24} aria-hidden="true">
          <ellipse cx="12" cy="14.5" rx="7.3" ry="4.1" fill="#bbe2e2" />
          <path d="M12 8q2.8 0 2.8 2.4 0 1.5-2.8 1.5-2.8 0-2.8-1.5Q9.2 8 12 8z"
            fill="#bfc8e6" />
        </svg>
      )
    }
  ];

  // For minimal demo: Mark current route
  const navStyle = {
    position: "fixed",
    top: 72,
    left: 0,
    height: "calc(100vh - 72px)",
    width: 90,
    background: "#e8eaf6",
    borderRight: "1.5px solid #bfc8e6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 25,
    zIndex: 90,
    boxShadow: "1.5px 0 12px rgba(187,226,226,0.06)",
    minHeight: 400
  };
  const linkStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "12px 0",
    marginBottom: 3,
    color: "#6c7b9d",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.05em",
    borderRadius: 12,
    width: 72,
    background: "none",
    transition: "background 0.17s"
  };
  const activeLinkStyle = {
    ...linkStyle,
    background: "#bbe2e2",
    color: "#1a1a1a",
    boxShadow: "0 2px 14px 0px rgba(187,226,226,0.15)"
  };

  return (
    <aside style={navStyle} aria-label="Main navigation">
      {navItems.map(item => (
        <NavLink
          key={item.path}
          to={item.path}
          style={({ isActive }) => isActive || location.pathname.startsWith(item.path)
            ? activeLinkStyle : linkStyle}
          aria-label={item.label}
        >
          {item.icon}
          <span style={{
            marginTop: 7,
            fontWeight: 600,
            fontSize: "0.95em",
            letterSpacing: 0,
            color: "inherit",
            userSelect: "none"
          }}>{item.label}</span>
        </NavLink>
      ))}
    </aside>
  );
}

export default VerticalNav;
