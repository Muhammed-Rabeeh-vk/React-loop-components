# react-loop-components

🚀 A lightweight React utility for looping over arrays using different loop methods (map, forEach, for, while, reduce) as reusable components. Now enhanced with the `SmartLoop` component and `useSmartData` hook for efficient looping and data processing!

## Installation

Install via npm:
```sh
npm install react-loop-components
```

Or via yarn:
```sh
yarn add react-loop-components
```

## Usage

Import and use different loop components in your React project:

### 1️⃣ SmartLoop (New Feature!)
```jsx
import React from "react";
import { SmartLoop } from "react-loop-components";

const items = ["Apple", "Banana", "Cherry", "Grapes"];

const App = () => (
  <SmartLoop
    data={items}
    renderItem={(item) => <p key={item}>{item}</p>}
    height={200}
    itemSize={40}
  />
);

export default App;

```

### 2️⃣ Using `useSmartData` Hook (New Feature!)
```jsx
import React, { useState } from "react";
import { SmartLoop, useSmartData } from "react-loop-components";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "David" },
  { id: 5, name: "Eve" },
];

const App = () => {
  const [filter, setFilter] = useState(""); 
  const { processedData, loading, error } = useSmartData(users, { filter });

  return (
    <>
      <input
        type="text"
        placeholder="Filter by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {loading && <p>Loading... ⏳</p>}
      {error && <p style={{ color: "red" }}>⚠️ Error: {error}</p>}
      
      <SmartLoop
        data={processedData}
        renderItem={(user) => <p key={user.id}>{user.name}</p>}
        height={200}
        itemSize={40}
      />
    </>
  );
};

export default App;

```

### 3️⃣ Loop with `map`
```jsx
import { LoopMap } from "react-loop-components";

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  return <LoopMap data={items} renderItem={(item) => <p>{item}</p>} />;
}

export default App;
```

### 4️⃣ Loop with `forEach`
```jsx
import { LoopForEach } from "react-loop-components";

function App() {
  const items = ["Dog", "Cat", "Rabbit"];
  return <LoopForEach data={items} renderItem={(item) => <li>{item}</li>} />;
}

export default App;
```

### 5️⃣ Loop with `for`
```jsx
import { LoopFor } from "react-loop-components";

function App() {
  const items = ["One", "Two", "Three"];
  return <LoopFor data={items} renderItem={(item) => <h3>{item}</h3>} />;
}

export default App;
```

### 6️⃣ Loop with `while`
```jsx
import { LoopWhile } from "react-loop-components";

function App() {
  const items = ["X", "Y", "Z"];
  return <LoopWhile data={items} renderItem={(item) => <span>{item} </span>} />;
}

export default App;
```

### 7️⃣ Loop with `reduce`
```jsx
import { LoopReduce } from "react-loop-components";

function App() {
  const items = ["Red", "Green", "Blue"];
  return <LoopReduce data={items} renderItem={(item) => <strong>{item}</strong>} />;
}

export default App;
```

## Components
| Component    | Loop Method |
|-------------|------------|
| SmartLoop   | A new Loop Component with more functions like (filtering sorting etc) |
| LoopMap     | `array.map()` |
| LoopForEach | `array.forEach()` |
| LoopFor     | `for` loop |
| LoopWhile   | `while` loop |
| LoopReduce  | `array.reduce()` |
## Hooks
| Hook          | Hook Usage  |
|---------------|-------------|
| useSmartData()| Efficient data processing.|
## Features
✅ Supports multiple loop types  
✅ SmartLoop for dynamic loop selection  
✅ `useSmartData` hook for efficient data processing  
✅ Lightweight and easy to use  
✅ Customizable component rendering  
✅ Works with any React project  
✅ Built-in error handling  

## Where we use the `useSmartData()` Hook and the `SmartLoop` component
- Use useSmartData when filtering, fetching, or transforming data.
- Use SmartLoop when rendering large lists efficiently.
- Combine them for maximum performance & flexibility.
## Error Handling
- Ensures `array` is an actual array, throws an error if not.
- Ensures `component` is a valid function, throws an error if not.
- Handles edge cases like empty arrays.
Example with SmartLoop:
```jsx
import { SmartLoop } from "react-loop-components";

function App() {
  return (
    <SmartLoop data={null} renderItem={(item) => <p>{item}</p>} method="map" />
  ); // Throws an error
}
```

Example with `LoopMap`:
```jsx
import { LoopMap } from "react-loop-components";

function App() {
  return <LoopMap data={null} renderItem={(item) => <p>{item}</p>} />; // Throws an error
}
```

## Contributing
Feel free to contribute! Fork the repo, make changes, and submit a PR. 🚀

## License
This project is licensed under the MIT License - see the [LICENSE](react-loop-components/LICENSE) file for details.

MIT License © 2025 m.rabeeh.vk.

# React-loop-components
