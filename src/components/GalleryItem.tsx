import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface GalleryItemProps {
  beforeImage: string;
  afterImage: string;
  category: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  beforeImage,
  afterImage,
  category,
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="gallery-item cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="relative">
        <div className="flex">
          <div className="w-1/2 overflow-hidden">
            <img 
              src={beforeImage} 
              alt={`Before ${category}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              Before
            </div>
          </div>
          <div className="w-1/2 overflow-hidden">
            <img 
              src={afterImage} 
              alt={`After ${category}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
              After
            </div>
          </div>
        </div>
        <div className="overlay">
          <Search size={24} className="text-white" />
        </div>
      </div>
      <div className="mt-2">
        <p className="text-sm font-medium text-neutral-700">{category}</p>
      </div>
    </div>
  );
};

export default GalleryItem;