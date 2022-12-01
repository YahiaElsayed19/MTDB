import React, { useState } from 'react'
import classes from './Header.module.css'
import { HiMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
const Header = () => {
    const [visible, setVisible] = useState(false)
    const menuHandler = () => {
        setVisible(prevState => !prevState)
    }
    return (
        <header className={classes.header}>
            <Link to="/home" className={classes.logo}> Movies</Link>
            <div className={classes.search}>
                <input type="text" placeholder='search' />
            </div>
            <div className={classes.menu}>
                <HiMenu size="30px" className={classes.icon} onClick={menuHandler} />
                {visible && <ul className={classes.categories}>
                    <li>Action</li>
                    <li>Drama</li>
                    <li>Comedy</li>
                    <li>Scince Fiction</li>
                    <li>Adventure</li>
                    <li>Animation</li>
                    <li>Crime</li>
                    <li>Documentary</li>
                    <li>Family</li>
                    <li>Fantasy</li>
                    <li>History</li>
                    <li>Horror</li>
                    <li>Adventure</li>
                    <li>Music</li>
                    <li>Mystery</li>
                    <li>Romance</li>
                    <li>War</li>
                    <li>Western</li>
                </ul>
                }
            </div>
        </header>
    )
}

export default Header