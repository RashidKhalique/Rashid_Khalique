import React, { useEffect, useState } from 'react';
import assets from '../assets/assets';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMenu]);

  return (
    <nav className="absolute top-4 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-0 lg:px-32 bg-transparent rounded-full shadow-md">
        <img
          src="https://res.cloudinary.com/cloudpip/image/upload/v1742884044/vm8nqibpfvcwbp0lvytf.png"
          alt="Logo"
          className="w-10"
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 text-white">
          {['Home', 'About', 'Services', 'Project', 'Testimonial'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="cursor-pointer hover:text-gray-400 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button className="hidden md:block bg-white text-[#2C5036] px-8 py-2 rounded-full hover:bg-gray-100 transition">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          alt="Menu Icon"
          className="md:hidden w-7 cursor-pointer"
          onClick={() => setShowMenu(true)}
        />
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-transform transform ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            alt="Close Icon"
            className="w-6 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-4 mt-5 text-lg font-medium">
          {['Home', 'About', 'Services', 'Project', 'Testimonial'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="px-4 py-2 inline-block rounded-full hover:bg-gray-200 transition"
                onClick={() => setShowMenu(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;