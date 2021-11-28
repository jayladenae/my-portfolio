import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/My-Work';
import Contact from './pages/Contact';
import Landing from './pages/Landing';
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Landing');

  const renderPage = () => {
    if (currentPage === 'Landing') {
      return <Landing />;
    }
    if (currentPage === 'About') {
      return <About />;
    } if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
