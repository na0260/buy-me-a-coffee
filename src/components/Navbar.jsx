import React from 'react';

const Navbar = () => {
    return (
        <nav className='bg-slate-900 text-white flex justify-center'>
            <div className="container flex justify-between items-center px-4 h-16">
                <div className="font-bold text-2xl">BuyMe@Coffee!</div>
                <ul className="flex justify-between gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Sign Up</li>
                    <li>Login</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;