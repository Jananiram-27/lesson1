import { useState, useCallback } from "react";

const UseCallBack = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);

    const styling = {
        backgroundColor: theme ? "black" : "white",
        color: theme ? "white" : "black",
    };

    const numList = useCallback((num) => {
        return [number + num * 2, number + num * 4, number + num * 8];
    }, [number]);

    return (
        <> 
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            
            <div style={styling}>
                <h1>This is a useCallback example.</h1>
                Type your number:{" "}
                <input 
                    type="number" 
                    value={number} 
                    onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
                />
                <h2>The number list is:</h2>
                {numList(10).map((val, index) => ( 
                    <h2 key={index}>{val}</h2>
                ))}
            </div>
        </>
    );
};

export default UseCallBack;