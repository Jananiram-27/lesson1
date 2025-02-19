import { useEffect, useState} from "react";
const UseEffect = () =>{
    var[text,setText]=useState("")
    useEffect(()=>{
    console.log(text);
    },[text]);



    return(
        <section>
        <h1>This is useEffect</h1>
        Type your text:{" "}
        <input 
        type="text" 
        value={text}
        onChange={(event.target.value)}
        />
        </section>
    )
}