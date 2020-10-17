import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { faCommentDots, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../../../App';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../../../../images/logos/logo.png';

const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        fetch('https://arcane-ocean-22227.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            <ul>
                   <a className="navbar-brand m-4 mt-5 " href="/dashboard"><img src={logo} alt="" style={{ height: '50px' }} /></a>
                <li>
                    <Link to="/orderForm" className="sidebar-link">
                    <FontAwesomeIcon icon={faShoppingCart}/> <span>order</span>
                    </Link>
                   
                </li>

                 <li>
                 <Link to="/serviceList" className="sidebar-link">
                 <FontAwesomeIcon icon={faList}/> <span>Service List</span>
                 </Link>
                 </li>

                 <li>
                 <Link to="postReview" className="sidebar-link">
                 <FontAwesomeIcon icon={faCommentDots}/> <span>Review</span>
                 </Link>
                 </li>
                 <div>
                     <li>
                     <Link to="admin" className="sidebar-link">
                     <FontAwesomeIcon icon={faList}/> <span>Service List</span>
                     </Link>
                     </li>
                     <li>
                     <Link to="addService" className="sidebar-link">
                     <FontAwesomeIcon icon={faPlus}/> <span>Add Service</span>
                     </Link> 
                     </li>
                     <li>
                     <Link to="makeAdmin" className="sidebar-link">
                     <FontAwesomeIcon icon={faUserPlus}/> <span>Make Admin</span>
                     </Link>
                     </li>
                 </div>

            </ul>
        </div>
    );
};

export default Sidebar;