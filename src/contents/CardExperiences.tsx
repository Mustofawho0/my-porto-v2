import { MdBubbleChart } from 'react-icons/md';
export const cardExperiences = [
  {
    id: 1,
    name: 'PT JULO TEKNOLOGI FINANCE',
    designation: 'Desk Collection',
    content: (
      <ul>
        <li className='flex items-center gap-2'>
          <MdBubbleChart size={20} />
          Negotiated with customers who are already past due.
        </li>
        <li className='py-2 flex items-center gap-2'>
          <MdBubbleChart size={30} />
          Contacted customers and reminding them of their obligations before the
          due date.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    name: 'Purwadhika Digital Technology School',
    designation: 'Student Graduation',
    content: (
      <ul>
        <li className='flex items-center gap-2'>
          <MdBubbleChart size={20} />
          Learn about Fundamental Programming
        </li>
        <li className='flex items-center gap-2 py-2'>
          <MdBubbleChart size={20} />
          Learn to Design Web Front End with React Vite, TailwindCSS, NextJS
        </li>
        <li className='flex items-center gap-2'>
          <MdBubbleChart size={20} />
          Learn to Fetch data from API or Server make Library Axios with NextJS
        </li>
        <li className='flex items-center gap-2 py-2'>
          <MdBubbleChart size={20} />
          Learn about Back End with Express, Node JS and Prisma ORM
        </li>
      </ul>
    ),
  },
];
