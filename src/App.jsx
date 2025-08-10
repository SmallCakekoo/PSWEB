
import './App.css'
import Navbar from './components/Navbar'
import NavbarMobile from './components/mobile/NavbarMobile'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Trayectoria from './components/Trayectoria'
import TrayectoriaMobile from './components/mobile/TrayectoriaMobile'
import Servicios from './components/Servicios'
import ServiciosMobile from './components/mobile/ServiciosMobile'
import Paquetes from './components/Paquetes'
import PaquetesMobile from './components/mobile/PaquetesMobile'
import Contacto from './components/Contacto'
import ContactoMobile from './components/mobile/ContactoMobile'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import BGPC from './assets/images/BGPC.svg'

function App() {
  return (
    <div className="relative">
      <div id="inicio" className="relative">
        {/* BGPC solo para desktop */}
        <img
          src={BGPC}
          alt="fondo decorativo"
          className="hidden md:block absolute top-0 left-0 w-full h-auto z-[-1] pointer-events-none"
          aria-hidden="true"
          width="1920"
          height="1080"
        />
        <div className="relative z-10">
          {/* Navbar móvil - visible solo en móvil */}
          <div className="md:hidden">
            <NavbarMobile />
          </div>
          {/* Navbar desktop - visible solo en desktop */}
          <div className="hidden md:block">
            <Navbar />
          </div>
          <Hero />
        </div>
      </div>
      <SobreMi />
      {/* Trayectoria móvil - visible solo en móvil */}
      <div className="md:hidden">
        <TrayectoriaMobile />
      </div>
      {/* Trayectoria desktop - visible solo en desktop */}
      <div className="hidden md:block">
        <Trayectoria />
      </div>
      {/* Servicios móvil - visible solo en móvil */}
      <div className="md:hidden">
        <ServiciosMobile />
      </div>
      {/* Servicios desktop - visible solo en desktop */}
      <div className="hidden md:block">
      <Servicios />
      </div>
      {/* Paquetes móvil - visible solo en móvil */}
      <div className="md:hidden">
        <PaquetesMobile />
      </div>
      {/* Paquetes desktop - visible solo en desktop */}
      <div className="hidden md:block">
      <Paquetes />
      </div>
      {/* Contacto móvil - visible solo en móvil */}
      <div className="md:hidden">
        <ContactoMobile />
      </div>
      {/* Contacto desktop - visible solo en desktop */}
      <div className="hidden md:block">
      <Contacto />
      </div>
      <Instagram />
      <Footer />
    </div>
  )
}

export default App
