import React from 'react';

const InstagramShopCatalog = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Instagram Shop Catalog Plan</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Product Selection</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Bestsellers</li>
                        <li>New arrivals</li>
                        <li>Signature pieces</li>
                        <li>Traditional African-inspired designs</li>
                        <li>Modern/contemporary African fashion</li>
                        <li>Accessories</li>
                    </ul>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h3 className="text-xl font-semibold mb-4">Product Information</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Product name</li>
                        <li>Price</li>
                        <li>Short description</li>
                        <li>Available sizes</li>
                        <li>Color options</li>
                        <li>Material information</li>
                    </ul>
                </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Product Photography Guidelines</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>High-quality, consistent product images</li>
                    <li>Clean, well-lit product shots on a neutral background</li>
                    <li>Lifestyle images showing the clothing worn by models</li>
                    <li>Square format (1:1 aspect ratio)</li>
                    <li>Minimum resolution of 1080x1080 pixels</li>
                    <li>Maximum file size of 30MB</li>
                </ul>
            </div>
        </div>
    );
};

export default InstagramShopCatalog;