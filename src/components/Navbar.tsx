import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 justify-end">

            <Link className="btn btn-ghost normal-case text-xl" to="/register-form/register">
            Register Form
            </Link>

            <Link className="btn btn-ghost normal-case text-xl" to="/register-form/login">
            Login Form
            </Link>

            </div>
        </div>
    )
    
}