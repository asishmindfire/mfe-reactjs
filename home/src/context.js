import { createContext, useState } from 'react';

const CounterContext = createContext();

function CounterProvider(props) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const updateName = (newName) => setName(newName);

  return (
    <CounterContext.Provider value={{ count, increment, decrement, name, updateName }}>
      {props.children}
    </CounterContext.Provider>
  );
}

export { CounterContext, CounterProvider };