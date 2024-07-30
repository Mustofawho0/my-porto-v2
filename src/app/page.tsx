'use client';
import Image from 'next/image';
import HeroPage from '@/components/Hero';
import AboutPage from '@/components/About';
import ProjectPage from '@/components/Projects';
import ContactPage from '@/components/Contact';
import { TracingBeam } from '@/components/Ui/tracking-beam';
import { useState, useEffect } from 'react';
import LoadingScreen from '../lib/loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  });
  return (
    <main className='min-h-screen relative mx-auto antialiased overflow-hidden'>
      {isLoading ? (
        <div className='flex items-center justify-center h-screen bg-gray-900/90'>
          <span className='loading loading-spinner loading-lg bg-violet-600'></span>
        </div>
      ) : (
        <TracingBeam>
          {/* <HeroPage />
          <AboutPage /> */}
          <ProjectPage />
          {/* <ContactPage /> */}
        </TracingBeam>
      )}
    </main>
  );
}
