// App.js
import React, { useState } from 'react';
import { Camera, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import SeptemberCalendar from './components/SeptemberCalendar';
import YearlyContentPlan from './components/YearlyContentPlan';
import InstagramStrategy from './components/InstagramStrategy';
import MarketingPlan from './components/MarketingPlan';
import InstagramShopCatalog from './components/InstagramShopCatalog';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'products':
        return <Products />;
      case 'septemberCalendar':
        return <SeptemberCalendar />;
      case 'yearlyContentPlan':
        return <YearlyContentPlan />;
      case 'instagramStrategy':
        return <InstagramStrategy />;
      case 'marketingPlan':
        return <MarketingPlan />;
      case 'instagramShopCatalog':
        return <InstagramShopCatalog />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
      />
      <main className="container mx-auto p-4">
        {renderContent()}
      </main>
      <footer className="bg-gray-800 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-300">
          &copy; 2023 Wamball Clothing. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;