import useMemoize from './customHooks/memorizingHook.jsx'; 

const UseMemoize = () => {
    var [custID, setCustID] = useMemoize("CustomerID", "");
    var [pass, setPass] = useMemoize("Password", "");

    return (
        <div>
            <h1>This is a custom hook designed using useMemoize</h1>
            <label>CustomerID: </label>
            <input type="text" value={custID} onChange={(e) => setCustID(e.target.value)} /><br />
            
            <label>Password: </label>
            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} /> <br />
            
            <button>Login</button>
        </div>
    );
};

export default UseMemoize;
