import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Here, increment menthod is not directly referenced to increment button
  // rather, a empty function is refered
  // inside enpty function, we have called increment function
  // so whatever we pass as the arguments, that is what received as arguments
  // explicitly , we can receive event as argument from empty function and then pass that event to increment method
  const increment = (num, event) => {
    console.log(num, event);
    setCount(count + num);


    /* setCount(count + num);
    setCount(count + num);
    setCount(count + num); */

    /* setCount(() => {
      return count + num;
    })
    setCount(() => {
      return count + num;
    })
    setCount(() => {
      return count + num;
    }) */

    /* setCount((prevCount) => {
      return prevCount + num;
    })
    setCount((prevCount) => {
      return prevCount + num;
    })
    setCount((prevCount) => {
      return prevCount + num;
    }) */
  };

  // Vy ust referencing this method as a event handler to decrement button
  // by default, we will receive event object as first parameter
  const decrement = (event) => {
    console.log(event)
    // setCount(count - 1);
    setCount((previousCount) => { 
      console.log(previousCount);
      console.log(count);
      // for(let i = 0; i < 999999909; i++) {};
      return previousCount - 1 
    });

    // there are two ways to update a state using setState method
    // setState is nothing but, the method we name while declaring useState
    // here setCount is the setState method for count

    // way 1 - passing state value as a parameter directly to setState method
    // example setCount(10)

    // way 2 - passing a function as a parameter into setState method
    // and then returning state value inside that function
    // exmaple setCount(() => { return 10 })
  };

  const incrementByFive = () => {
    for (let i = 1; i <= 5; i++) {
      console.log(i)
      // setCount(count + 1);
      // setCount((prevCount) => { return prevCount + 1 });
      setCount((prevCount) => prevCount + 1 );
    }
  }

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button
        id="incre"
        onClick={(event) => {
          console.log(event)
          increment(5, event); // calling a function, inside a referenced empty function
        }}
      >
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={incrementByFive}>Increment by 5</button>
    </div>
  );
}

export default Counter;
