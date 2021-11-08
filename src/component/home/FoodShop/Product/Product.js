import React from 'react';

const Product = (props) => {
    const { name, price, _id, photo } = props.pd;
    return (
        <div className=" rounded-md  hover:shadow-2xl cursor-pointer">
            <div className="flex justify-center">
                <img className="w-44  " src={photo} alt="" srcset="" />
            </div>
            <div className="text-center mt-4 mb-4">
                <h3 className="font-bold text-gray-600 mb-2">{name}</h3>
                <p className="text-gray-500 mb-2">How We dream about our future</p>
                <h3 className=" font-bold">$ {price}</h3>
            </div>
        </div>
    );
};

export default Product;