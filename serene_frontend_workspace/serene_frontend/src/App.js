import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

/**
 * Main App with routing for all major pages.
 */
// PUBLIC_INTERFACE
function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span> KAVIA AI
              </div>
              <button className="btn">Template Button</button>
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/google-signin" element={<GoogleSignInSim />} />
              <Route path="/profile-setup" element={<ProfileSetup />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/chatbot" element={<Chatbot />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/tunemymood" element={<TuneMyMood />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;