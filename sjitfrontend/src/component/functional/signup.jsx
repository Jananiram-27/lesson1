import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [firstName, setFN] = useState("");
    const [lastName, setLN] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPass] = useState("");
    const [phoneNumber, setPN] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/signup",{
           firstName: firstName,
           lastName: lastName,
           email: email,
           passWord:passWord,
           phoneNumber:phoneNumber
          });
  
    };

    return (
        <div className="signup-container">
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <label htmlFor="firstName">
                    First Name:
                    <input 
                        type="text" 
                        id="firstName" 
                        placeholder="First Name" 
                        value={firstName} 
                        onChange={(e) => setFN(e.target.value)} 
                        required 
                        className="input-field" 
                    />
                </label>
                <br /><br />
                
                <label htmlFor="lastName">
                    Last Name:
                    <input 
                        type="text" 
                        id="lastName" 
                        placeholder="Last Name" 
                        value={lastName} 
                        onChange={(e) => setLN(e.target.value)} 
                        required 
                        className="input-field" 
                    />
                </label>
                <br /><br />

                <label htmlFor="email">
                    Email:
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                        className="input-field" 
                    />
                </label>
                <br /><br />
                
                <label htmlFor="passWord">
                    Password:
                    <input 
                        type="password" 
                        id="passWord" 
                        placeholder="Password" 
                        value={passWord} 
                        onChange={(e) => setPass(e.target.value)} 
                        required 
                        className="input-field" 
                    />
                </label>
                <br /><br />

                <label htmlFor="phoneNumber">
                    Phone Number:
                    <input 
                        type="tel" 
                        id="phoneNumber" 
                        placeholder="Phone Number" 
                        value={phoneNumber} 
                        onChange={(e) => setPN(e.target.value)} 
                        required 
                        className="input-field" 
                    />
                </label>
                <br /><br />

                <button type="submit" className="signup-button">Signup</button>
            </form>

            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
}

export default Signup;

