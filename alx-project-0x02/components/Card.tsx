// Card components for the project
import React from "react";
import { CardProps } from "@/interfaces";
import Link from "next/link";

const Card: React.FC<CardProps> = ({ title, description, image, link, category }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">    
      <img src={image} alt={title} className="w-full h-48 object-cover" />      
        <div className="p-4">   
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600 mb-4">{description}</p>
            <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{category}</span>
                <Link href={link} className="text-blue-600 hover:underline">    
                    Read More
                </Link> 
            </div>
        </div>
    </div>
    );
};

export default Card;