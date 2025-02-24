import React, { memo,useState } from "react";

const NumInput = () => {
  const [number, setnumber] = useState("");

  return (
    <div><br/>
      <label>Enter Number: </label>
      <input 
        type="number" 
        value={number} 
        onChange={(e) => setnumber(e.target.value)} 
      />
      <p>You typed: {number}</p>
    </div>
  );
};

export default memo(NumInput);