import React from 'react'
import logo from '../../../img/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <section className=" bg-black   footer-section ">
            <footer class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                            <img src={logo} alt="" />
                        </a>

                    </div>
                    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">


                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">

                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-white cursor-pointer  ">About Onion Food </a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer  ">Read our Blog</a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer  ">Sing Up to Delivery</a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer  ">Add your Restaurant</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">

                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-white cursor-pointer   ">Get Help </a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer ">Read FAQs </a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer ">View all cities</a>
                                </li>
                                <li>
                                    <a class="text-white cursor-pointer ">Restaurants near me</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-black ">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">Copyright © 2020 onine food —

                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                            <a class="ml-3 text-white cursor-pointer ">
                                <span>Privacy Policy</span>
                            </a>
                            <a class="ml-3 text-white cursor-pointer ">
                                <span>Terms of use </span>
                            </a>
                            <a class="ml-3 text-white cursor-pointer ">
                                <span>Pricing</span>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;