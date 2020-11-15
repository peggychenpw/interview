import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';

import DateList from '../dateList/dateList'
import './tourItem.scss'

import TagList from '../tagList/tagList';
import RatingBox from '../rating/rating';

const TourItem = (props) => {
    const { tourItem } = props
    const bonus = Math.round(tourItem.min_price / 20)

    return (
        <div className='tour-item' >
            <div className="tour-image-box">
                <div className='image' style={{ backgroundImage: `url(${tourItem.image_url})` }}></div>
            </div>
            <div className="tour-content-box">
                <div className='row1 rateBox'>
                    <div className="row1-left">
                        <div className='agency'>{tourItem.agency}</div>
                        <RatingBox tourRating={tourItem.rating} />
                    </div>
                    <div className="row1-right">
                        <div className="compare-icon"><CompareArrowsIcon /></div>
                        <div className="favorite-icon"><FavoriteBorderIcon /></div>
                    </div>
                </div>
                <div className="row2 titleBox">
                    {tourItem.title}
                </div>
                <div className="row3">
                    <span className="locate">
                        <RoomSharpIcon fontSize="small" />地球
                    </span>
                </div>
                <div className="row4 tagsBox">
                    <TagList tags={tourItem.tags} />
                </div>
                <div className="row5 groupBox">
                    <div className="dateBox">
                        <DateList dateList={tourItem.group} />
                        <div className="dateMore">
                            更多日期
                        </div>
                    </div>

                    <div className="priceBox">
                        <div className='tourPrice'>
                            <span className='tourPrice-number'> {tourItem.tour_days}</span> 天
                            <span className='tourPrice-number'> {tourItem.min_price}</span> 元起
                        </div>
                        <div className="bonusBox">
                            下單現賺咖幣<span className='bonus'> ${bonus}</span> 起
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default TourItem
