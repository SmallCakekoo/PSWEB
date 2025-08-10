import { useState, useEffect } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const renderTimelineSection = (section, sectionIndex, totalSections) => {
  return (
    <div key={sectionIndex} className="mb-4">
      {section.map((line, lineIndex) => renderTimelineLine(line, lineIndex))}
      {sectionIndex < totalSections - 1 && (
        <div className="w-full h-px bg-gray-200 my-4"></div>
      )}
    </div>
  );
};

const renderTimelineLine = (line, lineIndex) => {
  // Caso 1: Primera línea con fecha
  if (lineIndex === 0 && line.includes('|')) {
    const [title, date] = line.split('|').map(s => s.trim());
    return (
      <div key={lineIndex} className="mb-2">
        <h4 className="font-semibold text-base md:text-lg" style={{ color: '#55408B' }}>
          {title}
        </h4>
        <p className="text-xs md:text-sm italic" style={{ color: '#A569E5' }}>
          {date}
        </p>
      </div>
    );
  }

  // Caso 2: Título sin fecha
  if (lineIndex === 0 && !line.includes('|') && line.length < 100) {
    return (
      <h4 key={lineIndex} className="font-semibold text-base md:text-lg mb-2" style={{ color: '#55408B' }}>
        {line}
      </h4>
    );
  }

  // Caso 3: Línea normal de contenido
  return (
    <p key={lineIndex} className="text-sm md:text-base mb-2 leading-relaxed" style={{ color: '#11051D' }}>
      {line}
    </p>
  );
};

const parseSections = (content) => {
  const sections = [];
  let currentSection = [];
  
  content.forEach((line) => {
    if (line.trim() === '') {
      if (currentSection.length > 0) {
        sections.push(currentSection);
        currentSection = [];
      }
    } else {
      currentSection.push(line);
    }
  });
  
  if (currentSection.length > 0) {
    sections.push(currentSection);
  }

  return sections;
};

const Trayectoria = () => {
  const [timelineData, setTimelineData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    
    fetch('/data/timeline.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Error al cargar los datos');
        }
        return res.json();
      })
      .then(data => {
        setTimelineData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Error cargando timeline:', err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handlePrev = () => {
    if (timelineData.length === 0) return;
    setActiveIndex((prev) => (prev === 0 ? timelineData.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    if (timelineData.length === 0) return;
    setActiveIndex((prev) => (prev === timelineData.length - 1 ? 0 : prev + 1));
  };

  const renderContent = (content) => {
    const sections = parseSections(content);
    return sections.map((section, sectionIndex) => 
      renderTimelineSection(section, sectionIndex, sections.length)
    );
  };

  if (isLoading) {
    return (
      <section id="trayectoria" className="w-screen h-screen flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-12 bg-primary-light pt-24 md:pt-32">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#55408B] mx-auto mb-4"></div>
          <p className="text-[#55408B]">Cargando trayectoria...</p>
        </div>
      </section>
    );
  }

  if (error || timelineData.length === 0) {
    return (
      <section id="trayectoria" className="w-screen h-screen flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-12 bg-primary-light pt-24 md:pt-32">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#55408B' }}>Mi Trayectoria</h2>
          <p className="text-[#55408B] mb-4">
            {error || 'No se pudieron cargar los datos de la trayectoria.'}
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-[#A569E5] text-white rounded-lg hover:bg-[#55408B] transition-colors cursor-pointer"
          >
            Reintentar
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="trayectoria" className="w-screen h-screen flex flex-col items-center justify-center py-12 px-4 md:px-8 lg:px-12 bg-primary-light pt-24 md:pt-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#55408B' }}>Mi Trayectoria</h2>
      <p className="text-center text-sm md:text-base lg:text-lg max-w-2xl md:max-w-3xl mx-auto mb-6 md:mb-8 px-4" style={{ color: '#55408B' }}>
        Formación académica y experiencia laboral.
      </p>
      
      {/* Línea de tiempo */}
      <div className="relative w-full max-w-4xl md:max-w-6xl flex items-center justify-center mb-8 md:mb-12 h-20 md:h-24">
        <button 
          onClick={handlePrev} 
          className="absolute left-0 z-5 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#A569E5]/20 transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Anterior período de trayectoria"
          disabled={timelineData.length === 0}
        >
          <ArrowBackIosNewIcon style={{ color: '#55408B' }} />
        </button>
        
        <div className="flex-1 flex flex-col items-center">
          <div className="w-full flex items-center justify-between px-4 md:px-8 relative z-5">
            {timelineData.map((item, idx) => (
              <div key={`${item.date}-${item.title.substring(0, 20)}`} className="flex flex-col items-center flex-1 relative group">
                <div className={`w-5 h-5 md:w-6 md:h-6 rounded-full transition-all duration-300 transform group-hover:scale-110 ${
                  idx === activeIndex 
                    ? 'shadow-lg ring-4' 
                    : 'hover:bg-[#A569E5]/80'
                }`} style={{
                  backgroundColor: idx === activeIndex ? '#55408B' : '#A569E5',
                  boxShadow: idx === activeIndex ? '0 10px 15px -3px rgba(85, 64, 139, 0.3)' : 'none',
                  ringColor: '#55408B',
                  zIndex: 5
                }}></div>
                <span className={`mt-2 md:mt-3 text-xs font-semibold transition-all duration-300 ${
                  idx === activeIndex 
                    ? 'scale-110' 
                    : 'group-hover:text-[#55408B]'
                }`} style={{
                  color: idx === activeIndex ? '#55408B' : '#A569E5'
                }}>{item.date}</span>
              </div>
            ))}
          </div>

          {/* Línea de progreso */}
          <div className="absolute top-6 md:top-8 left-8 md:left-12 right-8 md:right-12 h-1 rounded-full overflow-hidden z-0" style={{ backgroundColor: 'rgba(165, 105, 229, 0.2)' }}>
            <div className="h-full rounded-full transition-all duration-500 ease-out" 
                 style={{
                   width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
                   background: 'linear-gradient(to right, #A569E5, #55408B)'
                 }}></div>
          </div>
        </div>
        
        <button 
          onClick={handleNext} 
          className="absolute right-0 z-5 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#A569E5]/20 transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Siguiente período de trayectoria"
          disabled={timelineData.length === 0}
        >
          <ArrowForwardIosIcon style={{ color: '#55408B' }} />
        </button>
      </div>
      
      {/* Tarjeta de contenido - Centrado verticalmente */}
      <div className="w-full max-w-4xl md:max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 bg-white rounded-2xl shadow-soft p-6 md:p-8 animate-fade-in h-72 md:h-80 lg:h-96">
        <div className="flex-1 overflow-y-auto pr-2 md:pr-4">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6" style={{ color: '#55408B' }}>
            {timelineData[activeIndex].title}
          </h3>
          <div className="space-y-2">
            {renderContent(timelineData[activeIndex].description)}
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img 
            src={timelineData[activeIndex].image} 
            alt="Ilustración" 
            className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain" 
          />
        </div>
      </div>
    </section>
  );
};

export default Trayectoria;
