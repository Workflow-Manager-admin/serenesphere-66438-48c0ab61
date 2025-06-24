//
// mockData.js -- Centralized mock/sample data for SereneSphere frontend (users, posts, avatars, bios).
// Use this file to simulate backend data for profile and feed components.
//

// PUBLIC_INTERFACE
export const users = [
  {
    id: 1,
    name: "Maya Wells",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Nature enthusiast. Yoga, mindful living, and daily peace ☁️",
    posts: [1, 6],
  },
  {
    id: 2,
    name: "Aiden Blue",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    bio: "Tea drinker • Early riser • Calm in the chaos.",
    posts: [2],
  },
  {
    id: 3,
    name: "Evelyn Lin",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
    bio: "Ocean walker, soft melodies, slow mornings. 💙",
    posts: [3],
  },
  {
    id: 4,
    name: "Rohan S.",
    avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    bio: "Minimalist geek. Productivity by day, meditation by night.",
    posts: [4],
  },
  {
    id: 5,
    name: "SereneSphere",
    avatar: "",
    bio: "Welcome to the softest place on the net. Minimal, serene, tranquil.",
    posts: [5],
  },
];

// Extra avatars for demo use (if assigning randomly)
export const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/49.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/women/75.jpg",
  "https://randomuser.me/api/portraits/men/24.jpg",
  // fallback SVG, dicebear for "incognito"
  "https://api.dicebear.com/6.x/personas/svg?seed=incognito"
];

// PUBLIC_INTERFACE
export const posts = [
  {
    id: 1,
    userId: 1,
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
    userId: 2,
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
    userId: 3,
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
    userId: 4,
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
    userId: 5,
    name: "SereneSphere",
    avatar: "",
    time: "just now",
    text: "Welcome to the softest place on the net 💙 #serenity",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    likes: 5,
    comments: 1,
  },
  // User Maya makes second post (to show multi-post profile)
  {
    id: 6,
    userId: 1,
    name: "Maya Wells",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    time: "2 days ago",
    text: "Tried meditating before work — the calm lasted all morning ☀️",
    image: "",
    likes: 18,
    comments: 3,
  },
];

// Utility to get user by ID
export function getUserById(id) {
  return users.find(u => u.id === id);
}

// Utility to get posts by user ID
export function getPostsByUserId(uid) {
  return posts.filter(post => post.userId === uid);
}
