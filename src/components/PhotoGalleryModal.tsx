import React from 'react';
import { X } from 'lucide-react';
import type { PhotoGalleryModalProps } from '../types';
import ImageCarousel from './ImageCarousel';

const PhotoGalleryModal: React.FC<PhotoGalleryModalProps> = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
        aria-label="Close gallery"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      <div className="w-full max-w-6xl">
        <ImageCarousel images={images} autoPlay={false} />
      </div>
    </div>
  );
};

export default PhotoGalleryModal;
