
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "./store/action.types"
import { add, add1, divide, multi, substract, substract1 } from './store/action';
import { useState } from 'react';

function App() {

  const  dispatch = useDispatch();
  const count = useSelector((state) => state.count)
  const [x, setX] = useState("")
  
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div>
        <button onClick={() =>dispatch(substract())}>-</button>
        <button onClick={() =>dispatch(add())}>+</button>
      </div>
      <div>
        <input type="number" value={x} onChange={(e) => {setX(e.target.value)} }   />
      </div>
      <div>
      {/* setX("") in button  and value={x} is use to empty the input after onclick */}
      <button onClick={() => {dispatch(add1(+x)); setX("")}}>add</button>    
      <button onClick={() => {dispatch(substract1(+x)); setX("")}}>substract</button>
      <button onClick={() =>  {dispatch(multi(+x)); setX("")}}>multiply</button>
      <button onClick={() => { dispatch(divide(+x)); setX("")}}>divide</button>
      </div>
    </div>
  );
}

export default App;
