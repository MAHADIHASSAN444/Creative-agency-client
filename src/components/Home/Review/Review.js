import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Review = ({reviewData}) => {
    console.log(reviewData,'reviewData');
    const{userPhoto,name, company, description} =reviewData;
    const[loggedInUser,setLoggedInUser] =useContext(UserContext);

    // const {name,title,} = reviewData;
    return (
        <div className="card">
            <div className="mt-3 d-flex align-items-center">
                <img src={userPhoto} alt=""/>
                <div className="">
                      <h6>{name}</h6>
                     <p className='m-0'>{company}</p>
                      <p className="m-0">{description}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adip .Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip</p>

            </div>
            
        </div>
    );
};

export default Review;