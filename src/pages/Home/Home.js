import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;