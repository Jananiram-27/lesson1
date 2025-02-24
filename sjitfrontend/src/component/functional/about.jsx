import { useState } from "react";
function About(){
    var initialVal = 0
    var [num,setNum] = useState(initialVal)
    function handleDecrement(){
        setNum(num-1)
    }
    function submit(){
        setNum(num)
    }
    return(
        <div>
        <h1>about</h1>
        <button onClick={handleDecrement}>-</button>
        <h3>updating state:{num}</h3>
        <button onClick={ ()=>{setNum(num+1)} }>+</button>
        <h1>submit:{num}</h1>
        <button onClick={submit}>click</button>
        </div>
    );
}
export default About;