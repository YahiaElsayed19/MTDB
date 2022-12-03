import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import classes from './NavLinks.module.css'
const Links = (props) => {

    const onClickHandler = () => {
        props.isMobile && props.closeMobileMenu()
    }
    const listVariant = {
        hidden: {
            opacity: 0,
            y: -40
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <motion.ul
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.3 }}
        >
            <motion.li onClick={onClickHandler}
                variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.3 }}>
                <NavLink to="/home/movies" className={(navData) => navData.isActive ? `${classes.active}` : ''}>Movies</NavLink>
            </motion.li>
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.4 }}>
                <NavLink to="/home/tvshows" className={(navData) => navData.isActive ? `${classes.active}` : ''}>Tv Shows</NavLink>
            </motion.li >{" "}
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.5 }}>
                <NavLink to="/home/top-rated-movies" className={(navData) => navData.isActive ? `${classes.active}` : ''}>Top Rated Movies</NavLink>
            </motion.li>
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.6 }}>
                <NavLink to="/home/top-rated-tvshows" className={(navData) => navData.isActive ? `${classes.active}` : ''}>Top Rated Tv Shows</NavLink>
            </motion.li>
        </motion.ul>
    )
}

export default Links