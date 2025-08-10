import React, { useState, useEffect } from "react";
import Logo from "../assets/images/Logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[9999] ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="relative flex flex-col md:flex-row items-center justify-between px-8 py-4 mx-50 overflow-hidden">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src={Logo} 
            alt="Logo Sara Plaza" 
            className="h-16" 
            width="64"
            height="64"
          />
        </div>
        {/* Botón hamburguesa DaisyUI */}
        <div className="md:hidden">
          <button
            className="btn btn-ghost btn-circle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={isScrolled ? "#A569E5" : "#55408B"}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Enlaces */}
        <ul
          className={`
            menu menu-vertical md:menu-horizontal bg-white md:bg-transparent rounded-box md:rounded-none shadow md:shadow-none
            absolute md:static top-16 left-4 right-4 md:left-auto md:right-auto md:w-auto transition-all duration-300
            ${menuOpen ? "flex" : "hidden"} md:flex
            gap-0 md:gap-8 font-medium text-sm md:text-base
            ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}
          `}
        >
          <li>
            <a href="#inicio" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Inicio</a>
          </li>
          <li>
            <a href="#sobre-mi" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Sobre Mí</a>
          </li>
          <li>
            <a href="#trayectoria" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Mi Trayectoria</a>
          </li>
          <li>
            <a href="#servicios" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Servicios</a>
          </li>
          <li>
            <a href="#paquetes" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Paquetes</a>
          </li>
          <li>
            <a href="#contacto" className={`hover:text-[#A569E5] transition-colors ${isScrolled ? 'text-[#2D1A47]' : 'text-[#55408B]'}`} onClick={() => setMenuOpen(false)}>Contacto</a>
          </li>
        </ul>
        {/* Fondo oscuro al abrir menú en móvil */}
        {menuOpen && (
          <button
            className="fixed inset-0 bg-black bg-opacity-10 z-10 md:hidden cursor-pointer w-full h-full border-none"
            onClick={() => setMenuOpen(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setMenuOpen(false);
              }
            }}
            aria-label="Cerrar menú"
          ></button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;