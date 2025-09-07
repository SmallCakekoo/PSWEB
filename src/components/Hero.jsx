import React from 'react';
import '../App.css';
import HeroImage from '../assets/images/HeroImage.svg';
import HeroMobile from './mobile/HeroMobile';

const Hero = () => {
    return (
        <>
            {/* Mobile version */}
            <div className="md:hidden">
                <HeroMobile />
            </div>
      
            {/* Tablet version - visible solo en tablet (md a lg) */}
            <section className="hidden md:flex lg:hidden relative flex-col md:flex-row items-center justify-between min-h-screen px-4 md:px-6 lg:px-8 py-12 md:py-16 pt-20 md:pt-24">
                <div className="relative w-full md:w-5/12 mb-6 md:mb-0 text-center md:text-left z-10 md:pr-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#55408B] mb-4 md:mb-6 text-center md:text-left leading-tight">
            El primer paso es<br />
            reconocer lo que quieres cambiar.
                    </h1>
          
                    <p className="text-gray-700 mb-6 md:mb-8 text-center md:text-left text-base md:text-lg lg:text-xl leading-relaxed">
            Acompañamiento psicológico con empatía, escucha y respeto.<br />
            Para niñas, adolescentes, adultos y adultos mayores.
                    </p>
                    <a href="#contacto" className="btn btn-primary hover:btn-secondary text-white !rounded-2xl shadow-md !py-2 md:!py-3 px-4 md:px-6 inline-block text-sm md:text-base">
            Agenda tu consulta <span className="ml-2">▼</span>
                    </a>
                </div>

                <div className="relative flex justify-center md:justify-end items-center z-10 w-full md:w-7/12 md:pl-4">
                    <img 
                        src={HeroImage} 
                        alt="Ilustración psicología" 
                        className="w-[350px] md:w-[500px] lg:w-[500px] max-w-full h-auto" 
                        width="500"
                        height="375"
                        fetchPriority="high"
                    />
                </div>
            </section>
      
            {/* Desktop version - visible solo en lg y superior */}
            <section className="hidden lg:flex relative flex-col md:flex-row items-center justify-between min-h-screen px-8 py-20 mx-50 overflow-hidden pt-24">
                <div className="relative max-w-xl mb-8 md:mb-0 text-left z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#55408B] mb-8 text-left">
            El primer paso es<br />
            reconocer lo que quieres cambiar.
                    </h1>
          
                    <p className="text-gray-700 mb-10 text-left">
            Acompañamiento psicológico con empatía, escucha y respeto.<br />
            Para niñas, adolescentes, adultos y adultos mayores.
                    </p>
                    <a href="#contacto" className="btn btn-primary hover:btn-secondary text-white !rounded-2xl shadow-md !py-3 px-6 inline-block">
            Agenda tu consulta <span className="ml-2">▼</span>
                    </a>
                </div>

                <div className="relative flex justify-center items-center z-10 mb-[-50px] mr-[30px]">
                    <img 
                        src={HeroImage} 
                        alt="Ilustración psicología" 
                        className="w-[900px] md:w-[670px]" 
                        width="670"
                        height="500"
                        fetchPriority="high"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;