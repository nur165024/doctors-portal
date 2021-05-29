import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserLoginContext } from '../../../App';
import './NavBar.css';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserLoginContext);

    let userLoginCheck;
    if (loggedInUser.email) {
        userLoginCheck = <li className="nav-item">
                            <Link className="nav-link mr-5" to="/admin/dashboard">Dashboard</Link>
                        </li>
    }else{
        userLoginCheck = <li className="nav-item">
                            <Link className="nav-link mr-5" to="/login">Login</Link>
                        </li>
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-5" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Dental Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/">Reviews</Link>
                    </li>
                    
                    {
                        userLoginCheck
                    }
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;