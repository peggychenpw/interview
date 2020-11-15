import React from 'react'
import './tagList.scss'

const TagList = ({ tags }) => {
    const displayTags = [...tags]
    if (displayTags.length > 4) { displayTags.length = 4 }

    return (
        <div className='tagList d-flex'>
            {displayTags.map((tag, idx) => (
                <div key={idx} className='tagItem'>{tag}</div>
            ))}
        </div>
    )
}

export default TagList
