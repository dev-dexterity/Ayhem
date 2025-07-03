import React, { useState } from 'react';
import {
    FaStar, FaUsers, FaUser, FaGamepad,
    FaCode, FaDollarSign, FaWifi, FaFacebook, 
    FaInstagram, FaShoppingCart, FaGem, FaCoins, 
    FaBriefcase, FaStore, FaEye, FaCreditCard, 
    FaGift, FaExchangeAlt, FaDatabase, FaSimCard, 
    FaMapMarkerAlt, FaBullhorn, FaCalendarAlt, 
    FaAd, FaEnvelope, FaTv, FaGamepad as FaController
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const categories = [
    {
        icon: <FaStar />, 
        title: 'Sponsoring',
        color: 'from-orange-400 to-orange-600',
        subcategories: [
            { name: 'Business Sponsoring', icon: <FaBullhorn />, price: 'À partir de 299€', color: 'from-orange-500 to-red-500' },
            { name: 'Event Sponsoring', icon: <FaCalendarAlt />, price: 'À partir de 199€', color: 'from-purple-500 to-indigo-500' },
            { name: 'Digital Advertising', icon: <FaAd />, price: 'À partir de 99€', color: 'from-blue-500 to-cyan-500' }
        ]
    },
    {
        icon: <FaUsers />, 
        title: 'Abonnés & Vues',
        color: 'from-pink-500 to-red-400',
        subcategories: [
            { name: 'Facebook', icon: <FaFacebook />, price: '0.05€/abonné', color: 'from-blue-600 to-blue-700' },
            { name: 'Instagram', icon: <FaInstagram />, price: '0.08€/abonné', color: 'from-pink-600 to-purple-600' },
            { name: 'TikTok', icon: <SiTiktok />, price: '0.03€/vue', color: 'from-black to-gray-800' }
        ]
    },
    {
        icon: <FaUser />, 
        title: 'Comptes',
        color: 'from-purple-500 to-indigo-400',
        subcategories: [
            { name: 'Social Media', icon: <FaUsers />, price: '15€ - 150€', color: 'from-pink-500 to-red-500' },
            { name: 'Email', icon: <FaEnvelope />, price: '5€ - 50€', color: 'from-green-500 to-emerald-500' },
            { name: 'Streaming', icon: <FaTv />, price: '20€ - 200€', color: 'from-purple-500 to-indigo-500' }
        ]
    },
    {
        icon: <FaGamepad />, 
        title: 'Gaming',
        color: 'from-purple-600 to-pink-400',
        subcategories: [
            { name: 'Items', icon: <FaShoppingCart />, price: '1€ - 500€', color: 'from-green-500 to-emerald-600' },
            { name: 'Accounts', icon: <FaController />, price: '10€ - 1000€', color: 'from-blue-500 to-indigo-600' },
            { name: 'Gems & Coins', icon: <FaGem />, price: '0.10€/100 gems', color: 'from-yellow-500 to-orange-600' }
        ]
    },
    {
        icon: <FaCode />, 
        title: 'Web',
        color: 'from-sky-400 to-blue-500',
        subcategories: [
            { name: 'Portfolio', icon: <FaBriefcase />, price: '299€ - 999€', color: 'from-gray-600 to-gray-800' },
            { name: 'E-commerce', icon: <FaStore />, price: '599€ - 2999€', color: 'from-green-600 to-emerald-700' },
            { name: 'Vitrine', icon: <FaEye />, price: '199€ - 699€', color: 'from-indigo-600 to-purple-700' }
        ]
    },
    {
        icon: <FaDollarSign />, 
        title: 'USDs',
        color: 'from-green-400 to-emerald-500',
        subcategories: [
            { name: 'Top-up', icon: <FaCreditCard />, price: '5€ - 500€', color: 'from-blue-500 to-indigo-500' },
            { name: 'Gift Cards', icon: <FaGift />, price: '10€ - 200€', color: 'from-red-500 to-pink-500' },
            { name: 'Transfers', icon: <FaExchangeAlt />, price: '1% commission', color: 'from-green-500 to-emerald-500' }
        ]
    },
    {
        icon: <FaWifi />, 
        title: 'Mobile Internet',
        color: 'from-blue-400 to-indigo-500',
        subcategories: [
            { name: 'Data Packages', icon: <FaDatabase />, price: '5€ - 50€', color: 'from-blue-500 to-cyan-500' },
            { name: 'eSIM', icon: <FaSimCard />, price: '15€ - 100€', color: 'from-purple-500 to-indigo-500' },
            { name: 'Local Offers', icon: <FaMapMarkerAlt />, price: '3€ - 30€', color: 'from-green-500 to-teal-500' }
        ]
    },
];

const Categories = () => {
    const [activeCategory, setActiveCategory] = useState(0); // Set to 0 to show Sponsoring by default

    const toggleCategory = (index) => {
        setActiveCategory(index === activeCategory ? null : index);
    };

    return (
        <div id='home' className="w-full min-h-screen bg-gradient-to-b from-[#1F0036] to-[#0F0020] text-white py-8 sm:py-12 lg:py-16 px-3 sm:px-4 lg:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12">
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Products
                </span>
            </h2>
            <h4 className='text-2xl sm:text-4xl md:text-5xl lg:text-2xl font-bold text-white text-center mb-8 sm:mb-10 lg:mb-12'>Check our Digital Services</h4>

            <div className="max-w-7xl mx-auto">
                {/* Main Categories - Always Single Line */}
                <div className="flex justify-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mb-8 sm:mb-10 lg:mb-12 overflow-x-auto pb-2">
                    {categories.map((category, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                console.log("Category clicked:", idx);
                                toggleCategory(idx);
                            }}
                            className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-lg sm:rounded-xl shadow-lg cursor-pointer
                                       bg-gradient-to-br ${category.color}
                                       flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 focus:outline-none
                                       ${activeCategory === idx ? 'ring-1 sm:ring-2 lg:ring-4 ring-white/30 scale-105' : ''}`}
                        >
                            <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mb-0.5 sm:mb-1">{category.icon}</div>
                            <div className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-semibold text-center px-0.5 sm:px-1 leading-tight">
                                {category.title.split(' ').map((word, i) => (
                                    <div key={i} className="whitespace-nowrap">{word}</div>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>

                {/* Subcategories Section */}
                {activeCategory !== null && (
                    <div className="w-full animate-in slide-in-from-top-5 duration-500">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-6 sm:mb-8">
                            {categories[activeCategory].title}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                            {categories[activeCategory].subcategories.map((product, subIdx) => (
                                <div
                                    key={subIdx}
                                    className={`bg-gradient-to-br ${categories[activeCategory].color} rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105`}
                                >
                                    <div className="flex items-center mb-3 sm:mb-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                            <div className="text-white text-lg sm:text-xl">{product.icon}</div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-bold text-white text-base sm:text-lg truncate">{product.name}</h3>
                                            <p className="text-xs sm:text-sm text-white/80">{product.price}</p>
                                        </div>
                                    </div>
                                    <p className="text-white/70 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                                        {product.name === 'Business Sponsoring' && 'Premium business sponsoring packages with featured placement and targeted marketing campaigns.'}
                                        {product.name === 'Event Sponsoring' && 'Sponsor events and get maximum visibility with our comprehensive event sponsoring solutions.'}
                                        {product.name === 'Digital Advertising' && 'Comprehensive digital advertising campaigns across multiple platforms and channels.'}
                                        {product.name === 'Facebook' && 'Boost your Facebook presence with real followers, likes, and engagement from active users.'}
                                        {product.name === 'Instagram' && 'Grow your Instagram account with authentic followers and increased engagement rates.'}
                                        {product.name === 'TikTok' && 'Increase your TikTok visibility with views, followers, and viral content promotion.'}
                                        {product.name === 'Social Media' && 'Premium social media accounts with established followers and engagement history.'}
                                        {product.name === 'Email' && 'Professional email accounts with custom domains and advanced security features.'}
                                        {product.name === 'Streaming' && 'High-quality streaming accounts for Netflix, Spotify, and other premium platforms.'}
                                        {product.name === 'Items' && 'Rare and valuable gaming items for popular games and platforms.'}
                                        {product.name === 'Accounts' && 'High-level gaming accounts with progress, achievements, and premium features.'}
                                        {product.name === 'Gems & Coins' && 'In-game currency and premium resources for mobile and PC games.'}
                                        {product.name === 'Portfolio' && 'Professional portfolio websites showcasing your work and skills.'}
                                        {product.name === 'E-commerce' && 'Full-featured online stores with payment processing and inventory management.'}
                                        {product.name === 'Vitrine' && 'Beautiful showcase websites for businesses and personal branding.'}
                                        {product.name === 'Top-up' && 'Instant top-up services for mobile credit, gaming wallets, and digital platforms.'}
                                        {product.name === 'Gift Cards' && 'Digital gift cards for popular stores, gaming platforms, and services.'}
                                        {product.name === 'Transfers' && 'Secure money transfers with competitive rates and fast processing.'}
                                        {product.name === 'Data Packages' && 'Affordable mobile data packages for all major carriers and countries.'}
                                        {product.name === 'eSIM' && 'Digital SIM cards for international travel and local connectivity.'}
                                        {product.name === 'Local Offers' && 'Special local mobile internet deals and promotional packages.'}
                                    </p>
                                    <div className="flex justify-between items-center flex-wrap gap-2">
                                        <span className="text-xs sm:text-sm text-white/60">Click here </span>
                                        <button className="bg-white/20 hover:bg-white/30 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300">
                                            Order
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Categories;