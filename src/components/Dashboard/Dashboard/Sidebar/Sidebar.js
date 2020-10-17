import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { faCommentDots, faList, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import logo from '../../images/logos/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>
            <ul>
                   {/* <a className="navbar-brand m-4 mt-5 " href="/dashboard"><img src={logo} alt="" style={{ height: '50px' }} /></a> */}
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
                 <FontAwesomeIcon icon={faCommentDots}/> <span>Service List</span>
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
                     <FontAwesomeIcon icon={faPlus}/> <span>Service List</span>
                     </Link> 
                     </li>
                     <li>
                     <Link to="makeAdmin" className="sidebar-link">
                     <FontAwesomeIcon icon={faUserPlus}/> <span>Make Admi</span>
                     </Link>
                     </li>
                 </div>

            </ul>
        </div>
    );
};

export default Sidebar;