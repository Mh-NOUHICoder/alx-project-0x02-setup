// components/common/PostCard.tsx
import React from 'react';
import { PostProps } from '@/interfaces';
import Card from './Card'; // Assuming a base Card component exists
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const PostCard: React.FC<PostProps> = ({ id, title, content, userId, onEdit, onDelete }) => {
    const router = useRouter();

    const handleEdit = () => {
        // Use the `id` from component's props
        router.push(`/posts/edit/${id}`);
    };

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            // Call the onDelete prop passed from the parent
            onDelete?.();
        }
    };

    return (
        <div className="relative group">
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10 flex space-x-2">
                <button
                    onClick={handleEdit}
                    className="p-2 bg-blue-100 rounded-full text-blue-600 hover:bg-blue-200"
                >
                    <PencilIcon className="h-4 w-4" />
                </button>
                <button
                    onClick={handleDelete}
                    className="p-2 bg-red-100 rounded-full text-red-600 hover:bg-red-200"
                >
                    <TrashIcon className="h-4 w-4" />
                </button>
            </div>

            {/* Use your existing Card component */}
            <Card
                title={title} // Use prop value
                content={content} // Use prop value
                image="https://via.placeholder.com/400x200"
                link={`/posts/${id}`} // Create a link to the post detail
                className="hover:shadow-lg transition-shadow duration-300"
            />
        </div>
    );
};

export default PostCard;