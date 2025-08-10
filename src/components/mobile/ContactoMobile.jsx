import React, { useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const ContactoMobile = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar el formulario usando EmailJS
    emailjs.sendForm(
      'service_pdiykr6', // service_id
      'template_pcg7j9l', // template_id
      form.current,
      'Y39zB1srIc4hX2-H_' // public_key
    )
    .then((result) => {
        setModalMessage('¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.');
        setIsSuccess(true);
        setShowModal(true);
        // Limpiar el formulario después del envío exitoso
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
    }, (error) => {
        setModalMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        setIsSuccess(false);
        setShowModal(true);
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="contacto-mobile" className="w-screen min-h-screen flex flex-col items-center justify-center py-12 px-4 bg-white" style={{ paddingTop: '80px' }}>
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3" style={{ color: '#55408B' }}>
            Contacto
          </h2>
          <p className="text-lg text-gray-600">
            ¿Listo para comenzar tu camino hacia una mejor salud mental? Contactémonos
          </p>
        </div>

        {/* Formulario de Contacto */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#55408B' }}>
            ¡Envíame un correo aquí!
          </h3>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* Teléfono */}
            <div>
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Asunto */}
            <div>
              <input
                type="text"
                name="asunto"
                placeholder="Asunto"
                value={formData.asunto}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                required
              />
            </div>

            {/* Mensaje */}
            <div>
              <textarea
                name="mensaje"
                placeholder="Escribe tu mensaje aquí..."
                value={formData.mensaje}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Botón Enviar */}
            <div className="text-center pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium rounded-xl shadow-md py-3 px-4 cursor-pointer"
                style={{ backgroundColor: '#A569E5', color: '#fff' }}
              >
                <span>Enviar Correo</span>
                <SendIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Enlace directo a Doctoralia */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#55408B' }}>
              Agenda tu cita
            </h3>
            <p className="text-base text-gray-600 mb-4">
              Reserva tu sesión de manera fácil y rápida
            </p>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-base text-gray-600">
                Haz clic en el botón para agendar tu cita directamente en Doctoralia
              </p>
              <a
                href="https://www.doctoralia.co/sara-elizabeth-plaza-plaza/psicologo/bogota"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg"
                style={{ backgroundColor: '#00c1be' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#00a8a5'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#00c1be'}
              >
                <span>Agendar Cita</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl max-w-sm w-full p-6 border border-white/20">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isSuccess ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {isSuccess ? (
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                isSuccess ? 'text-green-600' : 'text-red-600'
              }`}>
                {isSuccess ? '¡Éxito!' : 'Error'}
              </h3>
              <p className="text-gray-600 mb-6">
                {modalMessage}
              </p>
              <button
                onClick={closeModal}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors cursor-pointer ${
                  isSuccess 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactoMobile; 