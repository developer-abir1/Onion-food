import React from 'react';

const TotalValue = (props) => {
    const { card } = props;
    const totalQuantity = card.reduce((prev, item) => prev + item.quantity, 0);
    const totalPrice = card.reduce((prev, item) => prev + item.price, 0);
    const shipping = totalPrice ? 15 : 0;

    const delivery = totalPrice ? 50 : 0
    const text = totalPrice ? 16 : 0;
    const grandTotal = totalPrice ? totalPrice + shipping + delivery + text : 0

    return (
        <div className="  ">
            <div>
                <h2 className="md:text-3xl  text-center  mb-4 font-bold  md:font-medium">Total Quantity <span className="font-bold text-yellow-600">{totalQuantity}</span> </h2>
                <div className="flex">
                    <div className="">
                        <p className="text-xl">Price:</p>
                        <p className="text-xl">Shipping: </p>
                        <p className="text-xl">Delivery:</p>
                        <p className="text-xl">Text: </p>

                    </div>
                    <div className=" ml-20 ">
                        <p className="text-xl ">${totalPrice}</p>
                        <p className="text-xl">${shipping}</p>
                        <p className="text-xl">${delivery}</p>
                        <p className="text-xl">${text}</p>

                    </div>
                </div>

                <div className="border-t-2 mt-5 border-yellow-700 flex">
                    <div>
                        <h1 className="text-xl md:text-xl xl:text-2xl text-yellow-700">Grand Total: </h1>
                    </div>
                    <div className="">
                        <span className="text-xl md:text-xl xl:2xl text-yellow-700  font-bold ml-8"> $ {grandTotal}</span>
                    </div>
                </div>
            </div>

            <div className="mt-14">
                <button className="w-full text-white bg-yellow-600 p-2 rounded-md"> Proceed Checkout</button>
            </div>

        </div>
    );
};

export default TotalValue;