// components/AuthProvider.jsx
import { createContext, useState } from "react";

// Create the Context
export const AuthContext = createContext();

// Create the component that will wrap our app
export const AuthProvider = (props) => {
    const [auth, setAuth] = useState({
        token: window.localStorage.getItem("token"),
    });
    
    return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {props.children}
        </AuthContext.Provider>
    );
};