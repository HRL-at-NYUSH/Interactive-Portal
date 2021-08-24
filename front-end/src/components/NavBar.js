import React from 'react';
import Link from './Link';
import headerNavLinks from '@data/headerNavLinks';
import MobileNav from './MobileNav';
import { useLocation, matchPath } from 'react-router-dom';

const NavBar = ({ isFixed }) => {
  const location = useLocation();

  const fixedHeader = ({ children }) => {
    return (
      <header
        className='fixed left-0 z-10
          py-4 shadow-md w-full
          px-2 sm:px-6 xl:px-8 
      '
      >
        <div className='flex items-center justify-between'>{children}</div>
      </header>
    );
  };

  const normalHeader = ({ children }) => {
    return (
      <header
        className='flex items-center justify-between z-10
       py-6 border-solid border-b-0 border-black shadow-lg
       px-2 sm:px-6 xl:px-8 
      '
      >
        {children}
      </header>
    );
  };

  const UsedHeader = isFixed ? fixedHeader : normalHeader;

  return (
    <UsedHeader>
      <div>
        <Link
          href='/'
          aria-label='Humanities Research Lab'
          className='mr-3 font-bold text-2xl'
        >
          Humanities Research Lab
        </Link>
      </div>
      <div className='flex items-center flex-wrap text-lg leading-5'>
        <div className='hidden lg:block'>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`transition p-1 sm:p-4 whitespace-nowrap
              ${
                !!matchPath(location.pathname, link.href)
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-600 font-medium'
              } 
                hover:text-gray-500 `}
            >
              {link.title}
            </Link>
          ))}

          <Link
            href='/login'
            className='
            transition
            whitespace-nowrap inline-flex items-center justify-center
            ml-4 px-4 py-3
            rounded-lg border border-transparent shadow-sm
            text-gray-900 hover:text-gray-500 bg-gray-200'
          >
            Login
          </Link>
          <Link
            href='/signup'
            className='
            transition
            whitespace-nowrap inline-flex items-center justify-center
            ml-4 px-4 py-3
            rounded-lg border border-transparent shadow-sm
           text-gray-900 hover:text-gray-200
           bg-accent hover:bg-accent-darker
           '
          >
            Sign up
          </Link>
        </div>

        <MobileNav />
      </div>
    </UsedHeader>
  );
};

export default NavBar;
