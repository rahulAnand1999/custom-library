// src/index.js
// Import all hooks
export { useCounter } from './hooks/useCounter';
export { useToggle } from './hooks/useToggle';
export { useLocalStorage } from './hooks/useLocalStorage';
export { useFetch } from './hooks/useFetch';
export { useDebounce } from './hooks/useDebounce';

// Default export for convenience
import { useCounter } from './hooks/useCounter';
import { useToggle } from './hooks/useToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';

export default {
  useCounter,
  useToggle,
  useLocalStorage,
  useFetch,
  useDebounce,
};