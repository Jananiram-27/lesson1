import { useState, useEffect } from "react";

const useMemoize = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        return jsonValue !== null ? JSON.parse(jsonValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useMemoize;