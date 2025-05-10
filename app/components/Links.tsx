'use client';
import Link from 'next/link';
import { useState } from 'react';

const Links = () => {
  const categories = ['best', 'hot', 'top', 'new', 'rising'];
  const selected = 'md:p-4 py-2 block text-purple-500 font-semibold';
  const unselected = 'md:p-4 py-2 block hover:text-purple-400';
  const [select, setSelected] = useState([true, false, false, false]);

  const handleClick = (i: number) => {
    const newSelectArray = [false, false, false, false];
    newSelectArray[i] = true;
    setSelected(newSelectArray);
  };

  return (
    <>
      {categories.map((category, i) => (
        <li key={category}>
          <Link
            onClick={() => handleClick(i)}
            className={select[i] ? selected : unselected}
            href={`/${category}`}
          >
            <span className="uppercase">{category}</span>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Links;
