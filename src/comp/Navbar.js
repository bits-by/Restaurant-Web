import React from 'react'
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>EatSure</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">Login</a>
            </div>
        </nav>
    )
}

export default Navbar;
