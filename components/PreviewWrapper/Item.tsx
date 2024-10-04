import React from 'react';
import './Preview.scss'

interface ItemProps {
  index: number;
  preview: {
    title: string;
    img: string;
    tags: string;
    desc: string;
  };
  onClick: () => void;
}

const Item: React.FC<ItemProps> = ({ preview, onClick }) => {
  return (
    <div
      className='item'
      onClick={onClick}     
    >
      <p>{preview.title}</p>
    </div>
  );
};

export default Item;
