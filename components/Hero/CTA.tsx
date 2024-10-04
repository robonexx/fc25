import Link from 'next/link';
import React from 'react';

const HighlightItem: React.FC<{
  title: string;
  content: string;
  path: string;
}> = ({ title, content, path }) => {
  return (
    <Link
      href={path}
      className='py-4 px-8 border-[1px] border-x-transparent border-y-[#888] hover:bg-white hover:text-black text-white transition-all duration-300'
    >
      <span className='text-xl font-bold'>{title}</span>
      <p className='text-xl font-bold text-gray-500 hover:text-inherit'>
        {content}
      </p>
    </Link>
  );
};

const CTA = () => {
  return (
    <div className='flex justify-between lg:w-3/5 lg:max-w-[900px] mx-auto mt-24 gap-10 md:gap-20 pb-20'>
      <HighlightItem
        title='Camp 2025'
        content='The full experience'
        path='camp2025'
      />
      <HighlightItem title='Media' content='Photos, videos' path='media' />
      <HighlightItem title='Contact' content='Contact Us' path='contact' />
    </div>
  );
};

export default CTA;
