import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/aboutSection'; 
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Portfolio from '../components/Portfolio';
import BrandSection from '../components/BrandSection';
const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <HeroSection />

            <AboutSection />

            <ServicesSection />

            <WhyChooseUs />

            <Portfolio />

             <BrandSection />
            {/* Section Below Hero */}
            <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-gray-100">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Welcome to the Next Section
                </h2>
                <p className="text-gray-600 max-w-2xl text-center">
                This section is revealed when you scroll down. You can add more
                content here like services, features, or anything else.
                </p>
            </section>
        </div>
        
    );
};

export default Home;