// pages/about.tsx
import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
    <Header />
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-4">About</h1>
      <p className="text-gray-600">
        This is the About page. If you see this, the route is working and the default export is a valid React component.
      </p>
      <div>
        <Button 
          text="small button" 
          onClick={() => window.location.href = '/'} 
          size="small" 
          shape="rounded-sm" 
          color="gray" 
        />

        <Button 
          text="Go Back Home" 
          onClick={() => window.location.href = '/'} 
          size="medium" 
          shape="rounded-md" 
          color="success"
        />

        <Button 
          text="large button" 
          onClick={() => window.location.href = '/'}    
          size="large"  
          shape="rounded-lg" 
          color="primary"
        />
      </div>
    </main>
    </>
  );
}
