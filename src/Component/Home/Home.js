import React from 'react';
import Banner from '../Pages/Banner/Banner';
import Brand from '../Pages/Brand/Brand';
import Footer from '../Pages/Footer/Footer';
import Navbar from '../Pages/Navbar/Navbar';
import Review from '../Pages/Review/Review';
import Services from '../Pages/Services/Services';
import Work from '../Pages/Work/Work';

const Home = () => {
    

    return (
        <div>
            

            <Navbar></Navbar>
            <Banner></Banner>
            <Brand></Brand>
            <Services></Services>
            <Work></Work>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;