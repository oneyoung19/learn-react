import { useLocalStorage } from 'react-use';

export const Child = () => {
  const [value, setValue, remove] = useLocalStorage('react-use', 'foo');

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue('bar')}>bar</button>
      <button onClick={() => setValue('baz')}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
