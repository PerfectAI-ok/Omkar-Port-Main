import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // or use any icon library
import Image from 'next/image'; // Ensure you have next/image for optimized images

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed w-[90%] max-w-6xl mx-auto left-0 right-0 top-5 z-[1000] glass backdrop-blur-xl  text-gray-300 border navbar-gradient-border rounded-4xl px-4 py-3 bg-transparent transform-3d'>
      <div className='flex justify-between items-center'>
        <div className='text-2xl font-bold'>Omkar Kathile</div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:items-center space-x-6 font-medium'>
          <li className='cursor-pointer hover:text-white'>Home</li>
          {/* <li className='cursor-pointer hover:text-white'>About</li> */}
          <li className='cursor-pointer hover:text-white'>Projects</li>
          <li className='cursor-pointer hover:text-white'>Contact</li>
          <a href='https://leetcode.com/u/Omkar_Kathile12/'><Image src='/lc.png' alt='leetcode' width={40} height={40}/></a>
           <a href='https://github.com/OmkarKathile007' ><Image src='/github.png' alt='github'  width={40} height={40}/></a>
        </ul>

        {/* Mobile Icon */}
        <div className='md:hidden'>
          {isOpen ? (
            <X onClick={() => setIsOpen(false)} className='cursor-pointer' />
          ) : (
            <Menu onClick={() => setIsOpen(true)} className='cursor-pointer' />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className='md:hidden mt-4 flex flex-col md:justify-center  space-y-3 text-center font-medium'>
          <li className='cursor-pointer hover:text-white'>Home</li>
          <li className='cursor-pointer hover:text-white'>About</li>
          <li className='cursor-pointer hover:text-white'>Projects</li>
          <li className='cursor-pointer hover:text-white'>Contact</li>
         
        </ul>
      )}
    </div>
  );
};


