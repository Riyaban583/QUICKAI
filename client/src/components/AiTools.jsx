import React from "react";
import { AiToolsData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const AiTools = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div className="px-4 sm:px-20 xl:px-32 my-24">
      
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-slate-800 text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
          Powerful AI Tools
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Everything you need to create, enhance, and optimize content with AI.
        </p>
      </div>

      {/* Enhanced Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {AiToolsData.map((tool, index) => {
          if (!tool.icon) return null;

          const ToolIcon = tool.icon;

          return (
            <div
              key={index}
              onClick={() => user && navigate(tool.path)}
              className="group relative p-8 rounded-2xl bg-white shadow-md border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Subtle background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="inline-block mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <ToolIcon
                    className="w-14 h-14 p-3.5 text-white rounded-xl shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${tool.bg.from}, ${tool.bg.to})`,
                    }}
                  />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors">
                  {tool.description}
                </p>

                {/* Arrow indicator on hover */}
                <div className="mt-6 flex items-center text-sm font-medium text-gray-400 group-hover:text-slate-700 transition-colors">
                  <span className="mr-2">Explore</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AiTools;