import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#A569E5' }}>
      {/* Contenido Principal */}
      <div className="px-8 md:px-12 lg:px-36 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Columna 1: Información de Contacto */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-3" style={{ color: '#11051D' }}>
              Dra. Sara Elizabeth Plaza Plaza
            </h3>
            <p className="mb-4 text-sm leading-relaxed" style={{ color: '#11051D' }}>
              Te acompaño con empatía y respeto en tu camino hacia el bienestar<br />
              emocional, porque creo en tu capacidad de crecer, sanar y construir.
            </p>
            
            {/* Iconos de Redes Sociales */}
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/sara.plaza2811" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-200"
                style={{ backgroundColor: '#2F144C' }}
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/psicosaraplaza/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-200"
                style={{ backgroundColor: '#2F144C' }}
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://api.whatsapp.com/send/?phone=573182333576" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-200"
                style={{ backgroundColor: '#2F144C' }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sara-elizabeth-plaza-plaza-1094a024b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-80 transition-colors duration-200"
                style={{ backgroundColor: '#2F144C' }}
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-3" style={{ color: '#11051D' }}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#sobre-mi" 
                  className="hover:text-white transition-colors duration-200 text-sm"
                  style={{ color: '#11051D' }}
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a 
                  href="#trayectoria" 
                  className="hover:text-white transition-colors duration-200 text-sm"
                  style={{ color: '#11051D' }}
                >
                  Mi Trayectoria
                </a>
              </li>
              <li>
                <a 
                  href="#servicios" 
                  className="hover:text-white transition-colors duration-200 text-sm"
                  style={{ color: '#11051D' }}
                >
                  Servicios
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="hover:text-white transition-colors duration-200 text-sm"
                  style={{ color: '#11051D' }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Ubicación */}
          <div className="text-left">
            <h3 className="text-lg font-bold mb-3" style={{ color: '#11051D' }}>
              Ubicación
            </h3>
            <p className="mb-3 text-sm" style={{ color: '#11051D' }}>
              Cl 65 #18-104, Palmira, Valle del Cauca
            </p>
            
            {/* Mapa embebido clickeable */}
            <a 
              href="https://maps.app.goo.gl/yiRQCuCwUr3VecTa9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-32 rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.1234567890123!2d-76.23456789012345!3d3.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30e6b8b8b8b8b%3A0x8e30e6b8b8b8b8b!2sCl+65+%2318-104%2C+Palmira%2C+Valle+del+Cauca%2C+Colombia!5e0!3m2!1ses!2sco!4v1234567890123"
                className="w-full h-full border-0 pointer-events-none"
                title="Ubicación de Dra. Sara Elizabeth Plaza"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </a>

          </div>
        </div>
      </div>

      {/* Línea separadora */}
      <div className="border-t border-purple-500"></div>

      {/* Copyright */}
      <div className="px-8 md:px-12 lg:px-36 py-4">
        <div className="text-center">
          <p className="text-xs" style={{ color: '#11051D' }}>
            © 2025 Dr. Sara Plaza. Todos los derechos reservados | #258387
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
