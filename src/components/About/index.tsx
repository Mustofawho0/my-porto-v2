'use client';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import CarouselComponents from './Carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function AboutPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='bg-gray-900/90'>
      <div className='min-h-screen sm:px-[10vw] px-4'>
        <div id='about' className='flex py-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 w-full '>
            <div
              data-aos='fade-up-right'
              className='from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'
            >
              <div className='flex'>
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-500'></div>
                <div className='h-[1px] w-full bg-gradient-to-r from-violet-500 to-transparent'></div>
              </div>
              <div className='px-4 py-5 relative'>
                <div className='flex gap-2 items-center'>
                  <div className='h-3 w-3 rounded-full bg-red-500'></div>
                  <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                  <div className='h-3 w-3 rounded-full bg-green-500'></div>
                  <span className='tracking-wider text-sm font-semibold text-center mobile:text-xs text-green-400 sm:ml-[15vw] xxl:ml-[9vw] lg:ml-[5vw] mobile:ml-[9vw] xl:ml-[7vw]'>
                    index.tsx{' '}
                    <span className='text-green-400/60 ml-1 mobile:text-xs'>
                      ...\AboutMe
                    </span>
                  </span>
                </div>
              </div>
              <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 py-4'>
                <code className='text-lg text-white'>
                  <div className='blink'>
                    <span className='mr-2 ml-4 text-red-500 mobile:text-sm'>
                      const
                    </span>
                    <span className='mr-2 text-blue-500 mobile:text-sm'>
                      aboutMe
                    </span>
                    <span className='mr-2 text-red-500'>=</span>
                    <span className='text-orange-500'>&#123;</span>
                  </div>
                  <div>
                    <span className='ml-8 mr-2 text-white mobile:text-sm'>
                      name:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>
                      'NURUL MUSTHOFA'
                    </span>
                    <span>,</span>
                  </div>
                  <div className='ml-8 mr-2'>
                    <span className='text-white mobile:text-sm'>
                      descriptions:
                    </span>
                    <span className='text-blue-500 mobile:text-sm'>
                      'I am a dedicated Junior Web Developer with skills in
                      HTML, CSS, and JavaScript, as well as basic knowledge of
                      React.js. I focus on creating responsive and intuitive
                      user experiences. I continually learn new technologies and
                      actively engage with developer communities to enhance my
                      skills. I also have basic on Backend especially on
                      Express, Node JS, and Prisma. I am available for any kind
                      of job opportunity that suits my skills and interests.'
                    </span>
                    <span>,</span>
                  </div>
                  <div>
                    <span className='ml-4 text-orange-500'>&#125;</span>
                    <span>;</span>
                  </div>
                </code>
              </div>
            </div>
            <div
              data-aos='fade-up-left'
              className=' flex justify-center items-center'
            >
              <Image
                src={'/me-copy.jpg'}
                alt='Me'
                width={10000}
                height={10000}
                className='fhd:w-[20vw] fhd:h-[20vw] object-cover rounded-lg mobile:w-[80vw] mobile:h-[80vw] sm:w-[60vw] sm:h-[60vw] lg:w-[30vw] lg:h-[30vw]'
                loading='lazy'
              />
            </div>
          </div>
        </div>
        <div data-aos='zoom-in' className=''>
          <span className='uppercase text-white tracking-wider text-2xl font-semibold underline underline-offset-2 decoration-pink-500'>
            my skills
          </span>
          <Marquee
            play={true}
            speed={80}
            loop={0}
            direction='left'
            gradient={false}
            pauseOnHover={true}
            className='pt-10'
          >
            <div className=''>
              <CarouselComponents />
            </div>
          </Marquee>
        </div>
      </div>
      <div className='w-full'>
        <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent '></div>
      </div>
    </div>
  );
}
export default AboutPage;
