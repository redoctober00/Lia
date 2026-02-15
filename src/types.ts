export interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export interface CarouselImage {
  url: string;
  caption: string;
  isVideo?: boolean;
}

export interface CarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
}

export interface PhotoGalleryModalProps {
  images: CarouselImage[];
  onClose: () => void;
}
