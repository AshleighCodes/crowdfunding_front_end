import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
    <div>
        <nav class="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <Outlet />
    </div>
    );
}

export default NavBar;