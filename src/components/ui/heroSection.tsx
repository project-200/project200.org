import React from "react";

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  description: string;
  videoUrl?: string; 
  linkText?: string; 
  linkUrl?: string; 
}

const HeroSection: React.FC<HeroSectionProps> = ({
  imageUrl,
  title,
  description,
  videoUrl,
  linkText,
  linkUrl,
}) => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-white flex flex-col lg:flex-row items-center justify-between max-w-6xl w-full px-6 lg:px-12">
        {/* Left Side */}
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg">{description}</p>
        </div>

        {/* Right Side */}
        <div className="mt-8 lg:mt-0 lg:ml-12 flex flex-col items-center">
          {videoUrl && (
            <div className="relative w-64 h-36">
              <iframe
                className="w-full h-full rounded-lg border-2 border-red-500"
                src={videoUrl}
                title="Embedded Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {linkUrl && linkText && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 text-red-500 underline hover:text-red-300"
            >
              {linkText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
