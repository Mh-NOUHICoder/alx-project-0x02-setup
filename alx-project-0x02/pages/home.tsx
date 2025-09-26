import react from 'react';
import Header from "@/components/layout/Header";

export default function HomePage() {
    return (
        <>
        <Header />
        <main className="max-w-3xl mx-auto p-8">
            <h1 className="text-4xl font-semibold mb-4">Home</h1>
            <p className="text-gray-600">
            This is the Home page. If you see this, the route is working and the default export is a valid React component.
            </p>
        </main>
        </>
    );
}