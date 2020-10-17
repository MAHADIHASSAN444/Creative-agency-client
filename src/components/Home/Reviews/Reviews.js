import React from 'react';
import Review from '../Review/Review';
import nash from '../../../images/nash.png';
import miriam from '../../../images/miriam.png';
import bria from '../../../images/bria.png';
// import Review from '../Review/Review';


const Reviews = () => {

    const review=[
        {
            id:0,
            image: nash,
            name: "Nash Patrik",
            title: 'CEO, Manpol',

        },
        {
            id:1,
            image: miriam,
            name: "Miriam Barron",
            title: 'CEO, Manpol',
        },
        {
            id:2,
            image: bria,
            name: " Bria Malone",
            title: 'CEO, Manpol',

        },
     
    ]

    return (
        <section className="my-5">
            <div className="container">
                <div>
                    <h1 className="text-center" >Clints <span style={{color:'#7AB259'}}>Feedback</span></h1>
                </div>
                <div className="card-deck mt-5">
                    {
                       review.map(reviewData => <Review reviewData={reviewData}></Review>) 
                    }
                </div>


            </div>
            
        </section>
    );
};

export default Reviews;