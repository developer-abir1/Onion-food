import React from 'react';

import './Header.css'
const Header = () => {
    return (
        <section className="flex justify-content-center align-items-center flex-column header-section  container"  >
            <div>
                <h1 className="text-center text-2xl mb-3 md:text-4xl  ">Best food waiting for your belly </h1>
            </div>
            <div class="input-group mb-3 w-1/2">

                <input type="text" class="form-control rounded-md text-center   focus:ring-2 focus:ring-red-600" placeholder="Search foods" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button class="input-group-text text-white bg-red-500 rounded-full hover:bg-red-600 cursor-pointer" id="basic-addon2">Search </button>
            </div>
        </section >
    );
};

export default Header;