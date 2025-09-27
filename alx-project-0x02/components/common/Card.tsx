// components/common/Card.tsx
import React from 'react';
import { CardProps } from '@/interfaces';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';


interface ExtendedCardProps extends CardProps {
  onEdit?: () => void;
  onDelete?: () => void;
}

const Card: React.FC<ExtendedCardProps> = ({ 
  title, 
  content, 
  image, 
  link, 
  category, 
  className = '',
  onEdit,
  onDelete,
}) => {
  return (
    <div className={`border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          
          <div className="flex gap-2">
            <button 
              onClick={onEdit}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-200"
              title="Edit"
            >
              <PencilIcon className="w-4 h-4" />
            </button>
            <button 
              onClick={onDelete}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors duration-200"
              title="Delete"
            >
              <TrashIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;