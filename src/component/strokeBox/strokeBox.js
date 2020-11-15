import React from 'react'
import './strokeBox.scss'

const StrokeBox = () => {
    return (
        <div className="strokeBox">
            <strong className='strokeText'>
                <h2 className="searchTitle">台灣旅遊 </h2>
                <span className="searchTotal">
                    <span className="searchCount">
                        130
                        </span>
                        個行程，平均團費
                        <span className="searchCount">
                        4493</span>
                        元
                        </span>
            </strong>
        </div>
    )
}

export default StrokeBox
