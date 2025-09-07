import React from 'react';
// Importar iconos de MUI
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PublicIcon from '@mui/icons-material/Public';
import CookieIcon from '@mui/icons-material/Cookie';
import MovieIcon from '@mui/icons-material/Movie';
import FavoriteIcon from '@mui/icons-material/Favorite';
// Importar la imagen de perfil
import ProfilePictureAboutMe from '../assets/images/ProfilePictureAboutMe.svg';

const iconStyle = {
    fontSize: 28,
    color: '#A569E5', // Morado principal
};

const SobreMi = () => {
    return (
        <section
            id="sobre-mi"
            className="relative w-full flex flex-col items-center justify-start min-h-screen px-4 md:px-6 lg:px-8 py-16 md:py-20 overflow-hidden pt-16 md:pt-20"
            style={{ backgroundColor: '#F9F4FE' }}
        >
            {/* Cita y título centrados arriba */}
            <div className="w-full flex flex-col items-center mb-6 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#55408B' }}>
          Sobre Mí
                </h2>
                <p className="text-center text-sm md:text-base lg:text-lg max-w-2xl md:max-w-3xl mx-auto mb-1 px-4" style={{ color: '#55408B' }}>
          "Cuando ya no somos capaces de cambiar una situación, nos encontramos ante el desafío de cambiarnos a nosotros mismos."
                </p>
                <span className="block text-center text-center text-sm md:text-base lg:text-lg font-bold mb-2" style={{ color: '#55408B' }}>
          - Viktor Frankl
                </span>
            </div>

            <div className="max-w-7xl w-full flex flex-col md:flex-row lg:flex-row items-center justify-center gap-8 md:gap-12 px-4">
                {/* Imagen - Primera en móvil y tablet vertical, izquierda en tablet horizontal y desktop */}
                <div className="relative flex-shrink-0 flex items-center justify-center order-1 md:order-1 lg:order-1">
                    <div className="relative z-0 w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] flex items-center justify-center">
                        <img
                            src={ProfilePictureAboutMe}
                            alt="Sara Elizabeth Plaza"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Texto - Segunda en móvil y tablet vertical, derecha en tablet horizontal y desktop */}
                <div className="flex-1 flex flex-col items-start justify-center text-left order-2 md:order-2 lg:order-2 max-w-2xl lg:max-w-none">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-left" style={{ color: '#55408B' }}>
            ¡Hola! Soy <span style={{ color: '#A569E5' }}>Sara Elizabeth Plaza.</span>
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg mb-2" style={{ color: '#11051D' }}>
            Soy psicóloga egresada de la Universidad Pontificia Bolivariana, con un enfoque humanista centrado en la persona. Creo en acompañar desde la empatía, el respeto y la comprensión, reconociendo a cada individuo como único.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-2" style={{ color: '#11051D' }}>
            Estoy convencida de que los momentos difíciles son oportunidades para crecer y acercarnos a nuestra mejor versión.
                    </p>
                    <p className="text-sm md:text-base lg:text-lg mb-4" style={{ color: '#11051D' }}>
            Mi pasión es acompañarte en tu camino hacia el bienestar emocional y mental, porque lo mereces. Juntos podemos descubrir tu potencial, superar desafíos y construir una vida más plena.
                    </p>

                    <div className="mb-4">
                        <span className="font-regular text-sm md:text-base" style={{ color: '#11051D' }}>Algunos de mis intereses son:</span>
                        <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-2 mt-2 text-sm md:text-base">
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><MenuBookIcon style={iconStyle}/> Lectura</li>
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><CalendarTodayIcon style={iconStyle}/> Días lluviosos</li>
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><PublicIcon style={iconStyle}/> Culturas</li>
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><CookieIcon style={iconStyle}/> Chocolate</li>
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><MovieIcon style={iconStyle}/> Series</li>
                            <li className="flex items-center gap-2" style={{ color: '#55408B' }}><FavoriteIcon style={iconStyle}/> Acompañarte</li>
                        </ul>
                    </div>

                    <p className="text-sm md:text-base lg:text-lg mt-2" style={{ color: '#11051D' }}>
            ¿Te animas a comenzar este viaje de autodescubrimiento?
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
