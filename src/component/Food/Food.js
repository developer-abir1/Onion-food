import React from 'react';
import { Link } from 'react-router-dom'
const Food = (props) => {
    const { name, photo, price, _id } = props.pd
    return (
        <Link to={`/product/${_id}`}>
            <div className=" hover:shadow-xl rounded-md p-2 cursor-pointer" >
                <div className=" flex justify-center ">
                    <img className=" w-64  p-4" src={photo} alt="" />
                </div>
                <div className="text-center">
                    <p className="  text-xl text-black  mt-2">{name}</p>
                    <p className="mt-2 text-gray-400">How we dream about our future  </p>
                    <p className="font-bold mt-2">${price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Food;