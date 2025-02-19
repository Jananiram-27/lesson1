import { useState } from "react";
function about(){
    var initialVal = 0
    var [num,setNum] = useState(initialVal)
    function handleDecrement(){
        setNum(num-1)
    }
    return(
        <div>
        <h1>about</h1>

        <h2>state initial value is {initialVal}</h2>
        <button onClick={handleDecrement}>-</button>
        <h3>updating state:{num}</h3>
        <button onClick={ ()=>{setNum(num+1)} }>+</button>
        </div>
    );
}
export default about;