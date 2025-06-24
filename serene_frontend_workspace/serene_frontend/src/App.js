import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

// PUBLIC_INTERFACE
export const AppContext = React.createContext();

/**
 * Main App with full context, routing, and navigation flow integration.
 */
function MainLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <VerticalNav />
      <div style={{
        flex: 1,
        minHeight: "100vh",
        background: "transparent"
      }}>
        {children}
      </div>
    </div>
  );
}

// Guards: Only allow access if authed (user) and has profile
function PrivateRoute({ authed, hasProfile, children }) {
  if (!authed) return <Navigate to="/" />;
  if (!hasProfile) return <Navigate to="/profile-setup" />;
  return children;
}

function AppRoutes() {
  const { user, profile } = React.useContext(AppContext);
  const authed = !!user;
  const hasProfile = !!profile;

  return (
    <Routes>
      {/* Public routes (no nav, pre-auth) */}
      <Route path="/" element={!authed ? <Landing /> : <Navigate to={hasProfile ? "/feed" : "/profile-setup"} />} />
      <Route path="/signup" element={!authed ? <SignUp /> : <Navigate to={hasProfile ? "/feed" : "/profile-setup"} />} />
      <Route path="/google-signin" element={!authed ? <GoogleSignInSim /> : <Navigate to={hasProfile ? "/feed" : "/profile-setup"} />} />
      <Route path="/profile-setup" element={authed && !hasProfile ? <ProfileSetup /> : <Navigate to={authed ? "/feed" : "/"} />} />

      {/* Protected/main app routes (require auth/profile, show VerticalNav) */}
      <Route
        path="/feed"
        element={
          <PrivateRoute authed={authed} hasProfile={hasProfile}>
            <MainLayout>
              <Feed />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/explore"
        element={
          <PrivateRoute authed={authed} hasProfile={hasProfile}>
            <MainLayout>
              <Explore />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/chatbot"
        element={
          <PrivateRoute authed={authed} hasProfile={hasProfile}>
            <MainLayout>
              <Chatbot />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute authed={authed} hasProfile={hasProfile}>
            <MainLayout>
              <Profile />
            </MainLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/tunemymood"
        element={
          <PrivateRoute authed={authed} hasProfile={hasProfile}>
            <MainLayout>
              <TuneMyMood />
            </MainLayout>
          </PrivateRoute>
        }
      />
      {/* fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

// PUBLIC_INTERFACE
function App() {
  // Demo: global user+profile state for navigation/auth flows
  const [user, setUser] = useState(null); // null or {name, email, etc.}
  const [profile, setProfile] = useState(null); // null or {displayName, avatar, ...}
  const value = useMemo(() => ({ user, setUser, profile, setProfile }), [user, profile]);

  return (
    <AppContext.Provider value={value}>
      <Router>
        {/* Remove global nav/header bar from public (landing, signup) pages */}
        <main style={{ minHeight: "100vh" }}>
          <AppRoutes />
        </main>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
