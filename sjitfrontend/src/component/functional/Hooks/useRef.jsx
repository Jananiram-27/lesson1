import { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  var [text, setText] = useState(""); 
  var previousRender = useRef("");

  useEffect(() => {
    previousRender.current = text;
  }, [text]);

  return (
    <div>
      <h1>This is useRef Example</h1>
      Type your Text:  
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      
      <h2>The current render text is: {text} </h2>
      <h3>The previous render text was: {previousRender.current}</h3>
    </div>
  );
};

export default UseRefExample;
