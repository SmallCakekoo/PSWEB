import React, { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OverlayServicio = ({ open, onClose, data }) => {
  if (!open || !data) return null;
  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{
        background: 'rgba(255, 255, 255, 0.45)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        transition: 'background 0.3s',
      }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full animate-fadein"
        style={{
          borderRadius: '2rem',
          background: '#fff',
          boxShadow: '0 8px 32px 0 rgba(85,64,139,0.13)',
          border: '1.5px solid #ede7f6',
          padding: '0 0 2.5rem 0',
          minHeight: '420px',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Header con fondo morado */}
        <div className="bg-[#55408B] rounded-t-[2rem] px-6 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-medium text-white">{data.titulo}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 hover:scale-110 transition-all duration-200 text-3xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>
        {/* Contenido */}
        <div className="space-y-10 px-6 pt-6">
          {data.contenido.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-white/70 border border-[#e5d6fa] rounded-full flex items-center justify-center shadow-md">
                <img src={item.icono} alt="icono" className="w-9 h-9 object-contain" />
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="font-bold text-xl text-[#55408B] mb-2 text-left" style={{letterSpacing: '-0.5px'}}>{item.titulo}</h3>
                {Array.isArray(item.texto) ? (
                  <p className="text-gray-700 text-base leading-relaxed text-left">
                    {item.texto.map((t, i) => (
                      <span key={i}>
                        {i > 0 && <br />}<span className="text-[#A569E5] font-bold">·</span> {t}
                      </span>
                    ))}
                  </p>
                ) : (
                  <p className="text-gray-700 text-base leading-relaxed text-left">{item.texto}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animación fade-in */}
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

const Servicios = () => {
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
      id="servicios"
      className="py-16 px-4 flex items-center justify-center pt-32"
      style={{ backgroundColor: '#F9F4FE', width: '100vw', height: '100vh' }}
    >
      <OverlayServicio open={!!openId} onClose={() => setOpenId(null)} data={overlayData} />
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#55408B' }}>
            Mis Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Te acompaño en tu proceso de crecimiento personal y bienestar emocional con servicios especializados y personalizados
          </p>
        </div>

        {/* Servicios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Imagen del servicio */}
              <div className="p-6 pb-4">
                <div className="w-full h-32 flex items-center justify-center mb-4">
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold mb-3" style={{ color: '#55408B' }}>
                  {servicio.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {servicio.descripcion}
                </p>
                {/* Botón */}
                <button
                  className="w-full flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-200 font-medium !rounded-2xl shadow-md !py-3 px-4 cursor-pointer"
                  style={{ backgroundColor: '#A569E5', color: '#fff' }}
                  onClick={() => setOpenId(servicio.id)}
                  aria-label={`Leer más sobre ${servicio.titulo}`}
                >
                  <span>Leer más</span>
                  <ArrowForwardIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
