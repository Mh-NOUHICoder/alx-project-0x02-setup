// pages/posts.tsx
import { GetStaticProps } from 'next';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

// This function runs at build time on the server
export const getStaticProps: GetStaticProps = async () => {
  try {
    // Fetch data from JSONPlaceholder API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await res.json();

    // Return the fetched data as props
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    // Handle errors gracefully
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [], // Return empty array on error
      },
    };
  }
};

// The page component receives the posts as a prop
export default function PostsPage({ posts }: { posts: PostProps[] }) {
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
            />
          ))}
        </div>
      </main>
    </div>
  );
}