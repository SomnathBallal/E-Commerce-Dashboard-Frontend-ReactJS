import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/signUp")
    }
    return (
        <div>
        <img alt="logo" className="logo" src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/134630508/original/a34d495c81c1a61aef64879a4dfecfd788aa5856/mern-stack-application-development.jpeg"/>
            {auth ?
                <ul className="nav-ul">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update Products</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link onClick={logout} to="/signUp">Logout ({JSON.parse(auth).name}) </Link></li>
                </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signUp">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            }
        </div>
    )
}

export default Nav;