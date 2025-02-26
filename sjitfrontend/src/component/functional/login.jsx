import { Link } from "react-router-dom";
function Login() {
    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Enter your email" />
            <br /><br />
            <input type="password" placeholder="Enter your password" />
            <br /><br />
            <button>Login</button>
            <p><Link to="/Signup">create an account ?</Link></p>
        </div>
    );
}

export default Login;
