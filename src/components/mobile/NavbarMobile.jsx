import React, { useState, useEffect } from 'react';
import Logo from '../../assets/images/Logo.svg';

const NavbarMobile = () => {
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

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <>
            <nav 
                className={`fixed top-0 left-0 right-0 transition-all duration-300 z-[9999] ${
                    isScrolled || menuOpen
                        ? 'bg-white/95 backdrop-blur-md shadow-lg'
                        : 'bg-transparent'
                }`}
                role="navigation"
                aria-label="Menú principal"
            >
                <div className="relative flex items-center justify-between px-4 md:px-8 py-4 md:py-6 w-full">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <a href="#inicio" aria-label="Ir al inicio">
                            <img 
                                src={Logo} 
                                alt="Logo Sara Plaza" 
                                className="h-12 md:h-16" 
                                width="64"
                                height="64"
                            />
                        </a>
                    </div>

                    {/* Botón hamburguesa solo en móvil */}
                    <div className="md:hidden">
                        <button
                            className="btn btn-ghost btn-circle z-50 relative"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke={isScrolled || menuOpen ? '#A569E5' : '#55408B'}
                                aria-hidden="true"
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

                    {/* Enlaces de navegación */}
                    <ul
                        id="mobile-menu"
                        className={`
              fixed md:static top-16 right-4 left-auto md:left-auto md:right-auto md:w-auto
              max-w-xs md:max-w-none
              bg-white md:bg-transparent rounded-lg md:rounded-none shadow-lg md:shadow-none
              flex flex-col md:flex-row items-end md:items-center justify-end md:justify-end
              gap-2 md:gap-8 p-4 md:p-0
              font-medium text-base
              transition-all duration-300 ease-in-out
              ${menuOpen ? 'translate-x-0 opacity-100 z-50' : 'translate-x-full opacity-0'} 
              md:translate-x-0 md:opacity-100 md:z-auto
              ${isScrolled || menuOpen ? 'text-[#2D1A47]' : 'text-[#55408B]'}
            `}
                        role="menubar"
                        aria-hidden={!menuOpen}
                    >
                        {[
                            { href: '#inicio', label: 'Inicio' },
                            { href: '#sobre-mi', label: 'Sobre Mí' },
                            { href: '#trayectoria-mobile', label: 'Mi Trayectoria' },
                            { href: '#servicios-mobile', label: 'Servicios' },
                            { href: '#paquetes-mobile', label: 'Paquetes' },
                            { href: '#contacto-mobile', label: 'Contacto' },
                        ].map(({ href, label }) => (
                            <li key={href} role="none">
                                <a
                                    href={href}
                                    className={`hover:text-[#A569E5] transition-colors py-1 md:py-0 w-full ${
                                        isScrolled || menuOpen ? 'text-[#2D1A47]' : 'text-[#55408B]'
                                    }`}
                                    onClick={() => setMenuOpen(false)}
                                    role="menuitem"
                                    tabIndex={menuOpen ? 0 : -1}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Fondo con desenfoque sutil al abrir menú en móvil */}
            {menuOpen && (
                <div
                    className="fixed inset-0 backdrop-blur-sm bg-white/20 z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
};

export default NavbarMobile;
