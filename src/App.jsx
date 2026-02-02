import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from './components/common/PageTransition';
import PageTitle from './components/common/PageTitle';

// Public pages
import Landing from './components/landing/Landing';
import AuthPage from './components/Authentication/AuthPage';

// Dashboards (standalone full-screen pages)
import CandidateLayout from './components/dashboards/candidate/CandidateLayout'; // New Layout
import CandidateDashboard from './components/dashboards/candidate/CandidateDashboard';
import CandidateJobSearch from './components/dashboards/candidate/CandidateJobSearch'; // New Page
import CandidateFreshers from './components/dashboards/candidate/CandidateFreshers'; // New Page
import CandidateMessages from './components/dashboards/candidate/CandidateMessages'; // New Page
import CandidateApplications from './components/dashboards/candidate/CandidateApplications'; // New Page
import CandidateProfileBuilder from './components/dashboards/candidate/CandidateProfileBuilder';
import RecruiterLayout from './components/dashboards/recruiter/RecruiterLayout'; // New Layout
import RecruiterDashboard from './components/dashboards/recruiter/RecruiterDashboard';
import RecruiterApplications from './components/dashboards/recruiter/RecruiterApplications'; // New Page
import RecruiterJobs from './components/dashboards/recruiter/RecruiterJobs'; // New Page
import PostJob from './components/dashboards/recruiter/PostJob';
import AdminDashboard from './components/dashboards/admin/AdminDashboard';
import AdminOverview from './components/dashboards/admin/AdminOverview';
import UsersPage from './components/dashboards/admin/UsersPage';

function App() {
  const location = useLocation();

  return (
    <div className="antialiased bg-background-dark text-white min-h-screen">
      <PageTitle />
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
            {/* Layout-wrapped routes */}
            <Route element={<CandidateLayout />}>
              <Route index element={
                <PageTransition>
                  <CandidateDashboard />
                </PageTransition>
              } />
              <Route path="jobs" element={
                <PageTransition>
                  <CandidateJobSearch />
                </PageTransition>
              } />
              <Route path="freshers" element={
                <PageTransition>
                  <CandidateFreshers />
                </PageTransition>
              } />
              <Route path="messages" element={
                <PageTransition>
                  <CandidateMessages />
                </PageTransition>
              } />
              <Route path="applications" element={
                <PageTransition>
                  <CandidateApplications />
                </PageTransition>
              } />
            </Route>

            {/* Standalone routes (own layout) */}
            <Route path="profile" element={
              <PageTransition>
                <CandidateProfileBuilder />
              </PageTransition>
            } />
          </Route>

          {/* Recruiter Routes */}
          <Route path="/dashboard/recruiter" element={<RecruiterLayout />}>
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
            <Route path="jobs" element={
              <PageTransition>
                <RecruiterJobs />
              </PageTransition>
            } />
            <Route path="applications" element={
              <PageTransition>
                <RecruiterApplications />
              </PageTransition>
            } />
          </Route>

          {/* Admin Routes */}
          <Route path="/dashboard/admin" element={
            <PageTransition>
              <AdminDashboard />
            </PageTransition>
          }>
            <Route index element={<AdminOverview />} />
            <Route path="users" element={<UsersPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
