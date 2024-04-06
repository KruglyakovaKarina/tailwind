import { useState } from 'react';
import logo from '../assets/logo.png';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineXMark } from 'react-icons/hi2';
import { LuMenu } from 'react-icons/lu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    {
      link: 'Overview',
      path: 'overview',
    },
    { link: 'Feature', path: 'feature' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
  ];
  return (
    <div className='border-b'>
      <div className='max-w-5xl mx-auto '>
        <nav className='flex items-center justify-between text-xl my-5 mx-4'>
          <a
            href='/'
            className='text-2xl font-semibold flex items-center text-blue space-x-3'
          >
            <img src={logo} alt='xyz' className='w-10' />
            <span>XYZ</span>
          </a>

          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <a key={link} href={path} className='hover:text-gray-500'>
                {link}
              </a>
            ))}
          </ul>

          <div className='hidden md:flex space-x-12 items-center'>
            <button className='hidden lg:flex gap-2 hover:text-purple'>
              <GrLanguage className='self-center' />
              <span>Language</span>
            </button>
            <button className='bg-purple rounded px-4 py-2 transition-all duration-300 hover:text-white hover:bg-indigo-600'>
              Sign Up
            </button>
          </div>

          <div className='md:hidden  mt-2'>
            <button onClick={toggleMenu} className='text-2xl'>
              {isMenuOpen ? (
                <HiOutlineXMark className='w-6 h-6 text-blue' />
              ) : (
                <LuMenu className='w-6 h-6 text-blue' />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`space-y-4 px-8 pt-5 pb-5 bg-purple ${
            isMenuOpen ? '' : 'hidden'
          }`}
        >
          {navItems.map(({ link, path }) => (
            <a key={link} href={path} className='block text-xl'>
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
