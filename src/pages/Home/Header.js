import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to='/home'>Home</Link></li>
        {/* <li><Link to='/About'>About</Link></li> */}
        <li><Link to='/reviews'>Reviews</Link></li>
        {/* <li><Link to='/contactus'>Contact Us</Link></li> */}
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
        {/* <li>{user ? <button className="btn btn-ghost" onClick={logout} >Sign Out</button> : <Link to="/login">Login</Link>}</li> */}
    </>
    return (
        <div class="navbar  bg-neutral text-neutral-content">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content  bg-neutral mt-3 p-2 shadow rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;