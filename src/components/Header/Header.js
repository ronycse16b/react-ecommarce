import React from 'react';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-sky-900 fixed top-0 left-0 right-0 z-40 ">
              <div className='container mx-suto'>
              <div className="navbar-start">
                    <div className="dropdown  text-slate-50">
                        <label  tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  text-black ">
                        <li><a>Order</a></li>
                        <li><a>Order Review</a></li>
                        <li><a>Inventory Mangement</a></li>
                        <li><a>Login</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl "> <img className="" src={logo} alt="" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0  text-slate-50">

                        <li><a>Order</a></li>
                        <li><a>Order Review</a></li>
                        <li><a>Inventory Mangement</a></li>
                        <li><a>Login</a></li>

                    </ul>
                </div>
              </div>

            </div>

        </div>
    );
};

export default Header;