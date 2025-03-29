import "./App.css";

import {
  LoopFor,
  LoopForEach,
  LoopMap,
  LoopReduce,
  LoopWhile,
} from "@m.rabeeh.vk/react-loop";

function App() {
  let obj = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

  return (
    <>
      <LoopFor
        data={obj}
        renderItem={(item, index) => <Hello key={index} name={item.name} />}
      />
      <hr />
      <LoopForEach
        data={obj}
        renderItem={(item, index) => <Hello key={index} name={item.name} />}
      />
      <hr />
      <LoopMap
        data={obj}
        renderItem={(item, index) => <Hello key={index} name={item.name} />}
      />
      <hr />
      <LoopReduce
        data={obj}
        renderItem={(item, index) => <Hello key={index} name={item.name} />}
      />
      <hr />
      <LoopWhile
        data={obj}
        renderItem={(item, index) => <Hello key={index} name={item.name} />}
      />
    </>
  );
}

export default App;
import React from 'react'


function Hello(props) {
  return (
    <div key={props.key}>{props.name}</div>
  )
}

