import React from 'react';
import Link from './Link';
import { QuestionMarkCircleIcon } from '@heroicons/react/solid';

function Footer() {
  return (
    <footer className='mt-6 px-4 md:px-32 py-12 bg-gray-200 '>
      <div className='grid grid-cols-2 pb-8'>
        <div>Logo</div>
        <div>
          <div>New York University Shanghai</div>
          <div>1555 Century Avenue, Shanghai, China</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
