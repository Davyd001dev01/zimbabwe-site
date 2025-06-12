import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import ClickableImage from './ClickableImage';

// Import images
import cecilRhodes from '../assets/cecil_rhodes.jpg';
import colonizacaoMapa from '../assets/colonizacao_mapa.png';
import guerraIndependencia from '../assets/guerra_independencia.jpg';
import robertMugabe from '../assets/robert_mugabe.jpg';
import grandeZimbabwe1 from '../assets/grande_zimbabwe_1.jpg';

const Timeline = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const timelineEvents = [
    {
      year: "Século XI",
      title: "Primeiros Estados Organizados",
      description: "Surgimento dos primeiros estados e reinos organizados na região do atual Zimbábue, incluindo o Reino de Mapungubue.",
      color: "bg-blue-500",
      image: grandeZimbabwe1,
      imageTitle: "Ruínas do Grande Zimbábue - Testemunho dos primeiros estados organizados"
    },
    {
      year: "1200-1450",
      title: "Reino do Zimbábue",
      description: "Período de florescimento do Reino do Zimbábue, com a construção do complexo de pedra do Grande Zimbábue.",
      color: "bg-green-500",
      image: grandeZimbabwe1,
      imageTitle: "Grande Zimbábue - Capital do antigo reino"
    },
    {
      year: "1430-1760",
      title: "Império Monomotapa",
      description: "Domínio do Império Monomotapa sobre grande parte da região, controlando rotas comerciais estratégicas.",
      color: "bg-purple-500"
    },
    {
      year: "1890",
      title: "Colonização Britânica",
      description: "Cecil Rhodes e a Companhia Britânica da África do Sul demarcam o território, iniciando a colonização.",
      color: "bg-red-500",
      image: cecilRhodes,
      imageTitle: "Cecil Rhodes - O homem por trás da colonização do Zimbábue"
    },
    {
      year: "1923",
      title: "Rodésia do Sul",
      description: "A região torna-se a colônia britânica autônoma da Rodésia do Sul.",
      color: "bg-orange-500",
      image: colonizacaoMapa,
      imageTitle: "Mapa da colonização - Injustiças territoriais no pós-independência"
    },
    {
      year: "1965",
      title: "Declaração Unilateral de Independência",
      description: "O governo da minoria branca declara unilateralmente a independência como Rodésia, não reconhecida internacionalmente.",
      color: "bg-yellow-500"
    },
    {
      year: "1965-1980",
      title: "Guerra de Guerrilha",
      description: "Guerra de guerrilha de 15 anos entre forças nacionalistas negras e o regime da minoria branca.",
      color: "bg-red-600",
      image: guerraIndependencia,
      imageTitle: "Guerra de Independência - Luta pela liberdade"
    },
    {
      year: "1979",
      title: "Acordo de Lancaster House",
      description: "Negociações de paz culminam no Acordo de Lancaster House, estabelecendo um cessar-fogo.",
      color: "bg-blue-600"
    },
    {
      year: "18 de abril de 1980",
      title: "Independência do Zimbábue",
      description: "O Zimbábue obtém sua independência formal, com Robert Mugabe como primeiro primeiro-ministro.",
      color: "bg-green-600",
      image: robertMugabe,
      imageTitle: "Robert Mugabe - Primeiro líder do Zimbábue independente"
    },
    {
      year: "1983-1987",
      title: "Gukurahundi",
      description: "Período de violência brutal no sudoeste do país, com dezenas de milhares de mortos.",
      color: "bg-red-700"
    },
    {
      year: "1990s",
      title: "Conflitos Agrários",
      description: "Início dos conflitos relacionados à reforma agrária e redistribuição de terras.",
      color: "bg-orange-600"
    },
    {
      year: "2017",
      title: "Fim da Era Mugabe",
      description: "Robert Mugabe é removido do poder após 37 anos, marcando o fim de uma era.",
      color: "bg-purple-600"
    }
  ];

  React.useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentEvent((prev) => (prev + 1) % timelineEvents.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timelineEvents.length]);

  const nextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % timelineEvents.length);
  };

  const prevEvent = () => {
    setCurrentEvent((prev) => (prev - 1 + timelineEvents.length) % timelineEvents.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg p-8 mb-8"
    >
      <div className="flex items-center gap-3 mb-6">
        <Calendar className="text-amber-600" size={32} />
        <h2 className="text-3xl font-bold text-amber-800">Linha do Tempo Interativa</h2>
      </div>
      
      {/* Timeline Controls */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevEvent}
          className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
        >
          <ChevronLeft size={20} />
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="p-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextEvent}
          className="p-2 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* Timeline Visualization */}
      <div className="relative mb-8">
        <div className="flex justify-between items-center mb-4">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentEvent ? 'scale-150' : 'scale-100'
              } ${event.color}`}
              onClick={() => setCurrentEvent(index)}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
        <div className="h-1 bg-gray-200 rounded-full relative">
          <motion.div
            className="h-full bg-amber-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${((currentEvent + 1) / timelineEvents.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Event Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentEvent}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className={`inline-block px-4 py-2 rounded-full text-white font-bold mb-4 ${timelineEvents[currentEvent].color}`}>
            {timelineEvents[currentEvent].year}
          </div>
          <h3 className="text-2xl font-bold text-amber-800 mb-4">
            {timelineEvents[currentEvent].title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-6">
            {timelineEvents[currentEvent].description}
          </p>
          
          {/* Image if available */}
          {timelineEvents[currentEvent].image && (
            <div className="flex justify-center">
              <ClickableImage
                src={timelineEvents[currentEvent].image}
                alt={timelineEvents[currentEvent].title}
                title={timelineEvents[currentEvent].imageTitle}
                className="max-w-md"
                caption="Clique para ampliar"
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-6">
        <span className="text-sm text-gray-500">
          {currentEvent + 1} de {timelineEvents.length}
        </span>
      </div>
    </motion.section>
  );
};

export default Timeline;

