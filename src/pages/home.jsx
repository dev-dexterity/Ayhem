import React from 'react';
import Ahyem from '../assets/ayhem.png'

export default function HomePage() {
    return (
        <div id='about' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
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

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Content */}
                        <div className="animate-[fadeInUp_0.6s_ease-out] text-center lg:text-left">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-8 lg:mt-20 mb-6">
                                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                                    About me
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 leading-relaxed px-2 lg:px-0">
                                My name is <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-400 bg-clip-text text-transparent">Ahyem Boubaker</span> and I provide all-in-one Digital Hub for Growth & Gaming.
                                <br className="hidden sm:block" />
                                Get sponsoring, followers, gaming top-ups, websites, USDs, and mobile internet—fast, secure, and reliable.
                            </p>
                        </div>

                        {/* Right Image - Now visible on all screen sizes */}
                        <div className="relative animate-[fadeInUp_0.8s_ease-out] flex justify-center items-center w-full">
                            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
                                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                    <div className="relative rounded-xl p-1 md:mb-5 md:mt-0">
                                        <img
                                            src={Ahyem}
                                            alt="Ahyem Boubaker"
                                            className="w-full h-auto object-cover rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}