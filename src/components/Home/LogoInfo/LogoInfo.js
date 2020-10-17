import React from 'react';
import slack from'../../../images/logos/slack.png';
import google from'../../../images/logos/google.png';
import uber from'../../../images/logos/uber.png';
import netflix from'../../../images/logos/netflix.png';
import airbnb from'../../../images/logos/airbnb.png';


const LogoInfo = () => {
    return (
        <div className="row offset-1 d-flex justify-content-center">
            <div className="col-md-2">
            <img style={{height:'25%'}} src={slack} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
            <img style={{height:'25%'}} src={google} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
            <img style={{height:'25%'}} src={uber} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
            <img style={{height:'25%'}} src={netflix} alt="" className="img-fluid"/>
            </div>
            <div className="col-md-2">
            <img style={{height:'25%'}} src={airbnb} alt="" className="img-fluid"/>
            </div>
           
        </div>
    );
};

export default LogoInfo;