import {useState} from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    const message = `Updated Count ${count}`;
    function increament(){
        console.log("count=",count+1);
        setCount(count+1)
    }
    
    function decreament(){
        console.log("count=",count-1);
        setCount(count-1)
    }
  return (
    <div>
        <h1>My Counter App</h1>
        <div className='counter'>
      <button onClick={decreament}>-</button>
      <div className="id1">{count}</div>
      <button onClick={increament}>+</button>
      
      </div>
      <div><h1>{message}</h1></div>
    </div>
  )
}

export default Counter