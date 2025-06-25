# Custom Library - React Hooks Collection

![npm version](https://img.shields.io/npm/v/@rahulanand1999/custom-library.svg)
![license](https://img.shields.io/npm/l/@rahulanand1999/custom-library.svg)
![downloads](https://img.shields.io/npm/dm/@rahulanand1999/custom-library.svg)

A comprehensive collection of custom React hooks designed to simplify common patterns and boost your productivity.

## 🚀 Installation

```bash
npm install @rahulanand1999/custom-library
```

or

```bash
yarn add @rahulanand1999/custom-library
```

## 📚 Available Hooks

### `useCounter`

A versatile hook for managing counter state with customizable step values.

```javascript
import { useCounter } from '@rahulanand1999/custom-library';

function CounterComponent() {
  const { count, increment, decrement, reset, set } = useCounter(0, 2);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+2</button>
      <button onClick={decrement}>-2</button>
      <button onClick={() => set(10)}>Set to 10</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**Parameters:**
- `initialValue` (number, default: 0): Initial counter value
- `step` (number, default: 1): Step value for increment/decrement

**Returns:**
- `count`: Current count value
- `increment`: Function to increment by step
- `decrement`: Function to decrement by step
- `reset`: Function to reset to initial value
- `set`: Function to set specific value

### `useToggle`

A hook for managing boolean state with additional control functions.

```javascript
import { useToggle } from '@rahulanand1999/custom-library';

function ToggleComponent() {
  const [isVisible, toggle, setTrue, setFalse] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <button onClick={setTrue}>Show</button>
      <button onClick={setFalse}>Hide</button>
      {isVisible && <p>I'm visible!</p>}
    </div>
  );
}
```

**Parameters:**
- `initialValue` (boolean, default: false): Initial toggle state

**Returns:**
- `[0]`: Current boolean value
- `[1]`: Toggle function
- `[2]`: Set to true function
- `[3]`: Set to false function

### `useLocalStorage`

A hook for managing localStorage with React state synchronization.

```javascript
import { useLocalStorage } from '@rahulanand1999/custom-library';

function ProfileComponent() {
  const [user, setUser, removeUser] = useLocalStorage('user', { name: '', email: '' });

  return (
    <div>
      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
      />
      <button onClick={removeUser}>Clear</button>
    </div>
  );
}
```

**Parameters:**
- `key` (string): localStorage key
- `initialValue` (any): Initial value if key doesn't exist

**Returns:**
- `[0]`: Stored value
- `[1]`: Function to update value
- `[2]`: Function to remove value

### `useFetch`

A hook for making API calls with loading, error, and retry functionality.

```javascript
import { useFetch } from '@rahulanand1999/custom-library';

function PostsComponent() {
  const { data, loading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error} <button onClick={refetch}>Retry</button></div>;

  return (
    <div>
      <button onClick={refetch}>Refresh</button>
      {data?.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
```

**Parameters:**
- `url` (string): API endpoint
- `options` (object, optional): Fetch options

**Returns:**
- `data`: Response data
- `loading`: Loading state
- `error`: Error message if any
- `refetch`: Function to retry the request

### `useDebounce`

A hook for debouncing rapidly changing values.

```javascript
import { useDebounce } from '@rahulanand1999/custom-library';

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

**Parameters:**
- `value` (any): Value to debounce
- `delay` (number): Delay in milliseconds

**Returns:**
- Debounced value

## 🛠️ Development

```bash
# Clone the repository
git clone https://github.com/rahulAnand1999/custom-library.git
cd custom-library

# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test

# Development mode (watch for changes)
npm run dev
```

## 📦 Package Information

- **Bundle size**: < 5KB gzipped
- **Dependencies**: React 16.8.0+ (peer dependency)
- **TypeScript**: Coming soon
- **SSR**: Compatible

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests to our repository.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-hook`)
3. Commit your changes (`git commit -m 'Add amazing hook'`)
4. Push to the branch (`git push origin feature/amazing-hook`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/rahulAnand1999/custom-library)
- [npm Package](https://www.npmjs.com/package/@rahulanand1999/custom-library)
- [Issues](https://github.com/rahulAnand1999/custom-library/issues)

## 🙏 Acknowledgments

Thanks to the React community for inspiration and feedback on these hook patterns.

---

Made with ❤️ by [Rahul Anand](https://github.com/rahulAnand1999)