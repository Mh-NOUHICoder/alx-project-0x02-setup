// pages/posts.tsx
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import { useCards } from '@/hooks/useCards';
import PostModal from '@/components/common/PostModal';
import { CardItem, PostData } from '@/interfaces';
import Button from '@/components/common/Button';

const PostsPage: React.FC = () => {
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

    const handleSubmitPost = (postData: PostData) => {
        if (editingPost) {
            // Update existing post
            setPosts(posts.map(post => 
                post.id === editingPost.id 
                    ? { 
                        ...post, 
                        title: postData.title,
                        content: postData.content,
                        image: postData.image || '',
                        category: postData.category,
                        link: post.link // Keep existing link
                    }
                    : post
            ));
        } else {
            // Create new post
            const newPost: CardItem = {
                id: Date.now(),
                title: postData.title,
                content: postData.content,
                image: postData.image || '',
                category: postData.category,
                link: `/post/${Date.now()}` // Create a proper link
            };
            setPosts([...posts, newPost]);
        }
        closeModal();
    };

    const handleEditPost = (post: CardItem) => {
        setEditingPost(post);
        setIsModalOpen(true);
    };

    const handleDeletePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    // Prepare initial data for edit mode
    const getInitialData = (): PostData | undefined => {
        if (!editingPost) return undefined;
        
        return {
            title: editingPost.title,
            content: editingPost.content,
            image: editingPost.image,
            category: editingPost.category
        };
    };

    // Combine hook data with user posts for display
    const allPosts = [...cardsData, ...posts];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Posts</h1>
                    <Button 
                        text="Create New Post"
                        onClick={openModal}
                        color="primary"
                        size="medium"
                        shape="rounded-md"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPosts.map((post) => (
                        <Card
                            key={post.id}
                            title={post.title}
                            content={post.content}
                            image={post.image}
                            link={post.link}
                            category={post.category}
                            className={cardClassName}
                            onEdit={() => handleEditPost(post)}
                            onDelete={() => handleDeletePost(post.id)}
                        />
                    ))}
                    
                    {allPosts.length === 0 && (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-500 text-lg">No posts yet. Create your first post!</p>
                        </div>
                    )}
                </div>

                {isModalOpen && (
                    <PostModal
                        isOpen={isModalOpen}
                        onClose={closeModal}
                        onSubmit={handleSubmitPost}  // Changed from onSave to onSubmit
                        initialData={getInitialData()}
                        mode={editingPost ? 'edit' : 'create'}
                    />
                )}
            </main>
        </div>
    );
}

export default PostsPage;