'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  useTransform,
  useScroll,
  useVelocity,
  useSpring,
} from 'framer-motion';
import { cn } from '@/lib/utils';

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight);
    }
  }, []);

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.div ref={ref} className={cn('relative w-full h-full', className)}>
      <div className='absolute -left-4 top-3'>
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            boxShadow:
              scrollYProgress.get() > 0
                ? 'none'
                : 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
          className='sm:ml-10 mobile:ml-5 sm:h-4 sm:w-4 h-2.5 w-2.5 rounded-full border border-violet-600 shadow-sm flex items-center justify-center'
        >
          <motion.div
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            animate={{
              backgroundColor:
                scrollYProgress.get() > 0 ? 'white' : 'var(--violet-600)',
              borderColor:
                scrollYProgress.get() > 0 ? 'white' : 'var(--violet-600)',
            }}
            className='sm:h-2 sm:w-2 h-1.5 w-1.5  rounded-full border border-violet-600 bg-violet-600'
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width='20'
          height={svgHeight}
          className='sm:ml-7 mobile:ml-1.5'
          aria-hidden='true'
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke='#9091A0'
            strokeOpacity='0.16'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill='none'
            stroke='url(#gradient)'
            strokeWidth='1.25'
            className='motion-reduce:hidden'
            transition={{
              duration: 10,
            }}
          ></motion.path>
          <defs>
            <motion.linearGradient
              id='gradient'
              gradientUnits='userSpaceOnUse'
              x1='0'
              x2='0'
              y1={y1}
              y2={y2}
            >
              <stop stopColor='#18CCFC' stopOpacity='0'></stop>
              <stop stopColor='#18CCFC'></stop>
              <stop offset='0.325' stopColor='#6344F5'></stop>
              <stop offset='1' stopColor='#AE48FF' stopOpacity='0'></stop>
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
