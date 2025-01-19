import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { CartState } from '../context/Context';

const CartItem = () => {
  const { state: {cart} } = CartState();
  const [showPing, setShowPing] = useState(false);
  const [prevLength, setPrevLength] = useState(cart.length);

  useEffect(() => {
    if (cart.length > prevLength) {
      setShowPing(true);
      setTimeout(() => setShowPing(false), 1000);
    }
    setPrevLength(cart.length);
  }, [cart.length, prevLength]);

  return (
    <div className='relative flex justify-center items-center mr-4'>
      {cart.length > 0 && (
        <>
          {showPing && (
            <span className='absolute -top-5 -right-5 size-6 bg-blue-400 rounded-full animate-ping' />
          )}
          <span className='bg-blue-600 text-white flex justify-center items-center rounded-full absolute -top-5 -right-5 size-6'>
            {cart.length}
          </span>
        </>
      )}
      <FontAwesomeIcon icon={faCartShopping} className='text-blue-600 size-7' />
    </div>
  )
}

export default CartItem