'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Highlight } from './highlight';

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  imageUrl?: string;
  link?: string;
  content?: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.1;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 10000);
  };

  return (
    <div className='relative flex items-center justify-center w-full h-80 lg:pr-[30vw] xxl:pr-[30vw] fhd:pr-[22vw] mobile:pr-[85vw] sm:pr-[80vw] md:pr-[70vw]'>
      {cards.map((card, index) => {
        return card.imageUrl ? (
          <Link href={`${card.link}`} target='blank' key={card.id}>
            <motion.div
              key={card.id}
              className='absolute from-[#0d1224] border-[#1b2c68a0] bg-gradient-to-r to-[#0a0d37] rounded-3xl  shadow-xl border xxl:w-[30vw] fhd:w-[25vw] lg:w-[30vw] mobile:w-[85.5vw] sm:w-[80vw] md:w-[70vw] mobile:h-80 lg:h-80 xxl:h-96 fhd:h-96 shadow-black/[0.1] flex flex-col justify-between'
              style={{
                transformOrigin: 'top center',
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <div className='flex'>
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-500'></div>
                <div className='h-[1px] w-full bg-gradient-to-r from-violet-500 to-transparent'></div>
              </div>
              <div className='flex items-center justify-center h-full w-full'>
                <Image
                  src={`${card.imageUrl}`}
                  alt={card.name}
                  width={10000}
                  height={10000}
                  loading='lazy'
                  className='xxl:w-[400px] xxl:h-[250px] object-cover rounded-lg mobile:w-[300px] mobile:h-[170px] sm:w-[450px] lg:w-[250px] lg:h-[170px] xl:w-[350px] fhd:w-[400px] fhd:h-[250px]'
                />
              </div>
              <div className='p-4'>
                <p className='text-white font-bold tracking-wide py-2 uppercase'>
                  {card.name}
                </p>
                <p className='text-white font-normal'>{card.designation}</p>
              </div>
            </motion.div>
          </Link>
        ) : (
          <div className='' key={card.id}>
            <motion.div
              key={card.id}
              className='absolute from-[#0d1224] border-[#1b2c68a0] bg-gradient-to-r to-[#0a0d37] rounded-3xl  shadow-xl border xxl:w-[30vw] fhd:w-[25vw] lg:w-[30vw] mobile:w-[85.5vw] sm:w-[80vw] md:w-[70vw] mobile:h-96 lg:h-80 xxl:h-96 fhd:h-96 shadow-black/[0.1] flex flex-col justify-between'
              style={{
                transformOrigin: 'top center',
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR,
                zIndex: cards.length - index,
              }}
            >
              <div className='flex'>
                <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-500'></div>
                <div className='h-[1px] w-full bg-gradient-to-r from-violet-500 to-transparent'></div>
              </div>
              <div className='text-white p-4 lg:text-sm xxl:text-lg'>
                {card.content}
              </div>
              <div className='p-4'>
                <p className='text-white font-bold tracking-wide py-2 uppercase mobile:text-sm lg:text-sm '>
                  {card.name}
                </p>
                <p className='text-white font-normal mobile:text-sm lg:text-sm '>
                  {card.designation}
                </p>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
