import React from 'react'
import ShareIcon from '@material-ui/icons/Share';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import './leftSidebar.scss'

const LeftSidebar = () => {
    return (
        <div className='leftSidebar'>
            <div className='shareButton'>
                <ShareIcon />分享搜尋結果
            </div>
            <div className="filterContainer">
                <div className='filterTitle'>
                    篩選項目
                </div>
                <div className="filterName">
                    <div>出發日期</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>目的地</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>價格</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>天數</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>成團狀態</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>旅行社</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>行程特色</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>景點特色</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>旅行社優惠</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>旅遊型態</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>航班總結</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>航班去程</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>出發星期</div>
                    <ExpandLessIcon />
                </div>
                <div className="filterName">
                    <div>車程偏好</div>
                    <ExpandLessIcon />
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar
