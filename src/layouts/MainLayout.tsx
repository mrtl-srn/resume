// filepath: /cv-website/cv-website/src/layouts/MainLayout.tsx
import React from 'react';
import Header from '../components/Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;