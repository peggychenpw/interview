import React from 'react'
import Rating from '@material-ui/lab/Rating';

const RatingBox = ({ tourRating }) => {
    return (
        <div>
            <Rating name="half-rating" size='small' value={tourRating} precision={0.5} readOnly />
        </div>
    )
}

export default RatingBox
