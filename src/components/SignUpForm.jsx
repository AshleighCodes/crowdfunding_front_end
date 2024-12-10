import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import postSignup from "../api/post-signup.js";
import './SignUpForm.css';

function SignupForm() {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });
    
    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const { username, email, password } = credentials;
        if (username && email && password) {
            postSignup(username, email, password)
            .then(() => {
                return postLogin(username, password);
            })
            .then((loginResponse) => {
                window.localStorage.setItem("token", loginResponse.token);
                navigate("/");
            });
        }
    };
    
    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2 className="signup-form-title">Sign Up</h2>
                <div className="signup-form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        value={credentials.username}
                        onChange={handleChange}
                        className="signup-form-input"
                        placeholder="Enter your username"
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={credentials.email}
                        onChange={handleChange}
                        className="signup-form-input"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="signup-form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={credentials.password}
                        onChange={handleChange}
                        className="signup-form-input"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="signup-form-button">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupForm;