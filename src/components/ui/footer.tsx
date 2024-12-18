import React from 'react';
import SocialMediaIcons from './socialMedia';

const Footer: React.FC = () => {
  return (
    <footer className="bg-default-black text-white py-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-4 mb-20">

        {/* Left Side */}
        <div className="p-4">
          <h3 className="text-xl font-bold py-4 text-left mt-10">Project 200</h3>
          <p className="mb-4 text-left">hi@project200.com</p>
          <SocialMediaIcons/>
        </div>

        {/* Right Side */}
        <div className="text-left">
          <h3 className="text-xl font-bold">Stay Informed</h3>
          <p className="mt-2 text-sm">
            Sign up for our newsletter to receive updates on our projects and how you can contribute.
          </p>
        </div>
        
      </div>

      {/* Bottom Links */}
      <div className="text-center mt-4">
        <p className="text-sm">
          <a href="#" className="hover:text-gray-400">Terms of service</a> |{" "}
          <a href="#" className="hover:text-gray-400">Privacy policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;