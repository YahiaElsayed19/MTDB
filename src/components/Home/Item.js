import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Item.module.css'
import extractData from '../API/extractData'
const Item = (props) => {
    const { title, year, image } = extractData(props.result, props.type)
    return (
        <Link>
            <div className={classes.item}>
                <img src={image} alt={title}/>
                <div className={classes.name}>{title} ({year})</div>
            </div>
        </Link>
    )
}

export default Item