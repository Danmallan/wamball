import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { CameraIcon, VideoCameraIcon, UserGroupIcon, ChartBarIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

const InstagramStrategy = () => {
    const contentPillars = [
        { name: 'Product Showcase', value: 40 },
        { name: 'Behind the Scenes', value: 20 },
        { name: 'Lifestyle and Culture', value: 20 },
        { name: 'Customer Spotlight', value: 10 },
        { name: 'Brand Values and Heritage', value: 10 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    const budgetAllocation = [
        { name: 'Conversion Ads', value: 60 },
        { name: 'Traffic Ads', value: 30 },
        { name: 'Awareness Ads', value: 10 },
    ];

    return (
        <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gold-600">Instagram Marketing Strategy</h2>
                <p className="mt-2 text-lg text-gray-600">Positioning Wamball Clothing as the premier luxury traditional attire brand on Instagram</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4 text-gold-600">Content Pillars</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={contentPillars}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {contentPillars.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4 text-gold-600">Content Types & Frequency</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><CameraIcon className="h-5 w-5 mr-2 text-gold-600" /> Main Feed: 4-5 high-res photos per week</li>
                        <li className="flex items-center"><VideoCameraIcon className="h-5 w-5 mr-2 text-gold-600" /> Reels: 2-3 short-form videos per week</li>
                        <li className="flex items-center"><CameraIcon className="h-5 w-5 mr-2 text-gold-600" /> Stories: Daily updates</li>
                        <li className="flex items-center"><VideoCameraIcon className="h-5 w-5 mr-2 text-gold-600" /> IGTV: 1-2 longer videos per month</li>
                    </ul>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-gold-600">Visual Aesthetics</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Consistent color palette reflecting brand colors</li>
                    <li>High-contrast, well-lit imagery</li>
                    <li>Mix of studio shots and lifestyle photography</li>
                    <li>Luxurious, sophisticated feel in all visuals</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-gold-600">Engagement Strategy</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Respond to all comments within 24 hours</li>
                    <li>Use questions and polls in Stories to boost interaction</li>
                    <li>Host monthly Instagram Live sessions (e.g., styling tips, Q&A with designers)</li>
                    <li>Implement branded hashtags: #WamballStyle #LuxuryNigerianFashion</li>
                </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-gold-600">Influencer Collaboration</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Partner with 3-5 Nigerian fashion influencers quarterly</li>
                    <li>Focus on micro-influencers with high engagement in luxury and traditional fashion niches</li>
                    <li>Collaborate with respected Nigerian celebrities for special collections or events</li>
                </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4 text-gold-600">Advertising Strategy</h3>
                    <h4 className="text-lg font-semibold mb-2">Campaign Objectives</h4>
                    <ol className="list-decimal list-inside mb-4">
                        <li>Brand Awareness</li>
                        <li>Website Traffic</li>
                        <li>Conversions (online purchases)</li>
                    </ol>
                    <h4 className="text-lg font-semibold mb-2">Ad Types</h4>
                    <ul className="list-disc list-inside">
                        <li>Photo ads for single product highlights</li>
                        <li>Carousel ads for showcasing collections</li>
                        <li>Video ads for brand storytelling</li>
                        <li>Story ads for time-sensitive promotions</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4 text-gold-600">Budget Allocation</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={budgetAllocation}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-gold-600">Performance Metrics and KPIs</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Follower growth rate</li>
                    <li>Engagement rate (likes, comments, shares)</li>
                    <li>Reach and impressions</li>
                    <li>Website traffic from Instagram</li>
                    <li>Conversion rate from Instagram traffic</li>
                    <li>Return on Ad Spend (ROAS)</li>
                </ul>
            </div>
        </div>
    );
};

export default InstagramStrategy;