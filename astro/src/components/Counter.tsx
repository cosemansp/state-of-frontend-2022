import * as React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eveniet reprehenderit quam distinctio molestiae
        facere, in voluptatum quidem id neque reiciendis consequatur harum iure odit eius qui maiores, amet nesciunt!
      </p>
      <hr />
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
