import React from 'react'
import '../App.css'
import HeroImage from '../assets/images/HeroImage.svg'
import HeroMobile from './mobile/HeroMobile'

const Hero = () => {
  return (
    <>
      {/* Mobile version */}
      <div className="md:hidden">
        <HeroMobile />
      </div>
      
      {/* Desktop version */}
      <section className="hidden md:flex relative flex-col md:flex-row items-center justify-between min-h-screen px-8 py-20 mx-50 overflow-hidden pt-24">
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
  )
}

export default Hero