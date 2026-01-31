import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/common/PageTransition';

// Public pages
import Landing from './components/landing/Landing';
import AuthPage from './components/Authentication/AuthPage';

// Dashboards (standalone full-screen pages)
import CandidateDashboard from './components/dashboards/candidate/CandidateDashboard';
import CandidateProfileBuilder from './components/dashboards/candidate/CandidateProfileBuilder';
import RecruiterDashboard from './components/dashboards/recruiter/RecruiterDashboard';
import PostJob from './components/dashboards/recruiter/PostJob';

import AdminDashboard from './components/dashboards/admin/AdminDashboard';

function App() {
  const location = useLocation();

  return (
    <div className="antialiased bg-background-dark text-white min-h-screen">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Public Routes */}
          <Route path="/" element={
            <PageTransition>
              <Landing />
            </PageTransition>
          } />
          <Route path="/auth" element={
            <PageTransition>
              <AuthPage />
            </PageTransition>
          } />

          {/* Candidate Routes */}
          <Route path="/dashboard/candidate">
            <Route index element={
              <PageTransition>
                <CandidateDashboard />
              </PageTransition>
            } />
            <Route path="profile" element={
              <PageTransition>
                <CandidateProfileBuilder />
              </PageTransition>
            } />
          </Route>

          {/* Recruiter Routes */}
          <Route path="/dashboard/recruiter">
            <Route index element={
              <PageTransition>
                <RecruiterDashboard />
              </PageTransition>
            } />
            <Route path="post-job" element={
              <PageTransition>
                <PostJob />
              </PageTransition>
            } />
          </Route>

          {/* Admin Routes */}
          <Route path="/dashboard/admin" element={
            <PageTransition>
              <AdminDashboard />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;