import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { faCalendar, faCogs, faFileAlt, faSignOutAlt, faHome, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserLoginContext } from '../../../App';
import firebase from "firebase/app";

const SideBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserLoginContext);
    
    const handleClickLogout = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({});
            return Redirect('/');
        }).catch((errorMessage) => {
            console.log(errorMessage);
        });
    }

    return (
        <div className="col-md-2">
            <div className="menuBar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/admin/dashboard"><FontAwesomeIcon icon={faTh} /> Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/appointment"><FontAwesomeIcon icon={faCalendar} /> Appointment</Link>
                        </li>
                        <li>
                            <Link to="/admin/patient"><FontAwesomeIcon icon={faUserFriends} /> Patients</Link>
                        </li>
                        <li>
                            <Link to="/admin/prescription"><FontAwesomeIcon icon={faFileAlt} /> Prescriptions</Link>
                        </li>
                        <li>
                            <Link to="#"><FontAwesomeIcon icon={faCogs} /> Setting</Link>
                        </li>
                        <li>
                            <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                        </li>
                        <li>
                            <Link onClick={handleClickLogout} to="#"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;