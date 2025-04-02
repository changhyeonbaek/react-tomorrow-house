import React, { useState } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/main.scss';

function PublicRoute({ children }) {
  return children;
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
        {/* 아직 Route는 없음 */}
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