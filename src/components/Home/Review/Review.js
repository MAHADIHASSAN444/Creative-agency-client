import React from 'react';

const Review = ({reviewData}) => {
    console.log(reviewData,'reviewData');

    // const {name,title,} = reviewData;
    return (
        <div className="card">
            <div className="mt-3 d-flex align-items-center">
                <img src={reviewData.image} alt=""/>
                <div className="">
                      <h6>{reviewData.name}</h6>
                      <p className="m-0">{reviewData.title}</p>
                </div>
            </div>
            <div className="card-body">
                <p className="card-text text-secondary">Lorem ipsum dolor sit amet, consectetur adip .Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip.Lorem ipsum dolor sit amet, consectetur adip</p>

            </div>
            
        </div>
    );
};

export default Review;