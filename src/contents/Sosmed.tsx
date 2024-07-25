import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const sosmedAccount = [
  {
    id: 1,
    name: 'Github',
    icon: (
      <FaGithub className='transition hover:-translate-y-2 hover:scale-110 text-pink-500' />
    ),
    link: 'https://github.com/Mustofawho0',
  },
  {
    id: 2,
    name: 'Linkedin',
    icon: (
      <FaLinkedin className='transition hover:-translate-y-2 hover:scale-110 text-pink-500' />
    ),
    link: 'https://www.linkedin.com/in/nurul-musthofa/',
  },
  {
    id: 3,
    name: 'Instagram',
    icon: (
      <FaInstagram className='transition hover:-translate-y-2 hover:scale-110 text-pink-500' />
    ),
    link: 'https://www.instagram.com/mustofawho/',
  },
  {
    id: 4,
    name: 'Twitter',
    icon: (
      <FaXTwitter className='transition hover:-translate-y-2 hover:scale-110 text-pink-500' />
    ),
    link: 'https://x.com/mustofawho',
  },
];
