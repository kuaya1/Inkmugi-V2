import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  testimonial: string;
  date: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  testimonial,
  date,
}) => {
  return (
    <div className="testimonial-card bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <h4 className="font-medium text-lg">{name}</h4>
        <div className="flex items-center mt-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-neutral-600 mb-3 italic">{testimonial}</p>
      <p className="text-xs text-neutral-400">{date}</p>
    </div>
  );
};

export default TestimonialCard;