function Signup() {
    return (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
            <h1>Signup</h1>
            <form>
                <input type="email" placeholder="Email" required /><br /><br />
                <input type="password" placeholder="Password" required /><br /><br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;

