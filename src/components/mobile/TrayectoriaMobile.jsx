import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Componente separado para renderizar una línea de contenido
const ContentLine = ({ line, isFirst }) => {
  if (isFirst && line.includes('|')) {
    const [title, date] = line.split('|').map(s => s.trim());
    return (
      <div className="mb-3">
        <h4 className="font-semibold text-base" style={{ color: '#55408B' }}>
          {title}
        </h4>
        <p className="text-xs italic" style={{ color: '#A569E5' }}>
          {date}
        </p>
      </div>
    );
  }

  if (isFirst && !line.includes('|') && line.length < 100) {
    return (
      <h4 className="font-semibold text-base mb-2" style={{ color: '#55408B' }}>
        {line}
      </h4>
    );
  }

  return (
    <p className="text-sm mb-2 leading-relaxed" style={{ color: '#11051D' }}>
      {line}
    </p>
  );
};

// Componente separado para una sección de contenido
const ContentSection = ({ section, isLastSection }) => {
  return (
    <>
      {section.map((line, lineIndex) => (
        <ContentLine key={lineIndex} line={line} isFirst={lineIndex === 0} />
      ))}
      {!isLastSection && <div className="w-full h-px bg-gray-200 my-3"></div>}
    </>
  );
};

const TrayectoriaMobile = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch('/data/timeline.json')
      .then(res => res.json())
      .then(data => setTimelineData(data))
      .catch(() => {});
  }, []);

  const handlePrev = () => {
    setActiveIndex(prev => prev === 0 ? timelineData.length - 1 : prev - 1);
  };
  
  const handleNext = () => {
    setActiveIndex(prev => prev === timelineData.length - 1 ? 0 : prev + 1);
  };

  const splitContentIntoSections = (content) => {
    const sections = [];
    let currentSection = [];
    
    content.forEach((line) => {
      if (line.trim() === '' && currentSection.length > 0) {
        sections.push(currentSection);
        currentSection = [];
      } else if (line.trim() !== '') {
        currentSection.push(line);
      }
    });
    
    if (currentSection.length > 0) {
      sections.push(currentSection);
    }

    return sections;
  };

  const renderContent = (content) => {
    const sections = splitContentIntoSections(content);
    
    return sections.map((section, index) => (
      <div key={index} className="mb-4">
        <ContentSection 
          section={section} 
          isLastSection={index === sections.length - 1} 
        />
      </div>
    ));
  };

  if (timelineData.length === 0) {
    return (
      <section className="w-screen min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-primary-light">
        <div className="text-center">
          <p style={{ color: '#55408B' }}>Cargando trayectoria...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="trayectoria-mobile" className="w-screen min-h-screen flex flex-col items-center justify-center py-8 px-4 bg-primary-light" style={{ paddingTop: '80px' }}>
      {/* Header */}
      <div className="w-full text-center mb-6">
        <h2 className="text-3xl font-bold mb-2" style={{ color: '#55408B' }}>Mi Trayectoria</h2>
        <p className="text-base" style={{ color: '#55408B' }}>
          Formación académica y experiencia laboral.
        </p>
      </div>
      
      {/* Timeline móvil simplificado */}
      <div className="w-full mb-6">
        <div className="flex items-center justify-between px-4">
          <button 
            onClick={handlePrev} 
            onTouchStart={(e) => e.preventDefault()}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 active:scale-95"
            style={{ position: 'relative', zIndex: 5 }}
            aria-label="Anterior período de trayectoria"
          >
            <ArrowBackIosNewIcon style={{ color: '#55408B', fontSize: '24px' }} />
          </button>
          
          <div className="flex-1 mx-4">
            <div className="flex items-center justify-center space-x-3">
              {timelineData.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div 
                    className={`w-5 h-5 rounded-full transition-all duration-300 ${
                      idx === activeIndex 
                        ? 'bg-[#55408B] shadow-lg' 
                        : 'bg-[#A569E5]'
                    }`}
                  ></div>
                  <span 
                    className={`text-xs font-medium mt-1 ${
                      idx === activeIndex 
                        ? 'text-[#55408B] font-bold' 
                        : 'text-[#A569E5]'
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={handleNext} 
            onTouchStart={(e) => e.preventDefault()}
            className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-all duration-300 active:scale-95"
            style={{ position: 'relative', zIndex: 5 }}
            aria-label="Siguiente período de trayectoria"
          >
            <ArrowForwardIosIcon style={{ color: '#55408B', fontSize: '24px' }} />
          </button>
        </div>
      </div>
      
      {/* Contenido principal - Centrado verticalmente */}
      <div className="w-full bg-white rounded-2xl shadow-soft p-6 flex-1 flex flex-col justify-center">
        {/* Título del año */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold" style={{ color: '#55408B' }}>
            {timelineData[activeIndex].title}
          </h3>
        </div>
        
        {/* Contenido y imagen en layout vertical */}
        <div className="flex flex-col items-center space-y-6">
          {/* Imagen centrada */}
          <div className="flex justify-center w-full">
            <img 
              src={timelineData[activeIndex].image} 
              alt="Ilustración" 
              className="w-36 h-36 object-contain"
            />
          </div>
          
          {/* Contenido de texto */}
          <div className="w-full">
            <div className="space-y-4">
              {renderContent(timelineData[activeIndex].description)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrayectoriaMobile;