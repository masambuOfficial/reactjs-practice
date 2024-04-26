import { useState } from 'react'

function Counter() {
    let [count, setCount] = useState(0);

    function increaseCount(){
        setCount(count+1);
    }

    function decreaseCount(){
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
    </div>
  )
}

export default Counter


