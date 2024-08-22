'use client';
import PropTypes from 'prop-types';

// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counter/counterSlice';

export const CartCounter = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  // const [count, setCount] = useState(value);

  return (
    <>
      <span className="text-9xl"> {count} </span>

      <div className="flex">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          +1
        </button>

        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
          -1
        </button>
      </div>
    </>
  )
}

CartCounter.prototype = {
    value: PropTypes.number
}