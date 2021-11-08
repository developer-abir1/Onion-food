import React from 'react';
import Footer from '../../Share/Footer/Footer';
import FoodShop from '../FoodShop/FoodShop/FoodShop';
import Header from '../Header/Header';
import OnionService from '../OnionService/OnionService';

const Home = () => {
    return (
        <section>
            <FoodShop></FoodShop>
            <OnionService></OnionService>
            <Footer />
        </section>
    );
};

export default Home;