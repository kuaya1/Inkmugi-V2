import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  healingLabel?: string;
  className?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  healingLabel,
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updatePosition = (clientX: number) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let x = ((clientX - rect.left) / rect.width) * 100;
      x = Math.min(Math.max(x, 2), 98);
      setSliderPosition(x);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      updatePosition(e.touches[0].clientX);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    updatePosition(e.clientX);
  };

  return (
    <div
      ref={sliderRef}
      className={`relative overflow-hidden w-full h-full rounded-xl cursor-col-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onClick={handleClick}
      role="slider"
      aria-valuenow={Math.round(sliderPosition)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Before and after comparison slider"
    >
      {/* Before image (full width, underneath) */}
      <div className="absolute inset-0">
        <img
          src={beforeImage}
          alt="Before treatment"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {beforeLabel}
        </div>
      </div>

      {/* After image (clipped from left) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt="After treatment — healed result"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ width: `${(100 / sliderPosition) * 100}%`, maxWidth: 'none' }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 left-4 bg-[#2D2D2B]/80 text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm">
          {afterLabel}
        </div>
      </div>

      {/* Healing label badge */}
      {healingLabel && (
        <div className="absolute top-4 right-4 z-10 bg-green-600/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm shadow-lg">
          ✓ {healingLabel}
        </div>
      )}

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-[0_0_8px_rgba(0,0,0,0.3)]"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-white/50 hover:scale-110 transition-transform duration-200">
          <div className="flex space-x-0.5">
            <ChevronLeft size={14} className="text-[#2D2D2B]" />
            <ChevronRight size={14} className="text-[#2D2D2B]" />
          </div>
        </div>
      </div>

      {/* Drag hint (fades after first interaction) */}
      {sliderPosition === 50 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white text-[11px] px-3 py-1 rounded-full backdrop-blur-sm animate-pulse pointer-events-none">
          ← Drag to compare →
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
