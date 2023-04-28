import React from 'react';
import { Link } from 'react-router-dom';
import MessageIcon from '../../../../assets/message-question.svg';

const HelpdeskModal = () => {
  return (
    <aside className=' absolute bg-white pl-6 pt-24 xl:w-[347px] lg:w-[25%] md:w-[30%] w-[40%] lg:text-xl md:text-lg text-[16px] h-[706px] shadow z-30'>
      <div className='flex gap-3'>
        <img src={MessageIcon} alt={MessageIcon} />
        <Link to='faq'>Discussions</Link>
      </div>
    </aside>
  );
};

export default HelpdeskModal;
