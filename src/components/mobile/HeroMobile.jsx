import React from 'react'
import '../../App.css'
import HeroImageMobile from '../../assets/images/Mobile/HeroImage.svg'

const HeroMobile = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 pt-16 overflow-hidden pt-24">
      <div className="relative max-w-sm text-center z-10 overflow-hidden">
        <h1 className="text-3xl font-bold text-[#55408B] mb-6 text-center">
          El primer paso es<br />
          reconocer lo que quieres cambiar.
        </h1>
        
        <p className="text-gray-700 mb-8 text-center text-sm">
          Acompañamiento psicológico con empatía, escucha y respeto.<br />
          Para niñas, adolescentes, adultos y adultos mayores.
        </p>
        <a href="#contacto-mobile" className="btn btn-primary hover:btn-secondary text-white !rounded-2xl shadow-md !py-3 px-6 inline-block">
          Agenda tu consulta <span className="ml-2">▼</span>
        </a>
      </div>

      <div className="relative flex justify-center items-center z-10 mt-8 -mx-4 pt-20 -mt-4">
        <img
          src={HeroImageMobile}
          alt="Ilustración psicología móvil"
          className="w-screen max-w-none"
          width="400"
          height="300"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

export default HeroMobile
