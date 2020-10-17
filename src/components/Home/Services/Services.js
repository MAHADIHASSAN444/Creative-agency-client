import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServicesDetail from '../ServicesDetail/ServicesDetail';





const serviceData=[
        {
            name: 'Web & Mobile design',
            img: service1
            
        },
        {
            name: 'Graphic Design',
            img: service2
        },
        {
            name: 'Web Development',
            img: service3
        }
]

const Services = () => {
    return (
            <section>
                <div className="services-container  mt-5 d-flex justify-content-center">
                <h1 >Provide Awesome <span style={{color:'#7AB259'}}>Services</span></h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="w-75 mt-5 mb-7 row">
                        {
                          serviceData.map(service => <ServicesDetail service={service}></ServicesDetail>)  
                        }
                    </div>
                </div>

            </section>
    );
};

export default Services;