'use client';
import { motion } from 'framer-motion';
import { FiBatteryCharging, FiWifi } from 'react-icons/fi';
import {
  MdOutgoingMail,
  MdOutlinePhoneIphone,
  MdLocationPin,
} from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';

const PhoneContactMe = () => {
  return (
    <section className='grid place-content-center p-12'>
      <FloatingPhone />
    </section>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: 'preserve-3d',
        transform: 'rotateY(-30deg) rotateX(15deg)',
      }}
      className='rounded-[24px] bg-violet-600'
    >
      <motion.div
        initial={{
          transform: 'translateZ(8px) translateY(-2px)',
        }}
        animate={{
          transform: 'translateZ(32px) translateY(-8px)',
        }}
        transition={{
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 2,
          ease: 'easeInOut',
        }}
        className='relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]'
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className='absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900'></div>
      <div className='absolute right-3 top-2 z-10 flex gap-2'>
        <FiWifi className='text-neutral-600' />
        <FiBatteryCharging className='text-neutral-600' />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className='relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white'>
      <div className='flex flex-col gap-1 px-2'>
        <span className='text-xs font-bold text-black flex items-center gap-2'>
          <MdOutgoingMail size={15} />
          mustofawho12@gmail.com
        </span>
        <span className='text-xs font-bold text-black flex items-center gap-2'>
          <MdOutlinePhoneIphone size={15} />
          +62 89632308534
        </span>
        <span className='text-xs font-bold text-black flex items-center gap-2'>
          <MdLocationPin size={15} />
          Ciledug, Tangerang
        </span>
      </div>
      <Image
        src={'/contact-us-concept-illustration_114360-2299.avif'}
        alt='contact me'
        width={10000}
        height={10000}
        loading='lazy'
        className='w-full h-52 object-cover rounded-lg'
      />

      <Link href={'https://wa.me/6289632308534'} target={'_blank'}>
        <button className='absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] border-violet-400 bg-white py-2 text-sm font-medium text-violet-600 transition-all shadow-[3px_3px_0px_var(--violet-500)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]'>
          Contact Me
        </button>
      </Link>
    </div>
  );
};

export default PhoneContactMe;
