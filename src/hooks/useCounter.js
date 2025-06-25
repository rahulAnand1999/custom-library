// src/hooks/useCounter.js
import { useState, useCallback } from 'react';

/**
 * Custom hook for counter functionality
 * @param {number} initialValue - Initial counter value
 * @param {number} step - Step value for increment/decrement
 * @returns {object} - {count, increment, decrement, reset, set}
 */
export const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => {
    setCount(prev => prev + step);
  }, [step]);

  const decrement = useCallback(() => {
    setCount(prev => prev - step);
  }, [step]);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  const set = useCallback((value) => {
    setCount(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    set
  };
};