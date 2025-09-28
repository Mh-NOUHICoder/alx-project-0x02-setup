// pages/home.tsx
import React, { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import { useCards } from "@/hooks/useCards";
import PostModal from "@/components/common/PostModal";
import { CardItem, PostData } from '@/interfaces';
import Button from '@/components/common/Button';

const HomePage: React.FC = () => {
    const { cardsData, cardClassName } = useCards();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [posts, setPosts] = useState<CardItem[]>([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem('userPosts');
        if (savedPosts) setPosts(JSON.parse(savedPosts));
    }, []);

    const handleNewPost = (postData: PostData) => {
        const newPost: CardItem = {
            id: Date.now(),
            title: postData.title,
            content: postData.content,
            image: postData.image || "https://via.placeholder.com/400x200",
            link: `/post/${Date.now()}`,
            category: postData.category,
        };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem('userPosts', JSON.stringify(updatedPosts));
    };

    const allCards = [...posts, ...cardsData];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            <main className="max-w-6xl mx-auto pb-6 sm:pb-8">
                    {/* Hero Section */}
                    <div 
                    className="text-center py-34 mb-12 bg-cover bg-center bg-no-repeat shadow-lg relative overflow-hidden w-screen relative left-1/2 right-1/2 -mx-[50vw]"
                    style={{ backgroundImage: 'url("https://images.pexels.com/photos/4614774/pexels-photo-4614774.jpeg")' }}
                    >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 "></div>
                    
                    {/* Content */}
                    <div className="relative z-10 max-w-6xl mx-auto px-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Welcome to Our Platform
                        </h1>
                        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-8">
                        Discover amazing content and stories from our community. 
                        Create and share your own posts with everyone.
                        </p>
                        <Button 
                        text="Create Your First Post"
                        onClick={() => setIsModalOpen(true)}
                        color="primary"
                        size="large"
                        shape="rounded-lg"
                        />
                    </div>
                    </div>

                {/* Posts Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Featured Posts
                    </h2>
                    
                    {allCards.length === 0 ? (
                        <div className="text-center py-12 bg-white rounded-2xl shadow-sm">
                            <p className="text-gray-500 text-lg">No posts yet. Create your first post!</p>
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
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{allCards.length}</div>
                        <div className="text-gray-600">Total Posts</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="text-2xl font-bold text-green-600 mb-2">{posts.length}</div>
                        <div className="text-gray-600">Your Posts</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-2">{cardsData.length}</div>
                        <div className="text-gray-600">Featured Posts</div>
                    </div>
                </div>
            </main>

            <PostModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleNewPost}
            />
        </div>
    );
};

export default HomePage;