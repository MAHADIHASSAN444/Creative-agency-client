import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import AllOrder from '../../ManageOrder/AllOrder/AllOrder';

const OrderHistory = () => {
    const [order,setOrder]=useState([]);
    useEffect(() =>{
        fetch('https://arcane-ocean-22227.herokuapp.com/allOrders')
        .then(res =>res.json())
        .then(data =>setOrder(data))
        
    },[]);
    return (
        <div style={{ height:'100vh', background:'#F4F7FC'}} className="p-5">
            <div>
                <h1>Order list</h1>
            </div>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Service</th>
                            <th scope="col">Project Details</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div>
                {
                order.map(data => <AllOrder data={data}></AllOrder>)
                }
            </div>
            
        </div>
    );
};

export default OrderHistory;