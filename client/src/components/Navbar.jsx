import { useState } from 'react';
import logo from '../assets/logo.png';
import { GrLanguage } from 'react-icons/gr';
import { HiOutlineXMark } from 'react-icons/hi2';
import { LuMenu } from 'react-icons/lu';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState('en');

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navItems = [
    {
      link: t('navbarOverview'),
      path: 'overview',
    },
    { link: t('navbarFeatures'), path: 'feature' },
    { link: t('navbarAbout'), path: 'about' },
    { link: t('navbarPricing'), path: 'pricing' },
  ];

  const navigate = useNavigate();

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
              <Link
                key={link}
                activeClass='active'
                to={path}
                smooth={true}
                spy={true}
                offset={-100}
                className='hover:text-gray-500'
              >
                {link}
              </Link>
            ))}
          </ul>

          <div className='hidden md:flex space-x-12 items-center'>
            <button
              onClick={() => {
                language === 'en'
                  ? (changeLanguage('ru'), setLanguage('ru'))
                  : (changeLanguage('en'), setLanguage('en'));
              }}
              className='hidden lg:flex gap-2 hover:text-purple'
            >
              <GrLanguage className='self-center' />
              <span>{t('navbarLanguage')}</span>
            </button>
            <button
              onClick={() => {
                navigate('/signUp');
              }}
              className='bg-purple rounded w-28 py-2 transition-all duration-300 hover:text-white hover:bg-indigo-600'
            >
              {t('navbarSignUp')}
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
            <Link
              key={link}
              to={path}
              smooth={true}
              spy={true}
              offset={-40}
              className='block text-xl'
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
