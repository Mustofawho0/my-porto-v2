'use client';
import Image from 'next/image';
import { CardStack } from '../Ui/card-stack';
import { cardProject } from '@/contents/CardProjects';
import { cardExperiences } from '@/contents/CardExperiences';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function ProjectPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='bg-gray-900/90'>
      <div className='min-h-screen sm:px-[10vw] px-4'>
        <div id='project' className='flex py-14'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 w-full '>
            <div data-aos='fade-up' className='flex flex-col'>
              <span className='uppercase text-white tracking-wider text-2xl font-semibold underline underline-offset-2 decoration-pink-500'>
                project
              </span>
              <div className='flex items-center justify-center pt-5 '>
                <Image
                  src={'/test.svg'}
                  alt='project'
                  width={10000}
                  height={10000}
                  loading='lazy'
                  className='w-96 h-96 object-cover'
                />
              </div>
            </div>
            <div
              data-aos='fade-down'
              className='h-[30rem] flex items-center justify-center'
            >
              <CardStack items={cardProject} />
            </div>
          </div>
        </div>
        <div className='flex pb-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 w-full '>
            <div data-aos='fade-down' className='flex flex-col'>
              <span className='uppercase text-white tracking-wider text-2xl font-semibold underline underline-offset-2 decoration-pink-500'>
                experiences
              </span>
              <div className='flex items-center justify-center h-[30rem]'>
                <CardStack items={cardExperiences} />
              </div>
            </div>
            <div
              data-aos='fade-up'
              className='flex text-white items-center justify-center pt-5'
            >
              <Image
                src={'/experiences.jpg'}
                alt='project'
                width={10000}
                height={10000}
                loading='lazy'
                className='w-96 h-96 object-cover'
              />
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
export default ProjectPage;
