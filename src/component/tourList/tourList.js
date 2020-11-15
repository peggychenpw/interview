import React from 'react'
import './tourList.scss'
import TourItem from '../tourItem/tourItem'

const TourList = ({ currenTourList, loading }) => {
    return (
        <div className='tourList'>
            {currenTourList.map(tourItem => <div key={tourItem.id}>
                <TourItem tourItem={tourItem} />
            </div>)}
        </div>
    )
}

export default TourList 
