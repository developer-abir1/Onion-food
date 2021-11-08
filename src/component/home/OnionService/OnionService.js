import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faBell, faCar, faCaravan, faCoffee, faTruckMoving } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight, faCaretSquareUp } from '@fortawesome/free-regular-svg-icons';
import { faDeviantart } from '@fortawesome/free-brands-svg-icons';

const element = <FontAwesomeIcon className="text-green-500" icon={faArrowAltCircleRight} />


const OnionService = () => {
    return (
        <section className="container mt-3 mb-3">
            <div className="w-2/5 mb-3 mt-3 text-gray-900">
                <h1 className="text-2xl text-gray-900 mb-3">Whey you choose us</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis enim deleniti  </p>
            </div>


            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="hover:shadow-2xl  rounded-md p-2 cursor-pointer">
                        <div className="flex justify-center">
                            <img className="w-100" src="https://i.ibb.co/hHMC4WC/adult-blur-blurred-background-687824.png" alt="" />
                        </div>
                        <div className="mb-4 mt-2 flex ">
                            <div className="w-24   mt-3  ">
                                <FontAwesomeIcon className=" text-5xl rounded-full p-2 mr-2  bg-red-600   text-center text-white      " icon={faCar} />
                            </div>
                            <div className="mr-10 w-96  ">
                                <h1 className="text-xl mt-3 mb-4 "> Fast Delivery </h1>
                                <p className="text-xs text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae accusantium incidunt alias libero sint sed obcaecati, aperiam similique et, sunt eius eaque vero. Fuga, nemo aut ab dignissimos ipsam rem.</p>
                                <p className="text-blue-500 mt-2">See more {element}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hover:shadow-2xl  p-2 cursor-pointer">
                        <div className="flex justify-center">
                            <img className="w-100" src="https://i.ibb.co/h7J0gdv/chef-cook-food-33614.png" alt="" />
                        </div>
                        <div className="mb-4 mt-2 flex ">
                            <div className="w-24   mt-3  ">
                                <FontAwesomeIcon className=" text-5xl rounded-full p-2 mr-2  bg-red-600   text-center text-white      " icon={faBell} />
                            </div>
                            <div className="mr-10 w-96  ">
                                <h1 className="text-xl mt-3 mb-4 "> A good auto response   </h1>
                                <p className="text-xs text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae accusantium incidunt alias libero sint sed obcaecati, aperiam similique et, sunt eius eaque vero. Fuga, nemo aut ab dignissimos ipsam rem.</p>
                                <p className="text-blue-500 mt-2">See more {element}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hover:shadow-2xl p-2 cursor-pointer" >
                        <div className="flex justify-center">
                            <img className="w-100" src="https://i.ibb.co/r5cf11Z/architecture-building-city-2047397.png" alt="" />
                        </div>
                        <div className="mb-4 mt-2 flex ">
                            <div className="w-24   mt-3  ">
                                <FontAwesomeIcon className=" text-5xl rounded-full p-2 mr-2  bg-red-600   text-center text-white      " icon={faTruckMoving} />
                            </div>
                            <div className="mr-10 w-96  ">
                                <h1 className="text-xl mt-3 mb-4 "> Home  Delivery </h1>
                                <p className="text-xs text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae accusantium incidunt alias libero sint sed obcaecati, aperiam similique et, sunt eius eaque vero. Fuga, nemo aut ab dignissimos ipsam rem.</p>
                                <p className="text-blue-500 mt-2">See more {element}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default OnionService;