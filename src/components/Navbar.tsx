import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            Navbar
            <div><Link to="/register">Register Form</Link></div>
            <div><Link to="/login">Login Form</Link></div>
        </div>
    )
    
}