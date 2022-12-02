import React from 'react'
import { useLocation } from 'react-router-dom'
import extractData from '../components/API/extractData'

const ItemPage = () => {
    const location = useLocation()
    const data = location.state.itemData;
    const type = location.state.itemType;
    const { title, year, image, description ,stars} = extractData(data, type)
    return (
        <>
            <div>
                {title}
            </div>
            <div>
                {year}
            </div>
            <div>
                <img src={image} alt={title}/>
            </div>
            <div>
                {description}
            </div>
            <div>
                {stars}
            </div>
        </>
    )
}

export default ItemPage