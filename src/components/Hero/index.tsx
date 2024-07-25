'use client';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFileDownload,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';
import { GrContactInfo } from 'react-icons/gr';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Image from 'next/image';
function HeroPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='bg-gray-900/90'>
      <div className='min-h-screen sm:px-[10vw] px-4'>
        <div className='flex items-center justify-center text-white mobile:text-sm'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 w-full mt-[10vw]'>
            <div
              className='font-bold lg:text-5xl tracking-wide mobile:text-xl text-4xl  '
              data-aos='fade-right'
            >
              <h1>Hello,</h1>
              <h1 className='py-3'>
                This is <span className=''>Nurul Musthofa</span>,
              </h1>
              I'am a <span className=''>Junior Web Developer</span>
              <div className='flex py-10 gap-10'>
                <Link
                  href='https://github.com/Mustofawho0'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub
                    size={40}
                    className='transition hover:-translate-y-2 hover:scale-110 hover:text-pink-500 cursor-pointer '
                  />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/nurul-musthofa/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedin
                    size={40}
                    className='transition hover:-translate-y-2 hover:scale-110 hover:text-pink-500 cursor-pointer'
                  />
                </Link>
                <Link
                  href='https://www.instagram.com/mustofawho/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaInstagram
                    size={40}
                    className='transition hover:-translate-y-2 hover:scale-110 hover:text-pink-500 cursor-pointer'
                  />
                </Link>
                <Link
                  href='https://x.com/mustofawho'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaXTwitter
                    size={40}
                    className='transition hover:-translate-y-2 hover:scale-110 hover:text-pink-500 cursor-pointer'
                  />
                </Link>
              </div>
              <div className='flex gap-5 items-center w-full'>
                <Link
                  href={'#'}
                  className='bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full hover:from-pink-500 hover:to-violet-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                >
                  <button className='border-none px-5 py-2 rounded-full h-[5vh] sm:text-lg xl:text-lg lg:text-sm mobile:text-xs flex gap-1 items-center bg-black shadow-lg shadow-pink-500/60 justify-center'>
                    <span className=''>Get Resume</span>{' '}
                    <MdOutlineFileDownload size={25} className='' />
                  </button>
                </Link>
                <Link
                  href={'#'}
                  className='bg-gradient-to-r to-violet-600 from-pink-500 p-[1px] rounded-full hover:from-violet-600 hover:to-pink-500 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105'
                >
                  <button className='border-none px-5 py-2 rounded-full h-[5vh] sm:text-lg xl:text-lg lg:text-sm mobile:text-xs flex gap-2 items-center bg-black shadow-lg shadow-pink-500/60 justify-center'>
                    <span className=''>Contact Me</span>{' '}
                    <GrContactInfo size={25} className='' />
                  </button>
                </Link>
              </div>
            </div>
            <div
              data-aos='fade-left'
              className='from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'
            >
              <div className='flex flex-row'>
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-500'></div>
                <div className='h-[1px] w-full bg-gradient-to-r from-violet-500 to-transparent'></div>
              </div>
              <div className='px-4 py-5'>
                <div className='flex gap-2 items-center'>
                  <div className='h-3 w-3 rounded-full bg-red-500'></div>
                  <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                  <div className='h-3 w-3 rounded-full bg-green-500'></div>
                  <span className='tracking-wider text-sm font-semibold text-center mobile:text-xs text-green-400 sm:ml-[20vw] xxl:ml-[11vw] lg:ml-[5vw] mobile:ml-[9vw] xl:ml-[7vw]'>
                    index.tsx{' '}
                    <span className='text-green-400/60 ml-1 mobile:text-xs'>
                      ...\Coder
                    </span>
                  </span>
                </div>
              </div>
              <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4'>
                <code className='text-lg'>
                  <div className='blink'>
                    <span className='mr-2 sm:ml-8 mobile:ml-2 text-red-500 mobile:text-sm'>
                      const
                    </span>
                    <span className='mr-2 text-blue-500 mobile:text-sm'>
                      coder
                    </span>
                    <span className='mr-2 text-red-500'>=</span>
                    <span className='text-orange-500'>&#123;</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-6 mr-2 text-white mobile:text-sm'>
                      name:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>
                      'NURUL MUSTHOFA'
                    </span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-6 mr-2 text-white mobile:text-sm'>
                      hardWorker:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-6 mr-2 text-white mobile:text-sm'>
                      problemSolver:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-6 mr-2 text-white mobile:text-sm'>
                      teamPlayer:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>true</span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-6 mr-2 text-violet-500 mobile:text-sm'>
                      hireable:
                    </span>
                    <span className='text-red-500 mobile:text-sm'>
                      function
                    </span>
                    <span className='text-violet-500'>&#40;&#41;</span>
                    <span className='text-violet-500'> &#123;</span>
                  </div>
                  <div>
                    <span className='sm:ml-20 mobile:ml-10 mr-2 text-red-500 mobile:text-sm'>
                      return
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>&#40;</span>
                  </div>
                  <div>
                    <span className='sm:ml-24 mobile:ml-14 text-blue-500 mobile:text-sm'>
                      this
                    </span>
                    <span className='mr-2 mobile:text-sm'>.hardWorker</span>
                    <span className='text-red-500 mobile:text-sm'>&&</span>
                  </div>
                  <div>
                    <span className='sm:ml-24 mobile:ml-14 text-blue-500 mobile:text-sm'>
                      this
                    </span>
                    <span className='mr-2 mobile:text-sm'>.problemSolver</span>
                    <span className='text-red-500 mobile:text-sm'>&&</span>
                  </div>
                  <div>
                    <span className='sm:ml-24 mobile:ml-14 text-blue-500 mobile:text-sm'>
                      this
                    </span>
                    <span className='mr-2 mobile:text-sm'>.teamPlayer</span>
                    <span className='text-red-500 mobile:text-sm'>&&</span>
                  </div>
                  <div>
                    <span className='sm:ml-20 mobile:ml-10 text-blue-500 mobile:text-sm'>
                      &#41;
                    </span>
                    <span>;</span>
                  </div>
                  <div>
                    <span className='sm:ml-16 mobile:ml-7 text-violet-500'>
                      &#125;
                    </span>
                    <span>;</span>
                  </div>
                  <div>
                    <span className='sm:ml-12 mobile:ml-4 text-orange-500'>
                      &#125;
                    </span>
                    <span>;</span>
                  </div>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent '></div>
      </div>
    </div>
  );
}
export default HeroPage;
