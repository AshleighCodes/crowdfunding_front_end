// // components/LoginForm.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import postLogin from "../api/post-login.js";
// import useAuth from "../hooks/use-auth.js";

// function LoginForm() {
//     const navigate = useNavigate();
//     const { auth, setAuth } = useAuth();
    
//     const [credentials, setCredentials] = useState({
//         username: "",
//         password: "",
//     });
    
//     const handleChange = (event) => {
//         const { id, value } = event.target;
//         setCredentials((prevCredentials) => ({
//             ...prevCredentials,
//             [id]: value,
//         }));
//     };
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         if (credentials.username && credentials.password) {
//             postLogin(credentials.username, credentials.password).then((response) => {
//                 window.localStorage.setItem("token", response.token);
//                 setAuth({
//                     token: response.token,
//                 });
//                 navigate("/");
//             });
//         }
//     };
    
//     return (
//     <form onSubmit={handleSubmit}>
//         <input
//         type="text"
//         id="username"
//         value={credentials.username}
//         onChange={handleChange}
//         />
//         <input
//         type="password"
//         id="password"
//         value={credentials.password}
//         onChange={handleChange}
//         />
//         <button type="submit">Login</button>
//     </form>
//     );
// }

// export default LoginForm;


// components/LoginForm.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import postLogin from "../api/post-login.js";
import useAuth from "../hooks/use-auth.js";
import "./LoginForm.css"; // Import the CSS file

function LoginForm() {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    
    const [credentials, setCredentials] = useState({
        username: "",
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
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password).then((response) => {
                window.localStorage.setItem("token", response.token);
                setAuth({
                    token: response.token,
                });
                navigate("/");
            });
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="login-form">
            <h1>Login Here</h1>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={credentials.username}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={credentials.password}
                    onChange={handleChange}
                    className="form-control"
                />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    );
}

export default LoginForm;