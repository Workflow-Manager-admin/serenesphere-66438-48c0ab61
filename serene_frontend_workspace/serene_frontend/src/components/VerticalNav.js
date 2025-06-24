import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// PUBLIC_INTERFACE
/**
 * VerticalNav: Upgraded persistent vertical navigation bar with
 * beautiful highlight/highlight shadow for active page (Feed as default),
 * tuned for palette and responsive.
 */
function VerticalNav() {
  const location = useLocation();

  // Icons: Feed highlighted with accent if selected
  const navItems = [
    {
      label: "Feed",
      path: "/feed",
      icon: (isActive) => (
        <svg width={27} height={27} aria-hidden="true">
          <rect x="3.1" y="7.5" width="18" height="5" rx="2.25"
            fill={isActive ? "#bfc8e6" : "#e8eaf6"}
            stroke={isActive ? "#e87a41" : "#bbe2e2"} strokeWidth="2"/>
          <rect x="3.1" y="15.5" width="12" height="3.6" rx="1.8"
            fill={isActive ? "#e87a41" : "#bbe2e2"} />
        </svg>
      ),
    },
    {
      label: "Explore",
      path: "/explore",
      icon: (isActive) => (
        <svg width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="12" r="7"
            fill={isActive ? "#bfc8e6" : "#e8eaf6"}
            stroke="#bbe2e2" strokeWidth="2" />
          <ellipse cx="17.2" cy="16.8" rx="4.3" ry="2.1"
            fill={isActive ? "#bbe2e2" : "#bfc8e6"} />
        </svg>
      ),
    },
    {
      label: "Chatbot",
      path: "/chatbot",
      icon: (isActive) => (
        <svg width={24} height={24} aria-hidden="true">
          <ellipse cx="12" cy="11" rx="7" ry="6"
            fill={isActive ? "#bbe2e2" : "#e8eaf6"} />
          <ellipse cx="12" cy="20" rx="2.4" ry="1.3"
            fill={isActive ? "#bfc8e6" : "#bbe2e2"} />
          <circle cx="9.5" cy="11" r="1.1" fill="#e8eaf6" />
          <circle cx="14.5" cy="11" r="1.1" fill="#e8eaf6" />
        </svg>
      ),
    },
    {
      label: "Profile",
      path: "/profile",
      icon: (isActive) => (
        <svg width={24} height={24} aria-hidden="true">
          <circle cx="12" cy="9" r="4"
            fill={isActive ? "#bbe2e2" : "#bfc8e6"} />
          <ellipse cx="12" cy="17" rx="6" ry="3"
            fill={isActive ? "#e8eaf6" : "#bbe2e2"} />
        </svg>
      ),
    },
    {
      label: "TuneMyMood",
      path: "/tunemymood",
      icon: (isActive) => (
        <svg width={24} height={24} aria-hidden="true">
          <ellipse cx="12" cy="14.5" rx="7.3" ry="4.1"
            fill={isActive ? "#bbe2e2" : "#e8eaf6"} />
          <path d="M12 8q2.8 0 2.8 2.4 0 1.5-2.8 1.5-2.8 0-2.8-1.5Q9.2 8 12 8z"
            fill={isActive ? "#e87a41" : "#bfc8e6"} />
        </svg>
      ),
    },
  ];

  // For beautifully styled navBar (bg, shadow, highlight)
  const navStyle = {
    position: "fixed",
    top: 72,
    left: 0,
    height: "calc(100vh - 72px)",
    width: 94,
    background:
      "linear-gradient(180deg, #e8eaf6 71%, #bbe2e2 100%)",
    borderRight: "1.7px solid #bfc8e6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 28,
    zIndex: 99,
    boxShadow: "1.5px 0 12px rgba(187,226,226,0.10)",
    minHeight: 410,
  };

  // Demo: Fine-tune link color/highlight
  const linkStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "13px 0",
    marginBottom: 6,
    color: "#6c7b9d",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "1.08em",
    borderRadius: 13,
    width: 75,
    background: "none",
    transition: "background 0.19s, color 0.14s",
    outline: "none",
    position: "relative",
  };
  const activeLinkStyle = {
    ...linkStyle,
    background: "linear-gradient(92deg, #bbe2e2 50%, #e8eaf6 100%)",
    color: "#e87a41",
    boxShadow: "0 2.5px 19px 0px rgba(187,226,226,0.17)",
    border: "1.7px solid #e87a41",
    zIndex: 11,
  };

  return (
    <aside style={navStyle} aria-label="Main navigation">
      {navItems.map((item) => {
        const isCurrent =
          location.pathname === item.path ||
          location.pathname.startsWith(item.path);
        return (
          <NavLink
            key={item.path}
            to={item.path}
            style={() => (isCurrent ? activeLinkStyle : linkStyle)}
            aria-label={item.label}
            tabIndex={0}
          >
            {item.icon(isCurrent)}
            <span
              style={{
                marginTop: 9,
                fontWeight: 700,
                fontSize: "0.97em",
                letterSpacing: 0.01,
                color: "inherit",
                userSelect: "none",
                textShadow: isCurrent
                  ? "0 2px 6px #e8eaf630"
                  : "none",
                transition: "text-shadow 0.18s",
              }}
            >
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </aside>
  );
}

export default VerticalNav;
