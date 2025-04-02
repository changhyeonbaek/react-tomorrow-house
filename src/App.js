import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Navigate, useLocation } from 'react-router-dom';
import './styles/main.scss';
import useAuthStore from './store/authStore';

function PublicRoute({ children }) {
  return children;
}

function PrivateRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();
  console.log('PrivateRoute - isAuthenticated:', isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/sign_in" state={{ from: location }} replace />;
}

function App() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSearchModal = () => setIsSearchModalOpen(true);
  const closeSearchModal = () => setIsSearchModalOpen(false);
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleOverlayClick = () => {
    closeSidebar();
    closeModal();
  };

  return (
    <Router>
      <Routes>
      </Routes>
      <div
        className={`overlay ${isModalOpen || isSidebarOpen ? 'is-active' : ''}`}
        aria-hidden
        onClick={handleOverlayClick}
      />
    </Router>
  );
}

export default App;