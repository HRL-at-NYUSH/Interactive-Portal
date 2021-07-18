import React from 'react';
import Link from './Link';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <footer className='sticky bottom-0 py-6'>
      <div className='ml-auto flex items-center justify-end text-base '>
        <Link
          href='/questions'
          className='group whitespace-nowrap inline-flex items-center justify-center px-4 py-4 border border-transparent rounded-full shadow-lg bg-gray-200'
        >
          <QuestionMarkCircleIcon className='w-8 h-8 fill-current text-green-500 group-hover:text-green-600'></QuestionMarkCircleIcon>
          <div className='hidden sm:block lg:hidden ml-2 text-base font-medium text-gray-500 group-hover:text-gray-600'>
            FAQs
          </div>
          <div className='hidden lg:block ml-2 text-base font-medium text-gray-500 group-hover:text-gray-600'>
            Frequently Asked Questions
          </div>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
