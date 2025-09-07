import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const OverlayServicioMobile = ({ open, onClose, data }) => {
    if (!open || !data) return null;

    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    return (
        <dialog
            open={open}
            className="fixed inset-0 z-50 w-full h-full bg-transparent p-4"
            style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
            }}
            onClose={onClose}
        >
            <div
                className="mx-auto flex items-center justify-center h-full"
                onClick={onClose}
                onKeyDown={handleKeyDown}
                role="button"
                tabIndex={0}
            >
                <button
                    className="relative w-full max-w-sm animate-fadein bg-white rounded-2xl shadow-xl"
                    style={{
                        border: '1.5px solid #ede7f6',
                        maxHeight: '90vh',
                        overflow: 'hidden',
                    }}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="bg-[#55408B] rounded-t-2xl px-4 py-3 flex items-center justify-between">
                        <h2 id="overlay-title" className="text-lg font-medium text-white truncate">{data.titulo}</h2>
                        <button
                            onClick={onClose}
                            onKeyDown={handleKeyDown}
                            className="text-white hover:text-gray-200 hover:scale-110 transition-all duration-200 text-2xl font-light w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10"
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                    </div>

                    <div className="overflow-y-auto" style={{ maxHeight: 'calc(90vh - 60px)' }}>
                        <div className="space-y-6 px-4 py-4">
                            {data.contenido.map((item) => (
                                <div key={item.id || item.titulo} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-white/70 border border-[#e5d6fa] rounded-full flex items-center justify-center shadow-md">
                                        <img 
                                            src={new URL(`../../assets/images/Overlay/${item.icono}`, import.meta.url).href} 
                                            alt={`Icono de ${item.titulo}`} className="w-6 h-6 object-contain" 
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-start">
                                        <h3 className="font-bold text-lg text-[#55408B] mb-2 text-left" style={{ letterSpacing: '-0.5px' }}>{item.titulo}</h3>
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
                </button>
            </div>
        </dialog>
    );
};

// Definición de PropTypes para OverlayServicioMobile
OverlayServicioMobile.propTypes = {
    data: PropTypes.shape({
        titulo: PropTypes.string.isRequired,
        contenido: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            titulo: PropTypes.string.isRequired,
            icono: PropTypes.string.isRequired,
            texto: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]).isRequired,
        })).isRequired,
    }),
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};

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
            <OverlayServicioMobile open={!!openId} onClose={() => setOpenId(null)} data={overlayData} />
            <div className="w-full max-w-md mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3" style={{ color: '#55408B' }}>
                        Mis Servicios
                    </h2>
                    <p className="text-lg text-gray-600">
                        Te acompaño en tu proceso de crecimiento personal y bienestar emocional con servicios especializados y personalizados
                    </p>
                </div>

                {/* Servicios Grid - 2 columnas en móvil */}
                <div className="grid grid-cols-2 gap-4">
                    {servicios.map((servicio) => (
                        <div
                            key={servicio.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            {/* Imagen del servicio */}
                            <div className="p-4 pb-2">
                                <div className="w-full h-20 flex items-center justify-center mb-3">
                                    <img
                                        src={new URL(`../../assets/images/${servicio.imagen}`, import.meta.url).href}
                                        alt={servicio.titulo}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>

                            {/* Contenido */}
                            <div className="px-4 pb-4">
                                <h3 className="text-base font-bold mb-2" style={{ color: '#55408B' }}>
                                    {servicio.titulo}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-3">
                                    {servicio.descripcion}
                                </p>
                                {/* Botón */}
                                <button
                                    className="w-full flex items-center justify-center gap-1 group-hover:gap-2 transition-all duration-200 font-medium rounded-xl shadow-md py-2 px-3 text-sm cursor-pointer"
                                    style={{ backgroundColor: '#A569E5', color: '#fff' }}
                                    onClick={() => setOpenId(servicio.id)}
                                    aria-label={`Leer más sobre ${servicio.titulo}`}
                                >
                                    <span>Leer más</span>
                                    <ArrowForwardIcon className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiciosMobile;