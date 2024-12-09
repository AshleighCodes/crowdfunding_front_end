// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import postLogin from "../api/post-login.js";
// import postSignup from "../api/post-signup.js";

// function SignupForm() {
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({
//         username: "",
//         email: "",
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
//         event.preventDefault();
        
//         const { username, email, password } = credentials;
//         if (username && email && password) {
//             postSignup(username, email, password)
//             .then(() => {
//                 return postLogin(username, password);
//             })
            
//             .then((loginResponse) => {
//                 window.localStorage.setItem("token", loginResponse.token);
//                 navigate("/");
//             });
//         }
//     };
    
//     return (
//     <form>
//         <div>
//             <label htmlFor="username">Username:</label>
//             <input
//             type="text"
//             id="username"
//             placeholder="Enter username"
//             onChange={handleChange}
//             />
//         </div>
        
//         <div>
//             <label htmlFor="username">Email:</label>
//             <input
//             type="text"
//             id="email"
//             placeholder="Enter email"
//             onChange={handleChange}
//             />
//         </div>
        
//         <div>
//             <label htmlFor="password">Password:</label>
//             <input
//             type="password"
//             id="password"
//             placeholder="Password"
//             onChange={handleChange}
//             />
//         </div>
//         <button type="submit" onClick={handleSubmit}>
//             Sign up
//         </button>
//     </form>
// );
// }

// export default SignupForm;


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
            <form className="signup-form">
                <h2 className="signup-form-title">Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter username"
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="signup-button" onClick={handleSubmit}>
                    Sign up
                </button>
            </form>
        </div>
    );
}

export default SignupForm;