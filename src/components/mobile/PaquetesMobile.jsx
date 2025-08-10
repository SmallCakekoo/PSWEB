import React, { useState, useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

const PaquetesMobile = () => {
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

  return (
    <section 
      id="paquetes-mobile"
      className="py-12 px-4 min-h-screen flex items-center justify-center" 
      style={{ backgroundColor: '#F9F4FE', paddingTop: '80px' }}
    >
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#55408B' }}>
            Mis Paquetes
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            Explora los planes disponibles y elige el que mejor se adapte a ti. ¡Hablemos en persona para concretarlo!
          </p>
          <p className="text-sm text-gray-500">
            Las sesiones virtuales pueden realizarse por videollamada o Google Meet.
          </p>
        </div>

        {/* Carrusel Container */}
        <div className="relative">

          {/* Contenedor de Tarjeta Principal */}
          <div className="flex justify-center">
            <div className="w-full">
              {paquetes.length > 0 && (() => {
                const paquete = paquetes[currentSlide];
                const isFlipped = flippedCards[paquete.id];
                
                return (
                  <div className="w-full">
                    <div className="relative w-full h-[28rem]">
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
                          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-5"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className="flex items-center justify-center mb-4">
                            <div className="w-16 h-16 flex items-center justify-center">
                              <img
                                src={paquete.imagen}
                                alt={paquete.titulo}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>

                          <div className="text-center mb-4">
                            <h3 className="text-xl font-bold mb-2" style={{ color: '#55408B' }}>
                              {paquete.titulo}
                            </h3>
                            <p className="text-gray-600 text-base mb-3">
                              {paquete.subtitulo}
                            </p>
                          </div>

                          <div className="space-y-2 mb-4">
                            <div className="flex justify-between items-center text-base">
                              <span className="text-gray-600">Duración:</span>
                              <span className="font-medium text-gray-800">{paquete.duracion}</span>
                            </div>
                            <div className="flex justify-between items-center text-base">
                              <span className="text-gray-600">Modalidad:</span>
                              <span className="font-medium text-gray-800">{paquete.modalidad}</span>
                            </div>
                            <div className="flex justify-between items-center text-base">
                              <span className="text-gray-600">Precio:</span>
                              <span className="font-bold" style={{ color: '#55408B' }}>{paquete.precio}</span>
                            </div>
                          </div>

                          <div className="text-center mt-2">
                            <button 
                              className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium rounded-xl shadow-md py-3 px-4 text-base cursor-pointer mt-29"
                              style={{ backgroundColor: '#A569E5', color: '#fff' }}
                              onClick={() => toggleCard(paquete.id)}
                              aria-label={`Leer más sobre ${paquete.titulo}`}
                            >
                              <span>Leer más</span>
                              <ArrowForwardIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Reverso de la tarjeta */}
                        <div 
                          className="absolute w-full h-full bg-white rounded-xl shadow-lg p-5"
                          style={{ 
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                          }}
                        >
                          <div className="h-full flex flex-col">
                            {/* Header del reverso */}
                            <div className="text-center mb-4">
                              <h3 className="text-xl font-bold mb-2" style={{ color: '#55408B' }}>
                                {paquete.titulo}
                              </h3>
                            </div>

                            {/* Contenido del reverso */}
                            <div className="flex-1 space-y-3 overflow-y-auto pr-2" style={{
                              scrollbarWidth: 'thin',
                              scrollbarColor: '#A569E5 #f3eafd'
                            }}>
                              {paquete.descripcion.map((parrafo, idx) => (
                                <p key={idx} className="text-gray-700 text-base leading-relaxed text-left">
                                  {parrafo.split('**').map((part, i) => 
                                    i % 2 === 1 ? <strong key={i} style={{ color: '#55408B' }}>{part}</strong> : part
                                  )}
                                </p>
                              ))}
                            </div>

                            {/* Botón Volver */}
                            <div className="text-center mt-2">
                              <button
                                onClick={() => toggleCard(paquete.id)}
                                className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium rounded-xl shadow-md py-3 px-4 text-base cursor-pointer"
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
              })()}
            </div>
          </div>

          {/* Puntos de Navegación */}
          <div className="flex justify-center mt-6 space-x-2">
            {paquetes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className="transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label={`Ir al paquete ${index + 1}`}
              >
                {index === currentSlide ? (
                  <RadioButtonCheckedIcon className="text-purple-700 w-5 h-5" />
                ) : (
                  <RadioButtonUncheckedIcon className="text-purple-400 w-5 h-5 hover:text-purple-600" />
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
          width: 4px;
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

export default PaquetesMobile; 