import React from "react";
import FolderOutlined from "@mui/icons-material/FolderOutlined"; // Import the outlined folder icon
import values from "@/data/coreValuesData.json";

const CoreValues: React.FC = () => {
  return (
    <div className="max-w-6xl m-auto mt-10">
      {values.map((value, index) => (
        <div
          key={index}
          className="flex items-center py-6 border-b border-gray-300 last:border-0 gap-6"
        >
          {/* Outlined Folder Icon */}
          <div className="flex-1 w-20">
            <FolderOutlined className="text-gray-500 " fontSize="large" />
          </div>

          {/* Title and Description Container */}
          <div className="flex-1">
            <div className="flex items-center gap-6">
              {/* Title */}
              <h3 className="text-lg text-left font-bold text-gray-800">{value.title}</h3>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-6">
              {/* Description */}
              <p className="text-base text-gray-600">{value.description}</p>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CoreValues;