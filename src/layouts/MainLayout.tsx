import React from "react";
import Header from "../components/Header";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`min-h-screen min-w-sm flex flex-col dark:bg-slate-800 dark:text-white `}
    >
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="max-w-6xl mx-auto py-12 space-y-20">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
