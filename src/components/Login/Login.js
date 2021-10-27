import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSign } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const google = <FontAwesomeIcon icon={faGoogle} />
const singIn = <FontAwesomeIcon icon={faSign} />

const Login = () => {
    return (
        <div className="flex justify-center">

            <div className="text-center card w-3/4">
                <h2 className="text-4xl font-medium mb-2 mt-2">Create a new account</h2>
                <from className=" ">
                    <input type="text" placeholder="Enter Your email address " className="border-1 mt-3 mb-3 p-2 border-yellow-400 rounded-md   w-2/6 text-center" />
                    <br />
                    <input type="text" placeholder="Enter Your Password" className="border-1 mt-3 mb-3 p-2 border-yellow-400 w-2/6 text-center rounded-md" />
                    <br />
                    <input type="submit" className="p-1 w-2/6 rounded-md border-2 border-yellow-300  text-3xl  hover:text-white  hover:bg-yellow-500 mb-3" value="Login " />
                </from>
                <div>
                    <a className="">New user? <span className="text-red-400 ">registration</span></a>
                </div>
                <div className="flex justify-center">
                    <div className=" w-3/4 mb-2 ">
                        <div className="border-t-2">

                        </div>
                        <div>
                            <h2>OR</h2>
                        </div>

                        <div className="border-t-2">

                        </div>
                    </div>
                </div>


                <div>
                    <button className="mt-3 mb-3  p-2 border-2 w-3/4 rounded-md hover:bg-yellow-100">{google} Sing in With google</button>
                </div>

            </div>
        </div>
    );
};

export default Login;