import React, { useState } from 'react';
import {

    useParams
} from "react-router-dom";
import Food from '../Food/Food';
import useProduct from '../hooks/useProduct';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />





const ProductData = () => {
    const [products] = useProduct()
    const { prodId } = useParams()

    const productItems = products.find(pd => pd._id === prodId);

    const plus = "<"
    const minus = ">"
    return (
        <div className="   ">
            <div className="flex  ">
                <div className="w-1/2 flex justify-center align-items-center ml-4 mr-3">
                    <div className="  w-96 ">
                        <p className="text-3xl font-medium mb-4 text-justify text-uppercase" >{productItems?.name}</p>
                        <p className=" text-justify text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus numquam, magnam fuga quae quaerat odio ipsam debitis provident ea ad ducimus doloribus facilis nostrum aut voluptatem blanditiis voluptate dolore animi.</p>
                        <div className="flex">
                            <p className="text-2xl font-bold mt-6">${productItems?.price}</p>
                            <div className="border-2 flex justify-center rounded-3xl w-32 h-8 overflow-hidden  mt-4 ml-6  " >

                                <button className="   w-8    text-pink-600 text-xl  ">-</button>
                                <input className="text-center w-8" type="text" value="0" />

                                <button className="     text-pink-600 text-xl  w-8  ">+</button>
                            </div>

                        </div>
                        <div>
                            <button className="bg-red-600 p-2 text-white rounded-3xl w-36 mt-6 ">{element} Add</button>
                        </div>
                        <div className="flex justify-between mt-24 overflow-hidden ">
                            {/* <button className="text-6xl border-2 rounded-3xl w-58 hover:bg-gray-300 ">{plus}</button> */}
                            <img className="w-24" src={productItems?.photo} alt="" srcset="" />
                            <img className="w-24" src={productItems?.photo} alt="" srcset="" />

                            <button className="text-5xl   w-58 hover:bg-gray-300">{minus}</button>

                        </div>
                    </div>

                </div>
                <div className="w-1/2 flex justify-center  ">
                    <img className="w-96 md:w-1/2 xl:w-1/2 " src={productItems?.photo} alt="" />
                </div>
            </div >

        </div >
    );
};

export default ProductData;