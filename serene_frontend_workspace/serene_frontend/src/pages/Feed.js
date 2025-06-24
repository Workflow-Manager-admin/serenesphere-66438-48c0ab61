import React from "react";
import PostCard from "../components/PostCard";

/**
 * PUBLIC_INTERFACE
 * Feed: Displays a scrollable vertical feed of PostCards with demo/sample data. Pastel/minimal, calming, soft look.
 */
function Feed() {
  // Example static demo post data
  const demoPosts = [
    {
      id: 1,
      name: "Maya Wells",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      time: "5 min ago",
      text: "Let the mind settle like clear water. ☁️🌱\nToday I took a moment to just breathe...",
      image: "",
      likes: 9,
      comments: 2,
    },
    {
      id: 2,
      name: "Aiden Blue",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      time: "19 min ago",
      text: "Serenity in the little things: a cup of tea, a warm sunrise.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
      likes: 17,
      comments: 5,
    },
    {
      id: 3,
      name: "Evelyn Lin",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      time: "30 min ago",
      text: "Walked by the ocean and let the noise drift away.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      likes: 33,
      comments: 7,
    },
    {
      id: 4,
      name: "Rohan S.",
      avatar: "https://randomuser.me/api/portraits/men/24.jpg",
      time: "1 hr ago",
      text: "Minimal workspace = minimal stress.\nStay focused, stay peaceful.",
      image: "",
      likes: 11,
      comments: 0,
    },
    {
      id: 5,
      name: "SereneSphere",
      avatar: "",
      time: "just now",
      text: "Welcome to the softest place on the net 💙 #serenity",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      likes: 5,
      comments: 1,
    }
  ];

  // Styles for feed column container
  const feedColumnStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px 0 30px 0",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #e8eaf6 65%, #bbe2e2 100%)",
    boxSizing: "border-box"
  };

  return (
    <div style={feedColumnStyle}>
      {demoPosts.map(post => (
        <PostCard key={post.id} {...post} />
      ))}
      {/* Optional: End feed message */}
      <div style={{
        padding: "14px",
        color: "#a3b0c0",
        fontWeight: 460,
        fontSize: "0.98em"
      }}>
        {/* Calm footer/more to come */}
        — End of Feed —
      </div>
    </div>
  );
}

export default Feed;
