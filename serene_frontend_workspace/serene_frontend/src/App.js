import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Import page skeletons
import Landing from './pages/Landing';
import SignUp from './pages/SignUp';
import GoogleSignInSim from './pages/GoogleSignInSim';
import ProfileSetup from './pages/ProfileSetup';
import Feed from './pages/Feed';
import Explore from './pages/Explore';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import TuneMyMood from './pages/TuneMyMood';

// Import persistent vertical navigation
import VerticalNav from './components/VerticalNav';

/**
 * Main App with routing for all major pages.
 */
// PUBLIC_INTERFACE
function App() {
  // Helper to determine if nav should show
  // Only show VerticalNav on main app pages (post-login/profile complete)
  const PostLoginShell = ({ children }) => (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <VerticalNav />
      <div style={{
        flex: 1,
        marginLeft: 90,
        padding: 0,
        minHeight: "100vh",
        background: "transparent"
      }}>
        {children}
      </div>
    </div>
  );
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            {/* Minimal fixed header for Serene */}
            <div className="logo" style={{ fontWeight: 600, color: "#bfc8e6" }}>
              SereneSphere
            </div>
          </div>
        </nav>

        {/* Main layout changes: show left nav ONLY on feed/explore/chatbot/profile/tunemymood */}
        <main style={{ minHeight: "100vh", marginTop: 64 }}>
          <Routes>
            {/* Pre-login / standalone flows */}
            <Route path="/" element={<div className="container"><Landing /></div>} />
            <Route path="/signup" element={<div className="container"><SignUp /></div>} />
            <Route path="/google-signin" element={<div className="container"><GoogleSignInSim /></div>} />
            <Route path="/profile-setup" element={<div className="container"><ProfileSetup /></div>} />

            {/* Post-login/profile complete: Wrap pages with PostLoginShell */}
            <Route path="/feed" element={
              <PostLoginShell>
                <Feed />
              </PostLoginShell>
            } />
            <Route path="/explore" element={
              <PostLoginShell>
                <Explore />
              </PostLoginShell>
            } />
            <Route path="/chatbot" element={
              <PostLoginShell>
                <Chatbot />
              </PostLoginShell>
            } />
            <Route path="/profile" element={
              <PostLoginShell>
                <Profile />
              </PostLoginShell>
            } />
            <Route path="/tunemymood" element={
              <PostLoginShell>
                <TuneMyMood />
              </PostLoginShell>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;