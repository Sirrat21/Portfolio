import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 0,
      icon: <FaLinkedin size={30} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sirrat-rashid-220514321/',
      style: 'rounded-tr-md'
    },
    {
      id: 1,
      icon: <FaGithub size={30} />,
      label: 'GitHub',
      href: 'https://github.com/Sirrat21',
    },
    {
      id: 2,
      icon: <HiOutlineMail size={30} />,
      label: 'Mail',
      href: 'mailto:sirratrashid@gmail.com',
    },
  ];

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({ id, icon, label, href, style }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ' +
              style
            }
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className='flex justify-between items-center w-full text-white'
            >
              <span className='mr-2'>{label}</span>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
