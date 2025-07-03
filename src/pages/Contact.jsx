import React, { useState, useEffect } from 'react';

// Contact Card Component
const ContactCard = ({ icon, title, value, subtitle, delay = 0 }) => {
    return (
        <div 
            className={`bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 sm:p-8 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 animate-[fadeInUp_0.6s_ease-out]`}
            style={{ animationDelay: `${delay}s` }}
        >
            <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    {icon}
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">{title}</h3>
                    {subtitle && <p className="text-white/60 text-sm">{subtitle}</p>}
                </div>
            </div>
            <p className="text-white/90 text-base sm:text-lg font-medium">{value}</p>
        </div>
    );
};

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        whatsapp: '',
        packageService: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [emailStatus, setEmailStatus] = useState({ type: '', message: '' });

    // Initialize EmailJS
    useEffect(() => {
        // Load EmailJS script
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
            // Initialize EmailJS with your public key
            window.emailjs.init("mWB88RrxkZcjxbQ3Z"); // Replace with your actual public key
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // Validate form
        if (!formData.nom || !formData.email || !formData.message) {
            setEmailStatus({
                type: 'error',
                message: 'Please fill in all required fields (Name, Email, Message)'
            });
            return;
        }

        setIsLoading(true);
        setEmailStatus({ type: '', message: '' });

        try {
            // EmailJS send function
            const result = await window.emailjs.send(
                'service_tcx7yx6',    // Replace with your EmailJS service ID
                'template_xh90xub',   // Replace with your EmailJS template ID
                {
                    from_name: formData.nom,
                    from_email: formData.email,
                    whatsapp: formData.whatsapp || 'Not provided',
                    service_package: formData.packageService || 'Not selected',
                    message: formData.message,
                    to_name: 'Ayhem Boubaker', // Your name
                }
            );

            if (result.status === 200) {
                setEmailStatus({
                    type: 'success',
                    message: 'Message sent successfully! I\'ll get back to you within 24 hours.'
                });
                
                // Reset form
                setFormData({
                    nom: '',
                    email: '',
                    whatsapp: '',
                    packageService: '',
                    message: ''
                });
            }
        } catch (error) {
            console.error('EmailJS error:', error);
            setEmailStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or contact me directly via WhatsApp.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            id: 1,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
            ),
            title: "WhatsApp",
            value: "+216 29 616 525",
            subtitle: "Quick Response"
        },
        {
            id: 2,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            ),
            title: "Email",
            value: "Contact@ayhemboubaker.com",
            subtitle: "Professional Support"
        },
        {
            id: 3,
            icon: (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
            ),
            title: "Adresse",
            value: "2096 New Market, New Road",
            subtitle: "North Carolina, USA"
        }
    ];

    return (
        <div id='contact' className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="w-full h-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '2s' }}></div>
                </div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Header Section */}
                <div className="text-center mb-12 sm:mb-16 animate-[fadeInUp_0.6s_ease-out]">
                    <p className="text-lg sm:text-xl text-purple-400 font-medium mb-4">Let's Connect</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                            Let's Work Together!
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                        Ready to transform your ideas into reality? Contact me to discuss your project and discover how we can collaborate to achieve amazing results.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8 animate-[fadeInUp_0.6s_ease-out]" style={{ animationDelay: '0.2s' }}>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                {/* Status Message */}
                                {emailStatus.message && (
                                    <div className={`p-4 rounded-lg border ${
                                        emailStatus.type === 'success' 
                                            ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                                            : 'bg-red-500/10 border-red-500/30 text-red-400'
                                    }`}>
                                        <div className="flex items-center space-x-2">
                                            {emailStatus.type === 'success' ? (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                            )}
                                            <span className="text-sm font-medium">{emailStatus.message}</span>
                                        </div>
                                    </div>
                                )}
                                {contactInfo.map((info, index) => (
                                    <ContactCard
                                        key={info.id}
                                        icon={info.icon}
                                        title={info.title}
                                        value={info.value}
                                        subtitle={info.subtitle}
                                        delay={0.3 + index * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-[fadeInUp_0.6s_ease-out]" style={{ animationDelay: '0.4s' }}>
                        <div className="bg-gradient-to-br from-white/10 to-white/5 p-8 sm:p-10 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Send me a message</h2>
                            
                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Name</label>
                                        <input
                                            type="text"
                                            name="nom"
                                            value={formData.nom}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">WhatsApp</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            value={formData.whatsapp}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                                            placeholder="+216 XX XXX XXX"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label className="block text-white/80 text-sm font-medium mb-2">Package Service</label>
                                        <select
                                            name="packageService"
                                            value={formData.packageService}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                                        >
                                            <option value="" className="bg-slate-800">Select a service</option>
                                            <option value="social-media" className="bg-slate-800">Social Media Growth</option>
                                            <option value="web-development" className="bg-slate-800">Web Development</option>
                                            <option value="gaming-services" className="bg-slate-800">Gaming Services</option>
                                            <option value="consultation" className="bg-slate-800">Consultation</option>
                                            <option value="other" className="bg-slate-800">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                                        placeholder="Describe your project or needs..."
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    disabled={isLoading}
                                    className={`w-full font-bold py-4 px-8 rounded-lg transform transition-all duration-300 shadow-lg hover:shadow-2xl ${
                                        isLoading 
                                            ? 'bg-gray-500 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 hover:scale-105'
                                    }`}
                                >
                                    <span className="flex items-center justify-center space-x-2">
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Your Message</span>
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                                </svg>
                                            </>
                                        )}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}