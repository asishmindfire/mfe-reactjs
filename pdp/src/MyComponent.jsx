import { CounterContext } from "home/context";
import { useContext, useState } from "react";

function MyComponent() {
  const { count, increment, decrement, name, updateName } =
    useContext(CounterContext);

    const [newName, setNewName] = useState('');

    const handleUpdate = () => {
        updateName(newName);
        setNewName('');
      };
    
  return (
    <>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        <p>Name: {name}</p>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleUpdate}>Update Name</button>
      </div>
    </>
  );
}

export default MyComponent;
