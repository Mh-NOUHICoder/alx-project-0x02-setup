import React, { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import { useCards } from "@/hooks/useCards";
import PostModal from "@/components/common/PostModal";
import { CardItem, PostData } from '@/interfaces';

const HomePage: React.FC = () => {
    const { cardsData, cardClassName } = useCards();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPost, setEditingPost] = useState<CardItem | null>(null);
    const [isMounted, setIsMounted] = useState(false);
    const [posts, setPosts] = useState<CardItem[]>([]);

    useEffect(() => {
        setIsMounted(true);
        const savedPosts = localStorage.getItem('userPosts');
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts));
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('userPosts', JSON.stringify(posts));
        }
    }, [posts, isMounted]);

    const openModal = () => {
        setEditingPost(null);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setEditingPost(null);
        setIsModalOpen(false);
    };

    // Make sure these functions are defined
    const handleEditPost = (post: CardItem) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };

    const handleDeletePost = (postId: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
        }
    };

    const handleNewPost = (postData: PostData) => {
        if (editingPost) {
            // Update existing post
            setPosts(prevPosts => prevPosts.map(post => 
                post.id === editingPost.id 
                    ? { ...editingPost, ...postData }
                    : post
            ));
        } else {
            // Create new post
            const newPost: CardItem = {
                id: Date.now(),
                title: postData.title,
                content: postData.content,
                image: postData.image?.trim() || "https://via.placeholder.com/400x200",
                link: `/posts/${Date.now()}`,
                category: postData.category,
            };
            setPosts(prevPosts => [newPost, ...prevPosts]);
        }
    };

    const allCards = [...posts, ...cardsData];

    return (
        <>
            <Header />
            <main className="max-w-5xl mx-auto p-6 sm:p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-indigo-200">
                        Welcome to Our Homepage
                    </h1>
                    <button 
                        onClick={openModal}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                    >
                        Create New Post
                    </button>
                </div>

                {!isMounted ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg">Loading...</p>
                    </div>
                ) : allCards.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-600 text-lg mb-4">No posts yet.</p>
                        <button 
                            onClick={openModal}
                            className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg"
                        >
                            Create Your First Post
                        </button>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {allCards.map(card => (
                            <Card 
                                key={card.id}
                                title={card.title}
                                content={card.content}
                                image={card.image}
                                link={card.link}
                                category={card.category}
                                className={cardClassName}
                                onEdit={() => handleEditPost(card)}
                                onDelete={() => handleDeletePost(card.id)}
                            />
                        ))}
                    </div>
                )}

                <PostModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSubmit={handleNewPost}
                    initialData={editingPost || undefined}
                    mode={editingPost ? 'edit' : 'create'}
                />
            </main>
        </>
    );
};

export default HomePage;