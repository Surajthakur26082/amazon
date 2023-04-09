import React, { useState } from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "./StateProvider";
import {auth}  from './firebase';


function Header() {
    const[{ basket, user }] = useStateValue();

    console.log(basket);

    const login = () => {
        if (user) {auth.signOut();}
    }

    return (
        

        <><nav className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="image"></img>

            </Link>

            <div className="header_search">
            <input type="text" className="header_searchInput"></input>
            <SearchIcon className="header_searchIcon" />
            </div>

            <><div className="header_nav">
                <Link to={!user && "/login"} className="header_link">
                    <div onClick={login} className="header_option">
                        <span className="option_one">Hello {user?.email}</span> 
                        <span className="option_two">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </div></>

            <><div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="option_one">Text</span> 
                        <span className="option_two">number 2</span>
                    </div>
                </Link>
            </div></>

            <><div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="option_one">Text</span> 
                        <span className="option_two">number 3</span>
                    </div>
                </Link>
            </div></>

                <><Link to="/Checkout">
                <div className="header_basket">
                    
                        <ShoppingCartIcon  className="option_two basket_count" />
                        <span className="basket_count">{basket?.length}</span>
                   
                </div>
                </Link></>
            

        </nav>
        </>
       

    );

}
export default Header;