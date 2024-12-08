import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-6">
      {/* Facebook Icon */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        <FacebookIcon/>
      </a>

      {/* Twitter Icon */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        <TwitterIcon/>
      </a>

      {/* Instagram Icon */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition-colors duration-200"
      >
        <InstagramIcon/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;