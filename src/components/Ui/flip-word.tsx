'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion, LayoutGroup } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FlipWords = ({
  words,
  duration = 5000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [animated, setAnimated] = useState<Boolean>(false);

  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setAnimated(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!animated) {
      setTimeout(() => {
        startAnimation();
      }, duration);
    }
  }, [animated, duration, startAnimation]);
  return (
    <AnimatePresence
      onExitComplete={() => {
        setAnimated(false);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 10,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',

          position: 'absolute',
        }}
        className={cn(' ', className)}
        key={currentWord}
      >
        {currentWord.split('').map((char, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            className='inline-block mb-5 text-pink-500'
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
