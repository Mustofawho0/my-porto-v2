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
          Contacted customers and reminding them of their obligations before the
          due date.
        </li>
        <li className='py-2 flex items-center gap-2'>
          <MdBubbleChart size={30} />
          Negotiate with overdue customers and input the negotiation result data
          to CRM for reporting.
        </li>
        <li className='py-2 flex items-center gap-2'>
          <MdBubbleChart size={30} />
          Input customers data into Google Sheets if there is a Promise to Pay
          to be a report for one month.
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
  {
    id: 3,
    name: 'PT Inova Medika Solusindo',
    designation: 'System Support & Implementor',
    content: (
      <ul>
        <li className='flex items-center gap-2'>
          <MdBubbleChart size={20} />
          Resolving and testing cases reported by users regarding the use of the
          system and providing solutions to these cases.
        </li>
        <li className='flex items-center gap-2 py-2'>
          <MdBubbleChart size={20} />
          Create a Jira issue for a bug or improvement if there are requests or
          issues from users
        </li>
        <li className='flex items-center gap-2'>
          <MdBubbleChart size={20} />
          Creating daily tasks to use as work reports through Jira
        </li>
        <li className='flex items-center gap-2 py-2'>
          <MdBubbleChart size={20} />
          Learn about Back End with Express, Node JS and Prisma ORM
        </li>
      </ul>
    ),
  },
];
