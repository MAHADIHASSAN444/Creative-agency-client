import React from 'react';
import { Link } from 'react-router-dom';

const ServicesDetail = ({service}) => {
    const {_id,image, title, description}=service;
    
    return (

        <Link to={'/orderForm'} style={{ textDecoration: 'none' }} >
            <div className="card services-card my-5" style={{ height: 250 }}>
                <div className="card-body">
                    <img src={image} alt="No Image" style={{ height: '40px' }} />
                    <h3 className="text-dark">{title}</h3>
                    <p className="text-secondary">{description}</p>

                </div>
            </div>
        </Link>

        // <Link to={'/dashboard'} style={{textDecoration: 'none'}}>
        //      <div className="col-md-4 text-center">
        //         <img style={{ height:'75px'}} src={image} alt="" />
        //         <h3 className="mt-3 mb-3">{title}</h3>

        //         <p className= "text-secondary">{description} </p>
        //     </div>  
        // </Link>
        
        // <div className="col-md-4 text-center">
        // <img style={{ height:'75px'}} src={service.img} alt="" />
        //  <h3 className="mt-3 mb-3">{service.name}</h3>
        //  <p className= "text-secondary">lorem Ips your brand to the next level of information in  the world with no matter what you see here </p>

        // </div>
    );
};

export default ServicesDetail;