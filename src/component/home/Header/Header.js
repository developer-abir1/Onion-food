import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <section className="header-section flex justify-center align-items-center container">


            <input type="text" placeholder="search food item " className=" w-2/6    p-1  rounded-xl  relative focus:border-white " />
            <button className="bg-red-600 text-white p-1 rounded-xl  absolute xl:ml-96 2xl:ml-96 lg:ml-96 md:w-24 w-16 2xl:w-28  ml-40">Search</button>

        </section>
    );
};

export default Header;