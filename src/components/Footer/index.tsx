import React from 'react';
import { FlipWords } from '../Ui/flip-word';
import { flipWords } from '@/contents/FlipWord';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { sosmedAccount } from '@/contents/Sosmed';

function Footer() {
  return (
    <footer className='bg-gray-900/90'>
      <div className='w-full'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent'></div>
      </div>
      <div className='w-full flex flex-col lg:flex-row items-center justify-between px-[5vw] lg:px-[10vw] py-4 font-bold text-white'>
        <div className='uppercase flex gap-1 mb-4 lg:mb-0'>
          Develop by{' '}
          <div className='gap-1 flex'>
            <span className='text-[#8847fd]'>mustofa</span>
            <span className='text-[#7a35b4]'>who</span>
          </div>
        </div>
        <div className='flex items-center justify-center gap-2 mb-4 lg:mb-0'>
          Made with{' '}
          <FlipWords words={flipWords} className='uppercase lg:w-[20vw]' />
        </div>
        <div className='flex items-center gap-5'>
          {sosmedAccount.map((sosmed) => (
            <Link
              key={sosmed.id}
              href={`${sosmed.link}`}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#8847fd]'
            >
              {sosmed.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
