import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50 animate-fadeIn">
      
      {/* Glow ring animation */}
      <div className="relative flex items-center justify-center mb-6">
        <div className="absolute w-28 h-28 rounded-full bg-gray-500 opacity-20 blur-2xl animate-ping" />
        <div className="absolute w-20 h-20 rounded-full bg-gray-400 opacity-30 blur-xl animate-pulse" />
        
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-gray-600 border-t-gray-300 rounded-full animate-spin" />
      </div>

      {/* Loading text with light grey gradient */}
      <p className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 text-transparent bg-clip-text animate-slideUp">
        Your Playground is Loading
        <span className="animate-dots"></span>
      </p>
    </div>
  );
};

export default Loading;
