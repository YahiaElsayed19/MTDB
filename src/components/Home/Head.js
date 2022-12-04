import React from 'react'
import classes from './Head.module.css'
import { Link } from 'react-router-dom'

const Head = (props) => {
    return (
        <div className={classes.head}>
            <h3>{props.title}</h3>
            <Link to={props.link}>See more</Link>
        </div>
    )
}

export default Head