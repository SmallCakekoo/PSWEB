import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const Paquetes = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [paquetes, setPaquetes] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    fetch('/data/paquetes.json')
      .then((res) => res.json())
      .then((data) => setPaquetes(data));
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % paquetes.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + paquetes.length) % paquetes.length);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const toggleCard = (paqueteId) => {
    setFlippedCards(prev => ({
      ...prev,
      [paqueteId]: !prev[paqueteId]
    }));
  };

  // Función para obtener el índice rotativo
  const getRotatedIndex = (index) => {
    return (index + currentSlide) % paquetes.length;
  };

  // Función para obtener las clases de animación según la posición
  const getAnimationClasses = (position) => {
    const baseClasses = "transition-all duration-300 ease-in-out";
    
    if (isAnimating) {
      // Durante la animación, agregar efectos de slide
      if (position === 0) {
        return `${baseClasses} transform scale-95 opacity-80`;
      } else if (position === 1) {
        return `${baseClasses} transform scale-105 opacity-100`;
      } else if (position === 2) {
        return `${baseClasses} transform scale-95 opacity-80`;
      }
    }
    
    // Estado normal
    if (position === 1) {
      return `${baseClasses} transform scale-105`;
    }
    
    return `${baseClasses} transform scale-100`;
  };

  return (
    <section 
      id="paquetes"
      className="py-16 px-4 flex items-center justify-center pt-32" 
      style={{ backgroundColor: '#F9F4FE', width: '100vw', height: '100vh' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#55408B' }}>
            Mis Paquetes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            Explora los planes disponibles y elige el que mejor se adapte a ti. ¡Hablemos en persona para concretarlo!
          </p>
          <p className="text-sm text-gray-500">
            Las sesiones virtuales pueden realizarse por videollamada o Google Meet.
          </p>
        </div>

        {/* Carrusel Container */}
        <div className="relative">
          {/* Flecha Izquierda */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-0 w-12 h-12 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Paquete anterior"
          >
            <ArrowBackIcon className="text-purple-700 w-6 h-6" />
          </button>

          {/* Flecha Derecha */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-0 w-12 h-12 bg-purple-200 hover:bg-purple-300 rounded-full flex items-center justify-center transition-colors duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Paquete siguiente"
          >
            <ArrowForwardIcon className="text-purple-700 w-6 h-6" />
          </button>

          {/* Contenedor de Tarjetas */}
          <div className="flex justify-center">
            <div className="flex gap-8 max-w-6xl">
              {[0, 1, 2].map((position) => {
                const paqueteIndex = getRotatedIndex(position);
                const paquete = paquetes[paqueteIndex];
                
                if (!paquete) return null;
                
                const isFlipped = flippedCards[paquete.id];
                
                return (
                  <div key={`${position}-${paqueteIndex}`} className="w-80 flex-shrink-0">
                    <div className={`relative w-full h-96 ${getAnimationClasses(position)}`}>
                      {/* Flip Card Container */}
                      <div 
                        className="relative w-full h-full transition-transform duration-700"
                        style={{
                          transformStyle: 'preserve-3d',
                          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                        }}
                      >
                        {/* Frente de la tarjeta */}
                        <div 
                          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className="flex items-center justify-center mb-6">
                            <div className="w-20 h-20 flex items-center justify-center">
                              <img
                                src={paquete.imagen}
                                alt={paquete.titulo}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          <div className="text-center mb-6">
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#55408B' }}>
                              {paquete.titulo}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                              {paquete.subtitulo}
                            </p>
                          </div>

                          <div className="space-y-2 mb-6">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Duración:</span>
                              <span className="font-medium text-gray-800">{paquete.duracion}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Modalidad:</span>
                              <span className="font-medium text-gray-800">{paquete.modalidad}</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Precio:</span>
                              <span className="font-bold" style={{ color: '#55408B' }}>{paquete.precio}</span>
                            </div>
                          </div>

                          <div className="text-center">
                            <button 
                              className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium !rounded-2xl shadow-md !py-3 px-4 text-sm cursor-pointer"
                              style={{ backgroundColor: '#A569E5', color: '#fff' }}
                              onClick={() => toggleCard(paquete.id)}
                              aria-label={`Leer más sobre ${paquete.titulo}`}
                            >
                              <span>Leer más</span>
                              <ArrowForwardIcon className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        {/* Reverso de la tarjeta */}
                        <div 
                          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6"
                          style={{ 
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                          }}
                        >
                          <div className="h-full flex flex-col">
                            {/* Header del reverso */}
                            <div className="text-center mb-6">
                              <h3 className="text-xl font-bold mb-2" style={{ color: '#55408B' }}>
                                {paquete.titulo}
                              </h3>
                            </div>

                            {/* Contenido del reverso */}
                            <div className="flex-1 space-y-4 overflow-y-auto pr-2" style={{
                              scrollbarWidth: 'thin',
                              scrollbarColor: '#A569E5 #f3eafd'
                            }}>
                              {paquete.descripcion.map((parrafo, idx) => (
                                <p key={idx} className="text-gray-700 text-sm leading-relaxed text-left">
                                  {parrafo.split('**').map((part, i) => 
                                    i % 2 === 1 ? <strong key={i} style={{ color: '#55408B' }}>{part}</strong> : part
                                  )}
                                </p>
                              ))}
                            </div>

                            {/* Botón Volver */}
                            <div className="text-center mt-4">
                              <button
                                onClick={() => toggleCard(paquete.id)}
                                className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium !rounded-2xl shadow-md !py-3 px-4 text-sm cursor-pointer"
                                style={{ backgroundColor: '#A569E5', color: '#fff' }}
                                aria-label="Volver al frente de la tarjeta"
                              >
                                <span>Volver</span>
                                <ArrowBackIcon className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Puntos de Navegación */}
          <div className="flex justify-center mt-8 space-x-2">
            {paquetes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className="transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`Ir al paquete ${index + 1}`}
              >
                {index === currentSlide ? (
                  <RadioButtonCheckedIcon className="text-purple-700 w-6 h-6" />
                ) : (
                  <RadioButtonUncheckedIcon className="text-purple-400 w-6 h-6 hover:text-purple-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Estilos CSS para el flip card */}
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.7s;
          transform-style: preserve-3d;
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        /* Estilos personalizados para el scroll */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f3eafd;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #A569E5;
          border-radius: 10px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #8d4fc7;
        }
      `}</style>
    </section>
  );
};

export default Paquetes;

