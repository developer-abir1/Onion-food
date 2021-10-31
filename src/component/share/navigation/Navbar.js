import React from 'react';
import logo from '../../image/logo2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const element = <FontAwesomeIcon icon={faShoppingCart} />

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky ">
            <div className="container ">
                <Link to="/">   <a className="navbar-brand"  ><img className="w-24" src={logo} alt="" /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto  ">
                        <li className="nav-item mt-3 md:mt-0">
                            <a className="  ms-3     " aria-current="page" >{element}</a>
                        </li>
                        <li className="nav-item mt-3  md:mt-0">
                            <a className=" ms-3  " >Login</a>
                        </li>
                        <li className="nav-item mt-3  md:mt-0 mb-3">
                            <button className=" ms-3 bg-red-600 text-white rounded-2xl  sm:w-24 w-2/6 text-center p-1"  >Sing up</button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;