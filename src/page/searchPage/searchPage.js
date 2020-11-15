import React from 'react'
import Banner from '../../component/banner/banner'
import MainContent from '../../component/mainContent/mainContent'
import './searchPage.scss'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="search-container">
                <Banner className='banner' />
                <MainContent className='mainContent' />
            </div>
        </div>
    )
}

export default SearchPage
