// components/HRDashboard/HRDashboard.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HRDashboard.css';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import HRDashboardHome from './HRDashboardHome';
import Analytics from './modules/Analytics';
import BusinessAssociates from './modules/BusinessAssociates';
import Internship from './modules/Internship';
import CandidateDetail from './modules/CandidateDetail';
import RecruitmentPipeline from './modules/RecruitmentPipeline';
import VacancyManagement from './modules/VacancyManagement';

const HRDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="hr-dashboard d-flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      {/* Main content */}
      <div className="hr-main-content d-flex flex-column">
        {/* Top Navigation Bar */}
        <TopNavigation setSidebarOpen={setSidebarOpen} />
        
        {/* Main content area */}
        <main className="flex-grow-1 overflow-auto" style={{backgroundColor: '#ffffff', padding: '20px 24px'}}>
          <Routes>
            <Route path="/" element={<HRDashboardHome />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/business-associates" element={<BusinessAssociates />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/candidate/:id" element={<CandidateDetail />} />
            <Route path="/recruitment" element={<RecruitmentPipeline />} />
            <Route path="/vacancies" element={<VacancyManagement />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default HRDashboard;