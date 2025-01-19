import React from 'react';
import Select from './Select';

import { categories } from '../data/data';
import { sortingOrder } from '../data/data';

import { CartState } from '../context/Context';
import CartItem from './CartItem';

const Header = () => {
  const { productState: {selectedCategory, sortOrder}, productDispatch} = CartState();
  return (
    <header className='bg-gray-100 sticky top-0 left-0 max-w-7xl mx-auto md:flex justify-between items-center space-y-4 mb-8 p-4 z-40'>
      <div className='flex justify-between items-center'>
        <h1 className="text-3xl font-thin text-center">
          Our Products
        </h1>
        <div className='md:hidden'>
          <CartItem />
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center items-center gap-4'>
        <Select selectedOption={selectedCategory} setSelectedOption={productDispatch} options={categories} type="FILTER_BY_CATEGORY" varientType="small"/>
        <Select selectedOption={sortOrder} setSelectedOption={productDispatch} options={sortingOrder} type="SORT_BY_PRICE" varientType="medium"/>
      </div>
      <div className='hidden md:block'>
        <CartItem />
      </div>
    </header>
  )
}

export default Header