import React from 'react';

// Feature Card Component
const FeatureCard = ({ icon, title, description, gradientFrom, gradientTo, delay = 0 }) => {
    return (
        <div 
            className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-3 sm:p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 h-full backdrop-blur-sm border border-white/20 animate-[fadeInUp_0.6s_ease-out] flex-shrink-0`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="mb-2 sm:mb-3 flex justify-center">
                {icon}
            </div>
            <h3 className="text-white font-bold text-xs sm:text-sm md:text-base mb-2 text-center">
                {title}
            </h3>
            <p className="text-white/90 text-xs sm:text-sm leading-relaxed text-center">
                {description}
            </p>
        </div>
    );
};

export default function WhyChooseMe() {
    const specialties = [
        {
            id: 1,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
            ),
            title: "Lightning Fast Delivery",
            description: "Get your services delivered within hours, not days. Our streamlined processes ensure rapid turnaround times without compromising quality.",
            gradientFrom: "from-yellow-500/90",
            gradientTo: "to-orange-500/90"
        },
        {
            id: 2,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
            ),
            title: "100% Secure & Reliable",
            description: "Your data and transactions are protected with bank-level security. We guarantee safe, encrypted, and reliable service delivery every time.",
            gradientFrom: "from-green-500/90",
            gradientTo: "to-emerald-500/90"
        },
        {
            id: 3,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
            ),
            title: "Competitive Pricing",
            description: "Premium services at unbeatable prices. We offer transparent pricing with no hidden fees, ensuring maximum value for your investment.",
            gradientFrom: "from-blue-500/90",
            gradientTo: "to-cyan-500/90"
        },
        {
            id: 4,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25V6m0 12v3.75M2.25 12H6m12 0h3.75M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25z"></path>
                </svg>
            ),
            title: "24/7 Expert Support",
            description: "Our dedicated team is available round the clock to assist you. Get instant help and professional guidance whenever you need it.",
            gradientFrom: "from-purple-500/90",
            gradientTo: "to-indigo-500/90"
        },
        {
            id: 5,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
            ),
            title: "Premium Quality",
            description: "We deliver only the highest quality services that exceed expectations. Every project is crafted with attention to detail and excellence.",
            gradientFrom: "from-pink-500/90",
            gradientTo: "to-rose-500/90"
        },
        {
            id: 6,
            icon: (
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
            ),
            title: "Proven Track Record",
            description: "Join thousands of satisfied clients who trust our expertise. With years of experience and countless successful projects, results speak for themselves.",
            gradientFrom: "from-teal-500/90",
            gradientTo: "to-blue-500/90"
        }
    ];

    return (
        <div id='why-choose' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '2s' }}></div>
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    {/* Header Section */}
                    <div className="text-center mb-8 sm:mb-12 animate-[fadeInUp_0.6s_ease-out]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                Why Choose Me?
                            </span>
                        </h1>
                        
                        <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 leading-relaxed max-w-3xl mx-auto px-2">
                            Experience the difference with <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 bg-clip-text text-transparent">Ayhem Boubaker's</span> professional digital services.
                            <br className="hidden sm:block" />
                            Here's what sets me apart from the competition.
                        </p>
                    </div>

                    {/* Specialties Single Line with Horizontal Scroll */}
                    <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gradient-to-r scrollbar-thumb-from-purple-500 scrollbar-thumb-to-pink-500 hover:scrollbar-thumb-from-purple-400 hover:scrollbar-thumb-to-pink-400" 
                         style={{
                           scrollbarWidth: 'thin',
                           scrollbarColor: '#a855f7 transparent'
                         }}>
                        <style jsx>{`
                          div::-webkit-scrollbar {
                            height: 8px;
                          }
                          div::-webkit-scrollbar-track {
                            background: rgba(255, 255, 255, 0.1);
                            border-radius: 10px;
                          }
                          div::-webkit-scrollbar-thumb {
                            background: linear-gradient(90deg, #a855f7, #ec4899);
                            border-radius: 10px;
                            border: 1px solid rgba(255, 255, 255, 0.2);
                          }
                          div::-webkit-scrollbar-thumb:hover {
                            background: linear-gradient(90deg, #9333ea, #db2777);
                          }
                        `}</style>
                        <div className="flex space-x-4 sm:space-x-6 min-w-max px-2">
                            {specialties.map((specialty, index) => (
                                <div key={specialty.id} className="w-48 sm:w-56 md:w-64">
                                    <FeatureCard
                                        icon={specialty.icon}
                                        title={specialty.title}
                                        description={specialty.description}
                                        gradientFrom={specialty.gradientFrom}
                                        gradientTo={specialty.gradientTo}
                                        delay={index * 0.1}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll indicator for all devices */}
                    <div className="flex justify-center items-center mt-6">
                        <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                            </div>
                            <svg className="w-4 h-4 text-white/80 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                            <p className="text-white/80 text-xs font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Swipe to explore
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}