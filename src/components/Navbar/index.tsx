'use client';
import { useState } from 'react';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdClose } from 'react-icons/md';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='flex justify-between items-center sm:px-[10vw] px-4 py-5 bg-gray-900/90 text-white'>
        <Link href='/'>
          <div className='font-semibold flex gap-1 tracking-widest'>
            <span className='text-[#8847fd]'>MUSTOFA</span>
            <span className='text-[#7a35b4]'>WHO</span>
          </div>
        </Link>
        <div className='hidden lg:block'>
          <ul className='flex gap-5 tracking-wide font-semibold'>
            <li>
              <Link
                href={'#about'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
              >
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link
                href={'#project'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
              >
                <span>PROJECTS</span>
              </Link>
            </li>
            <li>
              <Link
                href={'#contact'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
              >
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className='lg:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <MdClose size={24} /> : <RxHamburgerMenu size={24} />}
          </button>
        </div>
      </nav>
      <div className='w-full'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent'></div>
      </div>
      {isOpen && (
        <div className='lg:hidden bg-gray-900/90 text-white'>
          <ul className='flex flex-col items-center gap-5 py-5 tracking-wide font-semibold'>
            <li>
              <Link
                href={'#about'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
                onClick={() => setIsOpen(false)}
              >
                <span>ABOUT</span>
              </Link>
            </li>
            <li>
              <Link
                href={'#project'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
                onClick={() => setIsOpen(false)}
              >
                <span>PROJECTS</span>
              </Link>
            </li>
            <li>
              <Link
                href={'#contact'}
                className={
                  'hover:text-[#8847fd] hover:shadow-lg hover:shadow-purple-600/60'
                }
                onClick={() => setIsOpen(false)}
              >
                <span>CONTACT</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
