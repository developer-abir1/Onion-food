import React, { useState } from 'react';
import Food from '../../Food/Food';
import useProduct from '../../hooks/useProduct';
import { NavLink } from 'react-router-dom'

const Restaurant = () => {
    const [products] = useProduct()

    return (
        <>
            <div className=" flex justify-center ">
                <div className="tabs mt-4">

                    <NavLink to="/#" activeStyle={{ color: 'pink', borderBottomColor: '2px solid pink' }}>
                        <a className="tab tab-bordered ml-10 text-2xl text-pink-500    border-b-2  hover:text-pink-500 border-pink-500">Breakfast</a>
                    </NavLink>

                    <NavLink to="/#" activeStyle={{ color: 'pink', borderBottomColor: '2px solid pink' }}>
                        <a className="tab tab-bordered ml-10 text-2xl hover:text-pink-500  hover:border-opacity-2 border-b-2 border-opacity-0 hover:border-pink-500">Lunch</a>
                    </NavLink>
                    <NavLink to="/#" activeStyle={{ color: 'pink', borderBottomColor: '2px solid pink' }}>
                        <a className="tab tab-bordered ml-10 text-2xl hover:text-pink-500  hover:border-opacity-2 border-b-2 border-opacity-0 hover:border-pink-500">Dinner</a>
                    </NavLink>






                </div>

            </div>
            <div className=" flex justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 mt-5 mb-5">
                    {
                        products.map((pd, index) => <Food key={index} pd={pd}></Food>)
                    }
                </div>
            </div>
        </>
    );
};

export default Restaurant;