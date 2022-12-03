import React from 'react'
import { useLocation } from 'react-router-dom'
import extractData from '../components/API/extractData'
import extractGenres from '../components/API/extractGenres'
import classes from './ItemPage.module.css'
import GoToTop from '../Helpers/GoToTop'

const ItemPage = () => {
    const location = useLocation()
    const data = location.state.itemData;
    const type = location.state.itemType;
    const { title, year, image, description, stars, ids } = extractData(data, type)
    const genres = extractGenres(ids, type)
    const itemGenere = genres.map(genre =>
        <li key={Math.random() * 1000}>{genre}</li>)
    return (
        <>
            <div className={classes['item-page']}>
                <div className={classes.container}>
                    <h3>{title} ({year})</h3>
                    <p className={classes.star}>{stars}⭐</p>
                    <img src={image} alt={title} />
                    <ul className={classes.genres}> {itemGenere} </ul>
                    <p className={classes.des}>{description}</p>
                </div>
            </div>
            <GoToTop />
        </>
    )
}

export default ItemPage