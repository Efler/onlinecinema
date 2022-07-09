import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => { //панель сверху сайта
    return (
        <div className="navbar">
            <div className="li">
                <li className="lia">
                    <Link to='/'>Фильмы</Link>
                    <Link to='/favourites'>Избранное</Link>
                </li>
            </div>
        </div>
    );
};

export default Navbar;