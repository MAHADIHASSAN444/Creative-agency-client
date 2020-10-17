import React from 'react';
import Sidebar from '../../Dashboard/Dashboard/Sidebar/Sidebar';
import OrderHistory from '../OrderHistory/OrderHistory';

const Admin = () => {
    return (
        <div className="row">
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <OrderHistory></OrderHistory>
            </div>
            
        </div>
    );
};

export default Admin;