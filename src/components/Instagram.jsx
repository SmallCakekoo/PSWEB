import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';

const Instagram = () => {
    return (
        <section 
            id="instagram"
            className="py-16 px-4 flex items-center justify-center pt-32" 
            style={{ backgroundColor: '#F9F4FE', width: '100vw', minHeight: '100vh' }}
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4" style={{ color: '#55408B' }}>
            Sígueme en Instagram
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            Conecta conmigo en redes sociales y mantente al día con contenido sobre bienestar mental, 
            consejos psicológicos y momentos de reflexión.
                    </p>
                    <a 
                        href="https://www.instagram.com/psicosaraplaza/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#A569E5] hover:text-[#8B4DD1] transition-colors font-medium"
                    >
                        <InstagramIcon className="w-6 h-6" />
                        <span>@psicosaraplaza</span>
                    </a>
                </div>

                {/* Instagram Feed Widget */}
                <div className="mb-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl mx-auto px-4">
                        <div className="text-center mb-4">
                            <h3 className="text-xl font-semibold mb-2" style={{ color: '#55408B' }}>
                Mi Feed de Instagram
                            </h3>
                            <p className="text-sm text-gray-600">
                Contenido actualizado sobre bienestar mental y psicología
                            </p>
                        </div>
            
                        {/* Widget de Instagram embebido */}
                        <div className="w-full flex justify-center">
                            <iframe
                                src="https://www.instagram.com/psicosaraplaza/embed"
                                className="w-full max-w-2xl h-96 border-0 rounded-lg instagram-iframe"
                                title="Instagram Feed de @psicosaraplaza"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <a 
                        href="https://www.instagram.com/psicosaraplaza/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
                        style={{ 
                            background: 'linear-gradient(135deg, #A569E5 0%, #E56990 100%)',
                            backgroundSize: '200% 200%',
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #8B4DD1 0%, #D45A7B 100%)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'linear-gradient(135deg, #A569E5 0%, #E56990 100%)';
                        }}
                    >
                        <InstagramIcon className="w-5 h-5" />
                        <span>Seguir en Instagram</span>
                    </a>
                    <p className="text-sm text-gray-500 mt-4">
            ¡Únete a nuestra comunidad de bienestar mental!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Instagram; 