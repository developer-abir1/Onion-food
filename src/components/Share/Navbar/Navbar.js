import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import useCard from '../../../hooks/useCard';
import { useEffect } from 'react';

const element = <FontAwesomeIcon icon={faShoppingCart} />
const Navbar = () => {

    const [products] = useProduct()
    const [card] = useCard(products)

    const totalQuantity = card.reduce((prev, cur) => prev + cur.quantity, 0)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link to="/">     <a className="navbar-brand" >Navbar</a></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">Features</a>
                        <a className="nav-link" href="#">Pricing</a>
                        <Link to="/productsData">    <a className="nav-link"  >{element}{totalQuantity}</a></Link>
                        <Link to="/login">     <a className="nav-link"  >Login</a></Link>

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;