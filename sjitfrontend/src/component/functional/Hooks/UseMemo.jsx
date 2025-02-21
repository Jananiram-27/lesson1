import { useState, useMemo } from "react";
const slowFunction = (num) => {
    console.log("Running slow function...");
    for (let i = 0; i < 1000000; i++) { } // 🔹 Reduced iterations
    return num * 2;
};

const UseMemoExample = () => {
    const [number, setNumber] = useState(0);
    const [theme, setTheme] = useState(false);

    const db = useMemo(() => slowFunction(number), [number]);

    const styling = {
        backgroundColor: theme ? "pink" : "white",
        color: theme ? "black" : "black",

    };

    return (
        <> 
            <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
            
            <div style={styling}>
                <h1>This is a useMemo example.</h1>
                Type your number:{" "}
                <input 
                    type="number" 
                    value={number} 
                    onChange={(e) => setNumber(parseInt(e.target.value) )}
                />
                <h2>The number typed is: {number}</h2>
                <h2>The doubled number is: {db}</h2>
            </div>
        </>
    );
};

export default UseMemoExample;