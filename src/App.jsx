
import './App.css';
import Navbar from './components/Navbar';
import NavbarMobile from './components/mobile/NavbarMobile';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Trayectoria from './components/Trayectoria';
import TrayectoriaMobile from './components/mobile/TrayectoriaMobile';
import Servicios from './components/Servicios';
import ServiciosMobile from './components/mobile/ServiciosMobile';
import Paquetes from './components/Paquetes';
import PaquetesMobile from './components/mobile/PaquetesMobile';
import Contacto from './components/Contacto';
import ContactoMobile from './components/mobile/ContactoMobile';
import Instagram from './components/Instagram';
import Footer from './components/Footer';
import BGPC from './assets/images/BGPC.svg';

function App() {
    return (
        <div className="relative">
            <div id="inicio" className="relative">
                {/* BGPC para tablet horizontal y desktop (md y superior) */}
                <img
                    src={BGPC}
                    alt="fondo decorativo"
                    className="hidden md:block absolute top-0 left-0 w-full h-full object-cover object-center z-[-1] pointer-events-none"
                    aria-hidden="true"
                    width="1920"
                    height="1080"
                />
                <div className="relative z-10">
                    {/* Navbar móvil - visible solo en móvil (hasta lg) */}
                    <div className="lg:hidden">
                        <NavbarMobile />
                    </div>
                    {/* Navbar desktop y tablet - visible en lg y superior */}
                    <div className="hidden lg:block">
                        <Navbar />
                    </div>
                    <Hero />
                </div>
            </div>
            <SobreMi />
            {/* Trayectoria móvil - visible solo en móvil (hasta lg) */}
            <div className="lg:hidden">
                <TrayectoriaMobile />
            </div>
            {/* Trayectoria desktop y tablet - visible en lg y superior */}
            <div className="hidden lg:block">
                <Trayectoria />
            </div>
            {/* Servicios móvil - visible solo en móvil (hasta lg) */}
            <div className="lg:hidden">
                <ServiciosMobile />
            </div>
            {/* Servicios desktop y tablet - visible en lg y superior */}
            <div className="hidden lg:block">
                <Servicios />
            </div>
            {/* Paquetes móvil - visible solo en móvil (hasta lg) */}
            <div className="lg:hidden">
                <PaquetesMobile />
            </div>
            {/* Paquetes desktop y tablet - visible en lg y superior */}
            <div className="hidden lg:block">
                <Paquetes />
            </div>
            {/* Contacto móvil - visible solo en móvil (hasta lg) */}
            <div className="lg:hidden">
                <ContactoMobile />
            </div>
            {/* Contacto desktop y tablet - visible en lg y superior */}
            <div className="hidden lg:block">
                <Contacto />
            </div>
            <Instagram />
            <Footer />
        </div>
    );
}

export default App;
