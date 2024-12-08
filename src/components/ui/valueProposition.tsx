import React from "react";
import valuePropositions from "@/data/valuePropositions.json"; 

const ValuePropositions: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {valuePropositions.map((prop, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            prop.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center justify-between my-8`}
        >
          <div className="w-full lg:w-1/2 px-6 text-center lg:text-left">
            <h2 className="text-2xl font-bold mb-4">{prop.title}</h2>
            <p className="text-gray-600">{prop.description}</p>
          </div>

          <div className="w-full lg:w-1/2 px-6">
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <img
                src={prop.imageUrl}
                alt={prop.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValuePropositions;
