import React from 'react'
import { useLocation } from 'react-router-dom'
import extractData from '../components/API/extractData'
import extractGenres from '../components/API/extractGenres'
import getTrailers from '../components/API/getTrailers'
import classes from './ItemPage.module.css'
import GoToTop from '../Helpers/GoToTop'
import YouTube from 'react-youtube'
import { useQuery } from 'react-query'

const ItemPage = () => {
    const location = useLocation()
    const data = location.state.itemData;
    const type = location.state.itemType;
    const { id, title, year, image, description, stars, ids } = extractData(data, type)
    const genres = extractGenres(ids, type)
    const itemGenere = genres.map(genre =>
        <li key={Math.random() * 1000}>{genre}</li>)
    const { data: videosData } = useQuery("get videos", () => getTrailers(type, id))
    const videoId = videosData?.data.results[0].key
    return (
        <>
            <div className={classes['item-page']}>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <img src={image} alt={title} />
                        <h3>{title} ({year})</h3>
                        <p className={classes.star}>{stars}⭐</p>
                    </div>
                    <div className={classes.right}>
                        <ul className={classes.genres}> {itemGenere} </ul>
                        <h3 className={classes['des-title']}>Short Description</h3>
                        <p className={classes.des}>{description}</p>
                    </div>
                </div>
                <YouTube videoId={videoId} />
            </div>
            <GoToTop />
        </>
    )
}

export default ItemPage