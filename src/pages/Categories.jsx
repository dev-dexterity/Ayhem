import React from 'react';
import { useNavigate } from 'react-router-dom';

// Mock FeatureCard component since it's not available in this environment
const FeatureCard = ({ icon, title, gradientFrom, gradientTo, onClick }) => {
    return (
        <div
            className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-4 sm:p-5 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 h-full flex flex-col items-center justify-center text-center`}
            onClick={onClick}
        >
            <div className="mb-3 sm:mb-4">
                {icon}
            </div>
            <h3 className="text-white font-bold text-base sm:text-lg">{title}</h3>
        </div>
    );
};

export default function Categories() {
    // Use React Router DOM's useNavigate hook
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
            ),
            title: "Sponsoring",
            description: "Boost your business visibility with our comprehensive sponsoring packages. Get featured placement, premium advertising, and targeted marketing campaigns.",
            gradientFrom: "from-yellow-500",
            gradientTo: "to-orange-500",
            route: "/sponsoring"
        },
        {
            id: 2,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            title: "Followers",
            description: "Grow your social media presence on Instagram, Facebook, and TikTok. Get real, active followers to boost your engagement and credibility.",
            gradientFrom: "from-pink-500",
            gradientTo: "to-rose-500",
            route: "/followers"
        },
        {
            id: 3,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v12a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6M9 11h6m-6 4h6"></path>
                    <rect x="6" y="4" width="12" height="16" rx="1" fill="none"></rect>
                    <circle cx="12" cy="18" r="1"></circle>
                </svg>
            ),
            title: "Gaming",
            description: "Level up your gaming experience with premium game accounts, in-game currency top-ups, and exclusive gaming services for all popular platforms.",
            gradientFrom: "from-purple-500",
            gradientTo: "to-indigo-500",
            route: "/gaming"
        },
        {
            id: 4,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
            ),
            title: "Accounts",
            description: "Level up your gaming experience with premium game accounts, in-game currency top-ups, and exclusive gaming services for all popular platforms.",
            gradientFrom: "from-purple-500",
            gradientTo: "to-indigo-500",
            route: "/accounts"
        },
        {
            id: 5,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
            ),
            title: "Web Development",
            description: "Professional web development services including custom websites, e-commerce solutions, responsive designs, and modern web applications.",
            gradientFrom: "from-blue-500",
            gradientTo: "to-cyan-500",
            route: "/web-development"
        },
        {
            id: 6,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "USDs",
            description: "Secure digital currency exchange services. Buy, sell, and trade USD digital currencies with competitive rates and instant transactions.",
            gradientFrom: "from-green-500",
            gradientTo: "to-emerald-500",
            route: "/usds"
        },
        {
            id: 7,
            icon: (
                <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                </svg>
            ),
            title: "Mobile Internet",
            description: "Stay connected with our mobile internet packages. Affordable data plans, international roaming, and high-speed connectivity solutions.",
            gradientFrom: "from-teal-500",
            gradientTo: "to-blue-500",
            route: "/mobile-internet"
        }
    ];

    const handleCardClick = (route) => {
        navigate(route);
    };

    return (
        <div id='home' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            {/* Header Text with Top Margin for Navbar */}
            <section className="pt-14 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-4 sm:pb-6 md:pb-8">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
                    <h1 className="mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-10 leading-tight">
                        <span className="text-3xl md:text-5xl bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent block">
                            Welcome by Ayhem Boubaker
                        </span>
                        <span className="block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mt-1 sm:mt-2 md:mt-3 font-medium text-white/90">
                            Choose from our comprehensive range of digital services
                        </span>
                    </h1>
                </div>
            </section>

            {/* Categories Section - Fully Responsive Grid Layout */}
            <section className="py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16 bg-white/5 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                    {/* Responsive Grid: 2x3 on mobile, 1 row of 6 on desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
                        {categories.map((category, index) => (
                            <div
                                key={category.id}
                                className="animate-[fadeInUp_0.6s_ease-out] w-full"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <FeatureCard
                                    icon={category.icon}
                                    title={category.title}
                                    gradientFrom={category.gradientFrom}
                                    gradientTo={category.gradientTo}
                                    onClick={() => handleCardClick(category.route)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}