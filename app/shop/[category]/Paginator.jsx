import React from 'react';
import LeftArrow from '../../assets/icons/pag-left.svg';
import RightArrow from '../../assets/icons/pag-right.svg';
import Image from 'next/image';

const Paginator = ({count, page, onChange}) => {
  return (
    <div className='flex items-center justify-center'>
      {/* Previous arrow */}
      <Image
        src={LeftArrow}
        width={7.5}
        height={7.5}
        alt='Previous'
        className={`${page === 1 && 'opacity-20'} mx-2`}
        onClick={() => {
          page > 1 && onChange(page - 1);
        }}
      />
      {/* Pages rendered from array made from the count */}
      {Array.from(Array(count), (e, i) => i + 1).map((item) => (
        <div
          key={item}
          id={item}
          onClick={(e) => {
            onChange(e.target.id);
          }}
          className={`${
            item === page ? 'bg-inactive-orange' : ''
          } w-5 h-5 p-3 gap-x-2.5 font-semibold flex items-center justify-center hover:bg-inactive-orange`}
        >
          {item}
        </div>
      ))}
      {/* Next arrow */}
      <Image
        src={RightArrow}
        width={7.5}
        height={7.5}
        alt='Next'
        className={`${page === count && 'opacity-20'} mx-2`}
        onClick={() => {
          page < count && onChange(page + 1);
        }}
      />
      {/* {`count:${count} page:${page}`} */}
    </div>
  );
};

export default Paginator;
