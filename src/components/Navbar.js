import React from 'react';
import { Camera } from 'lucide-react';

const Navbar = ({ activeSection, setActiveSection }) => {
    const NavLink = ({ section, label }) => (
        <button
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 text-lg ${activeSection === section
                ? 'text-gold-500 font-bold'
                : 'text-navy-300 hover:text-white'
                }`}
        >
            {label}
        </button>
    );

    return (
        <nav className="bg-navy-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <span className="text-2xl font-bold text-white">Wamball</span>
                </div>
                <div className="hidden md:flex space-x-4">
                    <NavLink section="home" label="Home" />
                    <NavLink section="audit" label="Website Audit" />
                    <NavLink section="septemberCalendar" label="September Calendar" />
                    <NavLink section="yearlyContentPlan" label="Yearly Content Plan" />
                    <NavLink section="instagramStrategy" label="Instagram Strategy" />
                    <NavLink section="marketingPlan" label="Marketing Plan" />
                    <NavLink section="instagramShopCatalog" label="Instagram Shop Catalog" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;