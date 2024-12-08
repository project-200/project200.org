import React from "react";
import FolderIcon from "@mui/icons-material/Folder";
import values from "@/data/coreValuesData.json";

const CoreValues: React.FC = () => {


  return (
    <div className="max-w-6xl mx-auto mt-10">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex items-start py-6 border-b border-gray-300 last:border-0 gap-6"
        >
          {/* Folder Icon */}
          <div className="flex-shrink-0 w-20">
            <FolderIcon className="text-gray-500" fontSize="large" />
          </div>

          {/* Title and Description Container */}
          <div className="flex-1">
            <div className="flex items-center gap-6">
              {/* Title */}
              <h3 className="text-lg font-medium text-gray-800 flex-shrink-0">{value.title}</h3>
              {/* Description */}
              <p className="text-base text-gray-600 flex-grow">{value.description}</p>
            </div>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default CoreValues;