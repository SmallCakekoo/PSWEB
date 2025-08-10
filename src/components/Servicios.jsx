import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OverlayServicio = ({ open, onClose, data }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose, open]);

  if (!open || !data) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-40 w-full h-full bg-transparent"
      style={{
        background: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'background 0.3s',
      }}
      tabIndex={-1}
    >
      <button
        className="fixed inset-0 w-full h-full cursor-default"
        onClick={onClose}
        aria-label="Cerrar modal"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm md:max-w-2xl w-full animate-fadein mx-4"
        style={{
          borderRadius: '2rem',
          background: '#fff',
          boxShadow: '0 8px 32px 0 rgba(85,64,139,0.13)',
          border: '1.5px solid #ede7f6',
          padding: '0 0 2rem md:p-0 md:pb-2.5rem 0',
          minHeight: '380px',
        }}
      >
        <div className="bg-[#55408B] rounded-t-[2rem] px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-xl md:text-2xl font-medium text-white">{data.titulo}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-gray-200 hover:scale-110 transition-all duration-200 text-2xl md:text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        <div className="space-y-6 md:space-y-10 px-4 md:px-6 pt-4 md:pt-6">
          {data.contenido?.map((item) => (
            <div 
              key={`${data.titulo}-${item.titulo}`} 
              className="flex items-center gap-4 md:gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-white/70 border border-[#e5d6fa] rounded-full flex items-center justify-center shadow-md">
                <img src={item.icono} alt={`Icono de ${item.titulo}`} className="w-7 h-7 md:w-9 md:h-9 object-contain" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-lg md:text-xl text-[#55408B] mb-2 text-left" style={{letterSpacing: '-0.5px'}}>{item.titulo}</h3>
                {Array.isArray(item.texto) ? (
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                    {item.texto.map((t) => (
                      <span key={`${item.titulo}-${t.substring(0, 20)}`}>
                        <span className="text-[#A569E5] font-bold">·</span> {t}<br />
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">{item.texto}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes fadein {
          0% { opacity: 0; transform: scale(0.97); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadein {
          animation: fadein 0.35s cubic-bezier(.4,0,.2,1);
        }
        @media (max-width: 600px) {
          .max-w-2xl { max-width: 98vw !important; }
          .p-10, .p-8, .p-6, .p-4 { padding-left: 1rem !important; padding-right: 1rem !important; }
        }
      `}</style>
    </div>
  );
};

// PropTypes para OverlayServicio
OverlayServicio.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.arrayOf(PropTypes.shape({
      titulo: PropTypes.string.isRequired,
      icono: PropTypes.string.isRequired,
      texto: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired
    }))
  })
};

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const [overlays, setOverlays] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [serviciosRes, overlaysRes] = await Promise.all([
          fetch('/data/servicios.json'),
          fetch('/data/serviciosOverlay.json')
        ]);
        const serviciosData = await serviciosRes.json();
        const overlaysData = await overlaysRes.json();
        setServicios(serviciosData);
        setOverlays(overlaysData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const overlayData = overlays.find(o => o.id === openId);

  return (
    <section
      id="servicios"
      className="py-12 md:py-16 px-4 md:px-6 flex items-center justify-center pt-24 md:pt-32"
      style={{ backgroundColor: '#F9F4FE', width: '100vw', height: '100vh' }}
    >
      <OverlayServicio 
        open={!!openId} 
        onClose={() => setOpenId(null)} 
        data={overlayData} 
      />
      <div className="max-w-6xl md:max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#55408B' }}>
            Mis Servicios
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl md:max-w-3xl mx-auto px-4">
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional con servicios especializados y personalizados
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {servicios.map((servicio) => (
            <button
              key={servicio.id}
              onClick={() => setOpenId(servicio.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group text-left cursor-pointer"
              aria-label={`Ver más detalles sobre ${servicio.titulo}`}
            >
              <div className="p-4 md:p-6 md:pb-4">
                <div className="w-full h-24 md:h-32 flex items-center justify-center mb-3 md:mb-4">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3" style={{ color: '#55408B' }}>
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {servicio.descripcion}
                </p>
                <div
                  className="w-full flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-200 font-medium !rounded-2xl shadow-md !py-2 md:!py-3 px-3 md:px-4"
                  style={{ backgroundColor: '#A569E5', color: '#fff' }}
                >
                  <span className="text-sm md:text-base">Leer más</span>
                  <ArrowForwardIcon className="w-3 h-3 md:w-4 md:h-4" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
