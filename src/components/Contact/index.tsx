'use client';
import React from 'react';
import { Label } from '../Ui/label';
import { Input } from '../Ui/input';
import { cn } from '@/lib/utils';
import PhoneContactMe from '../3D/FloatingPhone';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Your message has been sent to My Gmail!');
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className='bg-gray-900/90'>
      <div className='min-h-screen sm:px-[10vw] px-4'>
        <div id='contact' className='flex pt-28'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 gap-y-8 w-full'>
            <div
              data-aos='zoom-in'
              className='rounded-lg from-[#0d1224] border-[#1b2c68a0] relative border bg-gradient-to-r to-[#0a0d37]'
            >
              <div className='flex'>
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-500'></div>
                <div className='h-[1px] w-full bg-gradient-to-r from-violet-500 to-transparent'></div>
              </div>
              <div className='p-10'>
                <h2 className='font-bold text-2xl text-white'>Get in Touch</h2>
                <p className='text-white text-sm pt-2 '>
                  If you have any questions, please don't hesitate to contact
                  me. I am open to any work opportunities that align with my
                  skills and interests.
                </p>
                <form className='py-8' onSubmit={handleSubmit}>
                  <div className='flex flex-col md:flex-row pb-6'>
                    <LabelInputContainer>
                      <Label htmlFor='firstname' className='text-white'>
                        Your Name
                      </Label>
                      <Input id='firstname' type='text' />
                    </LabelInputContainer>
                  </div>
                  <LabelInputContainer className='pb-6 text-white'>
                    <Label htmlFor='email' className='text-white'>
                      Your Email Address
                    </Label>
                    <Input id='email' type='email' />
                  </LabelInputContainer>

                  <LabelInputContainer className='pb-7 text-white'>
                    <Label htmlFor='message' className='text-white'>
                      {' '}
                      Your Message
                    </Label>
                    <Input id='message' type='text' />
                  </LabelInputContainer>
                  <div className='flex items-center justify-center'>
                    <button className='px-6 py-2 font-medium bg-violet-600 rounded-lg text-white transition-all shadow-[3px_3px_0px_var(--pink-500)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] w-full'>
                      Send Message &rarr;
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              data-aos='zoom-in'
              className='flex justify-center items-center'
            >
              <PhoneContactMe />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('flex flex-col gap-2 w-full', className)}>
      {children}
    </div>
  );
};
export default ContactPage;
