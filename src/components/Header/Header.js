import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
       <div className="header">
           <img className="logo" src={logo} alt=""/>
           <nav>
               <a href="/home">Home</a>
               <a href="/review">Review</a>
               <a href="/manage">Manage your account</a>
           </nav>
       </div>
    );
};

export default Header;