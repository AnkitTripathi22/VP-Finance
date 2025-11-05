// components/HRDashboard/Sidebar.jsx
import React from "react";
import {
  FaSignOutAlt,
  FaHome,
  FaFileAlt,
  FaSync,
  FaUsers,
  FaChartBar,
  FaHandshake,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get user data from localStorage

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: <FaHome /> },
    {
      name: "Vacancy Management",
      href: "/dashboard/vacancies",
      icon: <FaFileAlt />,
    },
    {
      name: "Recruitment Pipeline",
      href: "/dashboard/recruitment",
      icon: <FaSync />,
    },
    {
      name: "Business Associates",
      href: "/dashboard/business-associates",
      icon: <FaUsers />,
    },
    {
      name: "Internship",
      href: "/dashboard/internship",
      icon: <FaHandshake />,
    },
    { name: "Analytics", href: "/dashboard/analytics", icon: <FaChartBar /> },
  ];

  const isActive = (href) => {
    return (
      location.pathname === href || location.pathname.startsWith(href + "/")
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/auth/login");
  };

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="hr-sidebar-backdrop d-md-none"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`hr-sidebar d-flex flex-column ${
          sidebarOpen ? "" : "mobile-hidden"
        }`}
      >
        {/* Close button for mobile */}
        <div className="d-md-none text-end p-2 border-bottom">
          <button
            className="btn btn-sm btn-link text-dark"
            onClick={() => setSidebarOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-grow-1 px-3 py-3 overflow-auto">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`hr-nav-link ${isActive(item.href) ? "active" : ""}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="me-3 fs-5">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-3 border-top">
          <button
            onClick={handleLogout}
            className="hr-btn-danger w-100 d-flex align-items-center justify-content-center"
          >
            <span className="me-2">
              <FaSignOutAlt />
            </span>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
