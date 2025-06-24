import React from "react";
import PostCard from "../components/PostCard";
import { users, getPostsByUserId } from "../mockData";

// PUBLIC_INTERFACE
function Profile() {
  /**
   * SereneSphere Profile page:
   * Renders demo/mock user profile (avatar, name, bio) and their posts with pastel, calming styling.
   * Swap currentUser value to change displayed profile (simulate "logged in" view).
   */

  // For the simulation, set the index of the current profile (pick one from mock users)
  const PROFILE_INDEX = 0; // 0 = Maya, 1 = Aiden, 2 = Evelyn, 3 = Rohan...
  const user = users[PROFILE_INDEX];
  const userPosts = getPostsByUserId(user.id);

  // Inline styles for profile header and section
  const profileWrap = {
    background: "linear-gradient(180deg, #e8eaf6 75%, #bbe2e2 100%)",
    minHeight: "100vh",
    width: "100%",
    padding: "44px 0 35px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };

  const profileHeadBox = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#e8eaf6",
    boxShadow: "0 1px 17px 0px rgba(187,226,226,0.11)",
    borderRadius: 16,
    padding: "24px 28px 20px 28px",
    margin: "0 0 32px 0",
    border: "1px solid #bbe2e2",
    maxWidth: 400,
    width: "100%"
  };

  const avatarStyle = {
    width: 88,
    height: 88,
    borderRadius: "50%",
    objectFit: "cover",
    background: "#bbe2e2",
    border: "2.2px solid #bfc8e6",
    marginBottom: 10
  };

  const nameStyle = {
    fontWeight: 600,
    color: "#566181",
    fontSize: "1.23rem",
    letterSpacing: 0,
    marginBottom: 2,
    marginTop: 4,
    textAlign: "center"
  };

  const bioStyle = {
    color: "#1a1a1a",
    background: "#fff",
    padding: "9px 13px",
    borderRadius: 11,
    fontSize: "1.01rem",
    maxWidth: 320,
    lineHeight: 1.5,
    fontWeight: 450,
    textAlign: "center",
    border: "1px solid #bbe2e2",
    marginBottom: 0,
    marginTop: 7
  };

  return (
    <div style={profileWrap}>
      <div style={profileHeadBox}>
        <img
          src={user.avatar || "https://api.dicebear.com/6.x/personas/svg?seed=profile"}
          alt={user.name + " avatar"}
          style={avatarStyle}
        />
        <div style={nameStyle}>{user.name}</div>
        <div style={bioStyle}>{user.bio}</div>
      </div>
      {/* User Posts */}
      {userPosts.length === 0 ? (
        <div style={{ color: "#a3b0c0", fontWeight: 470, marginTop: 23 }}>No posts yet. 🌱</div>
      ) : (
        userPosts.map(post => <PostCard key={post.id} {...post} />)
      )}
    </div>
  );
}

export default Profile;
