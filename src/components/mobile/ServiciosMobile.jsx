import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OverlayServicioMobile = ({ open, onClose, data }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!open && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!data) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 p-4 bg-transparent"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div
        className="relative w-full max-w-sm animate-fadein bg-white rounded-2xl shadow-xl"
        style={{
          border: '1.5px solid #ede7f6',
          maxHeight: '90vh',
          overflow: 'hidden',
        }}
      >
        <div className="bg-[#55408B] rounded-t-2xl px-4 py-3 flex items-center justify-between">
          <h2 id="overlay-title" className="text-lg font-medium text-white truncate">
            {data.titulo}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-white hover:text-gray-200 hover:scale-110 transition-all duration-200 text-2xl font-light w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Cerrar diálogo"
          >
            ×
          </button>
        </div>
        
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 60px)' }}>
          <div className="space-y-6 px-4 py-4">
            {data.contenido.map((item) => (
              <div key={item.id || item.titulo} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/70 border border-[#e5d6fa] rounded-full flex items-center justify-center shadow-md">
                  <img src={item.icono} alt={`Icono de ${item.titulo}`} className="w-6 h-6 object-contain" />
                </div>
                <div className="flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-lg text-[#55408B] mb-2 text-left" style={{letterSpacing: '-0.5px'}}>{item.titulo}</h3>
                  {Array.isArray(item.texto) ? (
                    <div className="text-gray-700 text-sm leading-relaxed text-left">
                      {item.texto.map((t) => (
                        <div key={t} className="mb-1">
                          <span className="text-[#A569E5] font-bold">·</span> {t}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-700 text-sm leading-relaxed text-left">{item.texto}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        dialog {
          margin: auto;
          border: none;
        }
        dialog::backdrop {
          background: rgba(255, 255, 255, 0.95);
        }
        @keyframes fadein {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadein {
          animation: fadein 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </dialog>
  );
};

OverlayServicioMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  data: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      titulo: PropTypes.string.isRequired,
      icono: PropTypes.string.isRequired,
      texto: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
      ]).isRequired
    })).isRequired
  })
};

const ServicioCard = ({ servicio, onClick }) => (
  <article
    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
  >
    <div className="p-4 pb-2">
      <div className="w-full h-20 flex items-center justify-center mb-3">
        <img
          src={servicio.imagen}
          alt={servicio.titulo}
          className="w-full h-full object-contain"
        />
      </div>
    </div>

    <div className="px-4 pb-4">
      <h3 className="text-base font-bold mb-2" style={{ color: '#55408B' }}>
        {servicio.titulo}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
        {servicio.descripcion}
      </p>
      <button
        type="button"
        className="w-full flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-200 font-medium rounded-xl shadow-md py-2 px-3 text-sm"
        style={{ backgroundColor: '#A569E5', color: '#fff' }}
        onClick={onClick}
        aria-label={`Leer más sobre ${servicio.titulo}`}
      >
        <span>Leer más</span>
        <ArrowForwardIcon className="w-3 h-3" />
      </button>
    </div>
  </article>
);

const ServiciosMobile = () => {
  const [servicios, setServicios] = useState([]);
  const [overlays, setOverlays] = useState([]);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    fetch('/data/servicios.json')
      .then((res) => res.json())
      .then((data) => setServicios(data));
    fetch('/data/serviciosOverlay.json')
      .then((res) => res.json())
      .then((data) => setOverlays(data));
  }, []);

  const overlayData = overlays.find(o => o.id === openId);

  return (
    <section
      id="servicios-mobile"
      className="py-12 px-4 min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#F9F4FE' }}
    >
      <OverlayServicioMobile 
        open={!!openId} 
        onClose={() => setOpenId(null)} 
        data={overlayData} 
      />
      
      <div className="w-full max-w-md mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#55408B' }}>
            Mis Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional con servicios especializados y personalizados
          </p>
        </header>

        <div className="grid grid-cols-2 gap-4">
          {servicios.map((servicio) => (
            <ServicioCard
              key={servicio.id}
              servicio={servicio}
              onClick={() => setOpenId(servicio.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosMobile;