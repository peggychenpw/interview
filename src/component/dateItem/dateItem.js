import React from 'react'

const DateItem = (props) => {
    const { tourDateString } = props
    const date = tourDateString.slice(5).replace("-", "/")

    const getDayOfWeek = (theDate) => {
        const dayOfWeek = new Date(theDate).getDay();
        return isNaN(dayOfWeek) ? null :
            ['日', '一', '二', '三', '四', '五', '六'][dayOfWeek];
    }

    const weekday = getDayOfWeek(tourDateString)
    const formatDate = `${date}(${weekday})`


    return (
        <>
            {formatDate}
        </>
    )
}

export default DateItem
