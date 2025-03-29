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
import { SmartLoop } from "react-loop-components";

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  return (
    <SmartLoop array={items} component={(item) => <p>{item}</p>} method="map" />
  );
}

export default App;
```

### 2️⃣ Using `useSmartData` Hook (New Feature!)
```jsx
import { useSmartData } from "react-loop-components";

function DataComponent() {
  const items = ["Dog", "Cat", "Rabbit"];
  const processedData = useSmartData(items, "map");

  return (
    <div>
      {processedData.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default DataComponent;
```

### 3️⃣ Loop with `map`
```jsx
import { LoopMap } from "react-loop-components";

function App() {
  const items = ["Apple", "Banana", "Cherry"];
  return <LoopMap array={items} component={(item) => <p>{item}</p>} />;
}

export default App;
```

### 4️⃣ Loop with `forEach`
```jsx
import { LoopForEach } from "react-loop-components";

function App() {
  const items = ["Dog", "Cat", "Rabbit"];
  return <LoopForEach array={items} component={(item) => <li>{item}</li>} />;
}

export default App;
```

### 5️⃣ Loop with `for`
```jsx
import { LoopFor } from "react-loop-components";

function App() {
  const items = ["One", "Two", "Three"];
  return <LoopFor array={items} component={(item) => <h3>{item}</h3>} />;
}

export default App;
```

### 6️⃣ Loop with `while`
```jsx
import { LoopWhile } from "react-loop-components";

function App() {
  const items = ["X", "Y", "Z"];
  return <LoopWhile array={items} component={(item) => <span>{item} </span>} />;
}

export default App;
```

### 7️⃣ Loop with `reduce`
```jsx
import { LoopReduce } from "react-loop-components";

function App() {
  const items = ["Red", "Green", "Blue"];
  return <LoopReduce array={items} component={(item) => <strong>{item}</strong>} />;
}

export default App;
```

## Components
| Component    | Loop Method |
|-------------|------------|
| SmartLoop   | Dynamic (map, forEach, for, while, reduce) |
| LoopMap     | `array.map()` |
| LoopForEach | `array.forEach()` |
| LoopFor     | `for` loop |
| LoopWhile   | `while` loop |
| LoopReduce  | `array.reduce()` |

## Features
✅ Supports multiple loop types  
✅ SmartLoop for dynamic loop selection  
✅ `useSmartData` hook for efficient data processing  
✅ Lightweight and easy to use  
✅ Customizable component rendering  
✅ Works with any React project  
✅ Built-in error handling  

## Error Handling
- Ensures `array` is an actual array, throws an error if not.
- Ensures `component` is a valid function, throws an error if not.
- Handles edge cases like empty arrays.
- Error handling is centralized in `index.js` before passing data to components.

Example with SmartLoop:
```jsx
import { SmartLoop } from "react-loop-components";

function App() {
  return (
    <SmartLoop array={null} component={(item) => <p>{item}</p>} method="map" />
  ); // Throws an error
}
```

Example with `LoopMap`:
```jsx
import { LoopMap } from "react-loop-components";

function App() {
  return <LoopMap array={null} component={(item) => <p>{item}</p>} />; // Throws an error
}
```

## Contributing
Feel free to contribute! Fork the repo, make changes, and submit a PR. 🚀

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.

MIT License © 2025 m.rabeeh.vk.

# React-loop-components
