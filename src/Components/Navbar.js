import React from 'react';
import { Route } from 'react-router-dom';
import './Styles.css';

const Navbar = () => {
    return (
        <div id='nav-bar'>
            <ul id='nav-list'>
                <Route exact={true} path='/' render={() => (
                    <>
                        <li><a href='/Help'>How To Play</a></li>
                    </>
                )} />
                <Route exact={true} path='/Game' render={() => (
                    <>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/Help'>How To Play</a></li>
                    </>
                )} />
                <Route exact={true} path='/Help' render={() => (
                    <>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/Game'>Play</a></li>
                    </>
                )} />
            </ul>
        </div>
    );
}

export default Navbar;