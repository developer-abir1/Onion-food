import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../img/logo2.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light  ">
            <div className="container">
                <Link to="/"> <a className="navbar-brand  " ><img className="w-44" src={logo} alt="" srcset="" /></a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <a className="nav-link" href="#"><FontAwesomeIcon className=" " icon={faShoppingCart} /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <Link to="/dinner">     <li className="nav-item">
                            <a className="nav-link" href="#">donner</a>
                        </li></Link>
                        <li className="nav-item">
                            <a className="nav-link " href="#">  <button className="bg-red-600 p-1 w-24  rounded-full text-white">Singin </button> </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;