import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import ImageModal from './ImageModal';

const ClickableImage = ({ src, alt, title, className = "", caption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`relative group cursor-pointer ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-lg shadow-md transition-all duration-300 group-hover:shadow-lg"
        />
        
        {/* Overlay com ícone de zoom */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-lg flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-90 p-3 rounded-full shadow-lg"
          >
            <ZoomIn className="text-gray-800" size={24} />
          </motion.div>
        </div>
        
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 rounded-b-lg">
            <p className="text-sm text-center">{caption}</p>
          </div>
        )}
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={src}
        imageAlt={alt}
        imageTitle={title}
      />
    </>
  );
};

export default ClickableImage;

