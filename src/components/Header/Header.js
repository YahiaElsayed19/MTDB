import React from 'react'
import NavLinks from './NavLinks'
import MobileNav from './MobileNav'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <div>
                <Link to='/home' className={classes.logo}>MTDB</Link>
            </div>
            <NavLinks />
            <MobileNav />
        </header>
    )
}

export default Header