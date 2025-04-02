import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './styles/main.scss';
import GlobalHeader from './components/GlobalHeader';
import GlobalFooter from './components/GlobalFooter';
import Sidebar from './components/Sidebar';
import SearchModal from './components/SearchModal';
import SignIn from './pages/SignIn';
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

function AppLayout({ children, openSidebar, openSearchModal, isSidebarOpen, isSearchModalOpen, closeSearchModal, openModal, isModalOpen, closeModal }) {
  return (
    <>
      <GlobalHeader openSidebar={openSidebar} openSearchModal={openSearchModal} />
      {React.cloneElement(children, { openModal, isModalOpen, closeModal })}
      <GlobalFooter />
      <Sidebar isOpen={isSidebarOpen} />
      <SearchModal isSearchModalOpen={isSearchModalOpen} closeSearchModal={closeSearchModal} />
    </>
  );
}

function AuthLayout({ children }) {
  return <div className="auth-container">{children}</div>;
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

  useEffect(() => {
    useAuthStore.getState().initializeAuth();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/sign_in"
          element={
            <PublicRoute>
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            </PublicRoute>
          }
        />
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