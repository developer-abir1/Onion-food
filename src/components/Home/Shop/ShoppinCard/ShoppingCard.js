import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShoppingCard = (props) => {
    const { card } = props
    const totalQuantity = card.reduce((prev, cur) => prev + cur.quantity, 0)

    return (
        <div>

            <Link to="/productsData" >

                <div className="w-14  ml-3 p-2 bg-green-300 fixed bottom-2  flex rounded-3xl  animate-pulse">

                    <svg className=" " xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>

                    <p className="font-bold "> {totalQuantity} </p>
                </div>

            </Link>


        </div >
    );
};

export default ShoppingCard;