import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6 mt-6">
      {/* Facebook Icon */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3C3535] rounded-full p-3 hover:bg-gray-700 transition-colors duration-200"
      >
        <FacebookIcon style={{ color: 'white' }} />
      </a>

      {/* Twitter Icon */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3C3535] rounded-full p-3 hover:bg-gray-700 transition-colors duration-200"
      >
        <TwitterIcon style={{ color: 'white' }} />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#3C3535] rounded-full p-3 hover:bg-gray-700 transition-colors duration-200"
      >
        <InstagramIcon style={{ color: 'white' }} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;