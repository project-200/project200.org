"use client";

import React, { useState } from "react";
import faqData from "@/data/faq.json";

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenItem((prevOpenItem) => (prevOpenItem === id ? null : id));
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      {faqData.map((item) => (
        <div key={item.id} className="border-b border-slate-300">
          <button
            onClick={() => toggleFAQ(item.id)}
            className="w-full flex justify-between items-center py-5 text-slate-800"
          >
            <span>{item.question}</span>
            <span
              className={`text-slate-800 transition-transform duration-300 ${
                openItem === item.id ? "rotate-180" : ""
              }`}
            >
              {openItem === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openItem === item.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pb-5 text-sm text-slate-500">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;