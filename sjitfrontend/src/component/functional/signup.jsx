function Signup() {
    return (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
            <h1>Signup</h1>
            <p>Enter your details to create an account</p>
            <form>
                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    style={{ padding: "8px", width: "250px" }}
                />
                <br /><br />

                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    style={{ padding: "8px", width: "250px" }}
                />
                <br /><br />

                <button 
                    type="submit" 
                    style={{ 
                        padding: "8px 16px", 
                        backgroundColor: "#28a745", 
                        color: "white", 
                        border: "none", 
                        cursor: "pointer",
                        borderRadius: "4px"
                    }}
                >
                    Signup
                </button>
            </form>
        </div>
    );
}

export default Signup;

