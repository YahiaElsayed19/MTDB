import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
                <Link to="/home/movies">Movies</Link>
            </motion.li>
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.4 }}>
                <Link to="/home/tvshows">Tv Shows</Link>
            </motion.li >{" "}
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.5 }}>
                <Link to="/home/top-rated-movies">Top Rated Movies</Link>
            </motion.li>
            <motion.li onClick={onClickHandler} variants={listVariant}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.6 }}>
                <Link to="/home/top-rated-tvshows">Top Rated Tv Shows</Link>
            </motion.li>
        </motion.ul>
    )
}

export default Links