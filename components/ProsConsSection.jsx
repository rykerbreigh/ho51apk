"use client"
import React from 'react'; 

const ProsConsSection = () => {

  const prosAndCons = {
    pros: [
      "Free to Download",
      "High-Quality Streaming",
      "Ad-free experience",
      "Premium unlocked features",
      "Free coins included",
      "Multi-language support",
      "Play games & tournaments",
    ],
    cons: [
      "Contains Some Adult content",
      "Complicated iOS install",
      "Addictive for some",
      "Legal/ethical concerns",
          "Limited region access",
            "Third-Party App",
    ]
  };

  return (
    <div className="transition-colors duration-300">
       
      {/* Pros and Cons Section */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto p x-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Pros and Cons of HOT51 Mod APK
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-lg p-6 border shadow-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-200/50 dark:shadow-gray-900/20">
              <h3 className="text-xl font-bold text-pink-500 mb-4 flex items-center">
                <span className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-2 font-bold">
                  ✓
                </span>
                Pros
              </h3>
              <ul className="space-y-2">
                {prosAndCons.pros.map((pro, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {pro}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg p-6 border shadow-lg transition-all duration-300 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-gray-200/50 dark:shadow-gray-900/20">
              <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
                <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm mr-2 font-bold">
                  ✗
                </span>
                Cons
              </h3>
              <ul className="space-y-2">
                {prosAndCons.cons.map((con, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                      {con}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProsConsSection;