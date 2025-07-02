import React from 'react';

// Portfolio Card Component
const PortfolioCard = ({ icon, title, description, stats, gradientFrom, gradientTo, delay = 0 }) => {
    return (
        <div 
            className={`bg-gradient-to-br ${gradientFrom} ${gradientTo} p-8 sm:p-10 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 h-full backdrop-blur-sm border border-white/20 animate-[fadeInUp_0.6s_ease-out]`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="mb-6 sm:mb-8">
                {icon}
            </div>
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl mb-4 sm:mb-6">
                {title}
            </h3>
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8">
                {description}
            </p>
            
            {/* Stats Section */}
            <div className="space-y-3 sm:space-y-4">
                {stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-white/80 text-sm sm:text-base md:text-lg">{stat.label}</span>
                        <span className="text-white font-bold text-lg sm:text-xl md:text-2xl">{stat.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Portfolio() {
    const portfolioItems = [
        {
            id: 1,
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
            ),
            title: "Social Media Growth",
            description: "Helped businesses and influencers grow their social media presence across Instagram, Facebook, and TikTok with authentic, engaged followers and strategic content optimization.",
            gradientFrom: "from-pink-500/90",
            gradientTo: "to-rose-500/90",
            stats: [
                { label: "Total Followers Delivered", value: "500K+" },
                { label: "Happy Clients", value: "1,200+" },
                { label: "Platforms Covered", value: "5+" },
                { label: "Average Growth Rate", value: "300%" }
            ]
        },
        {
            id: 2,
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
            ),
            title: "Web Development",
            description: "Created modern, responsive websites and web applications for businesses of all sizes. From e-commerce platforms to corporate websites, delivering pixel-perfect designs with optimal performance.",
            gradientFrom: "from-blue-500/90",
            gradientTo: "to-cyan-500/90",
            stats: [
                { label: "Websites Built", value: "150+" },
                { label: "Technologies Used", value: "25+" },
                { label: "Client Satisfaction", value: "98%" },
                { label: "Average Load Time", value: "<2s" }
            ]
        },
        {
            id: 3,
            icon: (
                <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v12a1 1 0 001 1h8a1 1 0 001-1V7M9 7h6M9 11h6m-6 4h6"></path>
                    <rect x="6" y="4" width="12" height="16" rx="1" fill="none"></rect>
                    <circle cx="12" cy="18" r="1"></circle>
                </svg>
            ),
            title: "Gaming Services",
            description: "Provided premium gaming accounts, in-game currency top-ups, and exclusive gaming services across popular platforms. Helping gamers level up their experience with secure, instant delivery.",
            gradientFrom: "from-purple-500/90",
            gradientTo: "to-indigo-500/90",
            stats: [
                { label: "Games Supported", value: "50+" },
                { label: "Accounts Delivered", value: "2,500+" },
                { label: "Currency Exchanged", value: "$100K+" },
                { label: "Delivery Success Rate", value: "99.9%" }
            ]
        }
    ];

    return (
        <div id='portfolio' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
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
                    <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-[fadeInUp_0.6s_ease-out]">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                My Portfolio
                            </span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-4xl mx-auto px-2">
                            Showcasing <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 bg-clip-text text-transparent">Ahyem Boubaker's</span> expertise across digital services.
                            <br className="hidden sm:block" />
                            Real results, satisfied clients, and proven success stories.
                        </p>
                    </div>

                    {/* Portfolio Grid - 3 Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
                        {portfolioItems.map((item, index) => (
                            <PortfolioCard
                                key={item.id}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                stats={item.stats}
                                gradientFrom={item.gradientFrom}
                                gradientTo={item.gradientTo}
                                delay={index * 0.2}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}