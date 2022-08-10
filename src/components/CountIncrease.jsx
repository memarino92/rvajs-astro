import { useStore } from '@nanostores/react';
import { count } from './counter';
import React from 'react';

export const CountIncrease = () => {
  const $count = useStore(count);

  return (
    <button
      onClick={() => {
        count.set($count + 1);
      }}
    >
      Click me!
    </button>
  );
};
