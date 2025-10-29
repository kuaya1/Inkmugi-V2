import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  duration,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft transition-all duration-300 hover:shadow-medium">
      <div className="h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-neutral-700">
            <DollarSign size={16} className="mr-1 text-primary" />
            <span>{price}</span>
          </div>
          <div className="flex items-center text-neutral-700">
            <Clock size={16} className="mr-1 text-primary" />
            <span>{duration}</span>
          </div>
        </div>
        
        <Link to="/booking" className="btn btn-outline w-full text-sm">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;