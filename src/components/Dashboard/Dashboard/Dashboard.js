import React from 'react';
import OrderHistory from '../../Admin/OrderHistory/OrderHistory';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section className="row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-6">
                {/* <OrderHistory></OrderHistory> */}
            </div>
            
        </section>
    );
};

export default Dashboard;