import React from 'react'
import DateItem from '../dateItem/dateItem'
import './datelist.scss'

const DateList = ({ dateList }) => {

    //only display less than 4 dates on itemCard
    const displayList = [...dateList]
    if (displayList.length > 4) { displayList.length = 4 };

    return (
        <div className="dateList d-flex">
            {displayList.map((groupItem, idx) => (
                <div className="groupItem" key={idx} >
                    <DateItem className='dateItem' tourDateString={groupItem.date} />
                    <div className='remainCount'>可售{groupItem.quantity}位</div>
                </div>
            ))}
        </div>
    )
}

export default DateList
