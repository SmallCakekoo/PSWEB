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
      className="relative w-full flex flex-col items-center justify-start min-h-screen px-8 py-20 overflow-hidden pt-32"
      style={{ backgroundColor: '#F9F4FE' }}
    >
      {/* Cita y título centrados arriba */}
      <div className="w-full flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold mb-4 text-center" style={{ color: '#55408B' }}>
          Sobre Mí
        </h2>
        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-1" style={{ color: '#55408B' }}>
          "Cuando ya no somos capaces de cambiar una situación, nos encontramos ante el desafío de cambiarnos a nosotros mismos."
        </p>
        <span className="block text-center text-base md:text-lg font-bold mb-2" style={{ color: '#55408B' }}>
          - Viktor Frankl
        </span>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Imagen */}
        <div className="relative flex-shrink-0 flex items-center justify-center">
          <div className="relative z-0 w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
            <img
              src={ProfilePictureAboutMe}
              alt="Sara Elizabeth Plaza"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-left" style={{ color: '#55408B' }}>
            ¡Hola! Soy <span style={{ color: '#A569E5' }}>Sara Elizabeth Plaza.</span>
          </h3>
          <p className="text-base md:text-lg mb-2" style={{ color: '#11051D' }}>
            Soy psicóloga egresada de la Universidad Pontificia Bolivariana, con un enfoque humanista centrado en la persona. Creo en acompañar desde la empatía, el respeto y la comprensión, reconociendo a cada individuo como único.
          </p>
          <p className="text-base md:text-lg mb-2" style={{ color: '#11051D' }}>
            Estoy convencida de que los momentos difíciles son oportunidades para crecer y acercarnos a nuestra mejor versión.
          </p>
          <p className="text-base md:text-lg mb-4" style={{ color: '#11051D' }}>
            Mi pasión es acompañarte en tu camino hacia el bienestar emocional y mental, porque lo mereces. Juntos podemos descubrir tu potencial, superar desafíos y construir una vida más plena.
          </p>

          <div className="mb-4">
            <span className="font-regular" style={{ color: '#11051D' }}>Algunos de mis intereses son:</span>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2 mt-2 text-base">
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><MenuBookIcon style={iconStyle}/> Lectura</li>
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><CalendarTodayIcon style={iconStyle}/> Días lluviosos</li>
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><PublicIcon style={iconStyle}/> Culturas</li>
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><CookieIcon style={iconStyle}/> Chocolate</li>
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><MovieIcon style={iconStyle}/> Series</li>
              <li className="flex items-center gap-2" style={{ color: '#55408B' }}><FavoriteIcon style={iconStyle}/> Acompañarte</li>
            </ul>
          </div>

          <p className="text-base md:text-lg mt-2" style={{ color: '#11051D' }}>
            ¿Te animas a comenzar este viaje de autodescubrimiento?
          </p>
        </div>
      </div>
    </section>
  );
};

export default SobreMi;
