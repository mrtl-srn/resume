import React from "react";

export type CodeZoneProps = {
  children: React.ReactNode;
  showGradient?: boolean;
};

export function CodeZone({ children, showGradient = false }: CodeZoneProps) {
  return (
    <div className="relative">
      <div className="dark:bg-slate-900 px-3 md:px-6 py-3 rounded-md">
        {children}
      </div>
      {showGradient && (
        <div className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none bg-gradient-to-l from-slate-900 to-transparent rounded-r-md" />
      )}
    </div>
  );
}
