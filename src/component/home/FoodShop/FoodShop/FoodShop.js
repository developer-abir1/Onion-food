import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';
import Header from '../../Header/Header';
import Product from '../Product/Product';
import { Routes, Route, } from "react-router-dom";

const FoodShop = () => {
    const [product, setProduct] = useProduct()
    const [different, setDifferent] = useState('')
    const lunch = product.filter(pd => pd.category === "lunch")
    const dinner = product.filter(pd => pd.category === "dinner")
    const breakfast = product.filter(pd => pd.category === "breakfast")
    return (
        <div>
            <Header />
            <div className="text-center mt-5 mb-5">

                <a className="ml-3 text-2xl text-pink-400 border-b-2 border-pink-400  cursor-pointer"  >Breakfast </a>
                <a className="ml-3  text-2xl cursor-pointer" >Lunch </a>
                <a className="ml-3  text-2xl cursor-pointer"  >Dinner </a>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-3 gap-8 container mt-5 mb-5">
                {

                    product.slice(0, 6).map((pd, index) => <Product key={index} pd={pd}></Product>)

                }



            </div>
            <div className=" text-center mb-4">
                <button className=" bg-gray-300 p-2 rounded-md text-white hover:bg-gray-400">Check Out Your  Food </button>
            </div>
        </div>
    );
};

export default FoodShop;