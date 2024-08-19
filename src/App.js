import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WebsiteAudit from './components/WebsiteAudit';
import SeptemberCalendar from './components/SeptemberCalendar';
import YearlyContentPlan from './components/YearlyContentPlan';
import InstagramStrategy from './components/InstagramStrategy';
import MarketingPlan from './components/MarketingPlan';
import InstagramShopCatalog from './components/InstagramShopCatalog';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'audit': return <WebsiteAudit />;
      case 'septemberCalendar': return <SeptemberCalendar />;
      case 'yearlyContentPlan': return <YearlyContentPlan />;
      case 'instagramStrategy': return <InstagramStrategy />;
      case 'marketingPlan': return <MarketingPlan />;
      case 'instagramShopCatalog': return <InstagramShopCatalog />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;