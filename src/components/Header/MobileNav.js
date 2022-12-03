import React, { useState } from "react";
import classes from "./MobileNav.module.css";
import { FiMenu } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";
import Links from "./Links";

const MobileNav = (props) => {
    const [showMenu, setShowMenu] = useState(false);

    const iconHandler = () => {
        setShowMenu(!showMenu);
    };
    const closeMobileMenu = () => {
        setShowMenu(false);
    }
    const openIcon = (
        <FiMenu
            className={classes.icon}
            size="30px"
            onClick={iconHandler}
        />
    );

    const closeIcon = (
        <BiMenuAltRight
            className={classes.icon}
            size="30px"
            onClick={iconHandler}
        />
    );

    return (
        <nav className={classes["mobile-nav"]}>
            {showMenu ? closeIcon : openIcon}
            {showMenu && (<Links isMobile={true} closeMobileMenu={closeMobileMenu} />)}
        </nav>
    );
};

export default MobileNav;
