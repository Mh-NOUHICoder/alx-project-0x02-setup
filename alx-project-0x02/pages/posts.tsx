// pages/posts.tsx
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const PostsPage: React.FC = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                setPosts(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An error occurred while fetching posts');
                }
            }finally {
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleDeletePost = (postId: number) => {
        // Implement delete logic, then update state
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
    };

    if (isLoading) return <div className="container mx-auto p-4">Loading posts...</div>;
    if (error) return <div className="container mx-auto p-4 text-red-500">Error: {error}</div>;

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">All Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content} // JSONPlaceholder uses 'body'
                            userId={post.userId}
                            onDelete={() => handleDeletePost(post.id)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default PostsPage;