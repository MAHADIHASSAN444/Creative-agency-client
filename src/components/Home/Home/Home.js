import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Header from '../Header/Header';
import OurWorks from '../OurWorks/OurWorks';
import Review from '../Review/Review';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <OurWorks></OurWorks>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;