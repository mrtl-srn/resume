import React from "react";
import { Header } from "../components/Header";

import profile from "../data/profile.json";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`min-h-screen min-w-sm flex flex-col space-y-20 text-white `}
    >
      <Header profile={profile} />

      <main className="flex-grow container mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col gap-y-20 mb-20">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
