import React from 'react';
import { Link } from 'react-router-dom';
import { faCalendar, faCogs, faFileAlt, faSignOutAlt, faTh, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideBar = () => {
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
                            <Link to="#"><FontAwesomeIcon icon={faUserFriends} /> Patients</Link>
                        </li>
                        <li>
                            <Link to="#"><FontAwesomeIcon icon={faFileAlt} /> Prescriptions</Link>
                        </li>
                        <li>
                            <Link to="#"><FontAwesomeIcon icon={faCogs} /> Setting</Link>
                        </li>
                        <li>
                            <Link to="#"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;