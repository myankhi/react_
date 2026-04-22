import {useState} from 'react'
import './counter.css'


function Counters() {
  const [count , setCount]= useState(0);
    
  return (
    <div>
    
      <p2>{count}</p2>
      <h2 style={{ color: count < 0 ? "red" : "green" }}>
  {count < 0 ? "Negative" : "Positive"}
</h2>

{count === 0 && <h2>Zero</h2>}
      <button onClick={() => setCount(count + 1)}>add+</button> {/*event  onlcik  */}  
      <button onClick={() => setCount(count - 1)}>subtract</button> 
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}

export default Counters;