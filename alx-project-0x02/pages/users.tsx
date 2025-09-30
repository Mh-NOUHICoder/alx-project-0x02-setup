// pages/users.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

// Fetch users from the API at build time
async function getUsers(): Promise<UserProps[]> {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
    }
    
    const users = await res.json();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error('Unable to load users. Please try again later.');
  }
}

// This function runs at build time on the server-side
export async function getStaticProps() {
  try {
    const users = await getUsers();
    
    return {
      props: {
        users,
      },
      // Re-generate the page at most once every 60 seconds if needed
      // revalidate: 60,
    };
  } catch (error) {
    // If there's an error, return empty users array
    return {
      props: {
        users: [],
      },
    };
  }
}

// The page component receives users as a prop from getStaticProps
export default function UsersPage({ users }: { users: UserProps[] }) {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Users</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet our amazing community of users. Discover their profiles and connect with them.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{users.length}</div>
              <div className="text-gray-600 font-medium">Total Users</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {users.filter(user => user.email.includes('.com')).length}
              </div>
              <div className="text-gray-600 font-medium">Active Accounts</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {new Set(users.map(user => user.address.city)).size}
              </div>
              <div className="text-gray-600 font-medium">Cities</div>
            </div>
          </div>

          {/* Users Grid */}
          {users.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👥</div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Users Found</h2>
              <p className="text-gray-500">There are currently no users to display.</p>
            </div>
          ) : (
            <>
              {/* Search and Filter Section (Placeholder for future functionality) */}
              <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled
                    title="Search functionality coming soon"
                  />
                </div>
                <div className="flex gap-2">
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                    disabled
                    title="Filter functionality coming soon"
                  >
                    Filter
                  </button>
                  <button 
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
                    disabled
                    title="Sort functionality coming soon"
                  >
                    Sort
                  </button>
                </div>
              </div>

              {/* Users Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {users.map((user) => (
                  <UserCard key={user.id} {...user} />
                ))}
              </div>

              {/* Footer Stats */}
              <div className="mt-12 text-center text-gray-500">
                <p>Showing {users.length} users</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

