import React from 'react';
import './OurWorks.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carousel1 from '../../../images/carousel1.png';
import carousel2 from '../../../images/carousel2.png';
import carousel3 from '../../../images/carousel3.png';
import carousel4 from '../../../images/carousel4.png';
import carousel5 from '../../../images/carousel5.png';



// export default class SimpleSlider extends Component {
//     render() {
const OurWorks = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section className="carouseles">
            <h1 className="text-white">Here are some of <span style={{color:'#7AB259'}}>Our Works</span></h1>
        <Slider {...settings}>
          <div className="carousels-item">
            <img style={{height:'500px'}} src={carousel1} alt=""/>
          </div>
          <div className="carousels-item">
          <img style={{height:'100%'}} src={carousel2} alt=""/>
            <h3>2</h3>
          </div>
          <div className="carousels-item">
          <img style={{height:'100%'}} src={carousel3} alt=""/>
            <h3>3</h3>
          </div>
          <div className="carousels-item">
          <img style={{height:'100%'}} src={carousel4} alt=""/>
            <h3>4</h3>
          </div>
          <div className="carousels-item">
          <img style={{height:'100%'}} src={carousel5} alt=""/>
            <h3>5</h3>
          </div>
          {/* <div>
            <h3>6</h3>
          </div> */}
        </Slider>
      </section>
    );
};


export default OurWorks;