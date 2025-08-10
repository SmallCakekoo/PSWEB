import React, { useState, useRef } from 'react';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Contacto = () => {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const form = useRef();

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
    <section id="contacto" className="w-screen h-screen flex flex-col items-center justify-center py-16 px-4 bg-white pt-32">
      <div className="max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#55408B' }}>
            Contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ¿Listo para comenzar tu camino hacia una mejor salud mental? Contactémonos
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
          {/* Formulario de Contacto - 2/3 del ancho */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6" style={{ color: '#55408B' }}>
                ¡Envíame un correo aquí!
              </h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
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

                {/* Email y Teléfono */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="flex-1 flex flex-col">
                  <textarea
                    name="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.mensaje}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-purple-50 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none flex-1"
                    required
                  />
                </div>

                {/* Botón Enviar */}
                <div className="text-center pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 hover:gap-3 transition-all duration-200 font-medium !rounded-2xl shadow-md !py-3 px-4 cursor-pointer"
                    style={{ backgroundColor: '#A569E5', color: '#fff' }}
                  >
                    <span>Enviar Correo</span>
                    <SendIcon className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Widget de Doctoralia - 1/3 del ancho */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#55408B' }}>
                  Agenda tu cita
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Reserva tu sesión de manera fácil y rápida
                </p>
              </div>
              
              {/* Widget de Doctoralia embebido */}
              <div className="w-full flex-1">
                <iframe
                  src="https://www.doctoralia.co/ajax/marketing/doctor/widget/big_with_calendar/sara-elizabeth-plaza-plaza/null?customUtm=null&id=dmmhmd9fx7&header=null&content=null&fullwidth=null&referer=https%3A%2F%2Fpsicologasaraplaza.onrender.com%2F&hide_branding=true&widget_position=bottom&opinion=false&saasonly=true&expand_calendar=false"
                  className="w-full h-full border-0 rounded-lg"
                  title="Agenda tu cita con Dra. Sara Elizabeth Plaza"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-xl max-w-md w-full p-6 border border-white/20">
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

export default Contacto;
