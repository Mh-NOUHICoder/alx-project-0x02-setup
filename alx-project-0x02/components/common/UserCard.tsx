// components/common/UserCard.tsx
import React from 'react';
import { type UserProps } from '@/interfaces';
import Link from 'next/link';

const UserCard: React.FC<UserProps> = ({ 
  id, 
  name, 
  username, 
  email, 
  address,
  phone,
  website,
  company 
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Username:</span> {username}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Phone:</span> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-medium">Website:</span> {website}
      </p>
      <div className="mt-3 p-3 bg-gray-50 rounded">
        <p className="text-gray-600 mb-1">
          <span className="font-medium">Address:</span> {address.street}, {address.suite}
        </p>
        <p className="text-gray-600">
          {address.city}, {address.zipcode}
        </p>
      </div>
      <p className="text-gray-600 mt-3">
        <span className="font-medium">Company:</span> {company.name}
      </p>
      <Link 
        href={`/users/${id}`}
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        View Profile
      </Link>
    </div>
  );
};

export default UserCard;