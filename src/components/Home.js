import React from 'react';
import { UserIcon, BriefcaseIcon, HeartIcon, ShoppingBagIcon, GlobeAltIcon, SparklesIcon } from '@heroicons/react/24/outline';
import wamballLogo from '../wambal.png';

const Home = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gold-600">Welcome to Wamball Clothing</h1>
            <p className="text-xl mb-6">Where Nigerian heritage meets modern luxury</p>
            <img
                src={wamballLogo}
                alt="Wamball Clothing showcase"
                className="mx-auto h-[20rem] w-auto mb-4"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-gold-600">Our Unique Value Proposition</h2>
                <ul className="list-disc list-inside">
                    <li>Exquisite craftsmanship that honors tradition</li>
                    <li>Modern designs for the discerning gentleman</li>
                    <li>Exclusive, customizable pieces for every occasion</li>
                    <li>Premium quality with a strong Nigerian cultural identity</li>
                    <li>Luxury shopping experience both in-store and online</li>
                </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-4 text-gold-600">Our Product Range</h2>
                <ul className="list-disc list-inside">
                    <li>Kaftans</li>
                    <li>Agbadas</li>
                    <li>Traditional caps</li>
                    <li>Luxury shoes</li>
                    <li>Accessories (e.g., beaded necklaces, cufflinks)</li>
                </ul>
            </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-gold-600">Ideal Customer Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <UserIcon className="h-8 w-8 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Demographics</h3>
                <ul className="list-disc list-inside">
                    <li>Male, 30-55 years old</li>
                    <li>Major Nigerian cities and international hubs</li>
                    <li>High-income earners, upper-middle class</li>
                    <li>University degree or higher</li>
                    <li>Executives, business owners, professionals</li>
                </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <HeartIcon className="h-8 w-8 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Psychographics</h3>
                <ul className="list-disc list-inside">
                    <li>Values Nigerian cultural heritage</li>
                    <li>Appreciates quality and craftsmanship</li>
                    <li>Seeks balance of tradition and modernity</li>
                    <li>Enjoys luxury experiences</li>
                    <li>Confident and image-conscious</li>
                </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <ShoppingBagIcon className="h-8 w-8 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Behavior</h3>
                <ul className="list-disc list-inside">
                    <li>Prefers personalized shopping</li>
                    <li>Invests in high-quality, premium items</li>
                    <li>Loyal to quality brands</li>
                    <li>Active on Instagram</li>
                    <li>Influenced by peers and fashion leaders</li>
                </ul>
            </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center text-gold-600">Company Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <GlobeAltIcon className="h-8 w-8 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Presence</h3>
                <p className="mb-2"><strong>Physical:</strong> Flagship stores in Kano and Abuja</p>
                <p><strong>Online:</strong> Luxury e-commerce website and active social media presence</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <SparklesIcon className="h-8 w-8 text-gold-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Brand Values</h3>
                <ul className="list-disc list-inside">
                    <li>Cultural pride and authenticity</li>
                    <li>Uncompromising quality</li>
                    <li>Innovation in traditional design</li>
                    <li>Exceptional customer service</li>
                    <li>Sustainability and ethical production</li>
                </ul>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow text-center">
            <BriefcaseIcon className="h-8 w-8 text-gold-600 mb-4 mx-auto" />
            <h3 className="text-xl font-bold mb-2">Future Direction</h3>
            <p>Wamball aims to expand its international presence, particularly in cities with large Nigerian diaspora populations, while continuing to innovate in the space of luxury traditional attire.</p>
        </div>
    </div>
);

export default Home;