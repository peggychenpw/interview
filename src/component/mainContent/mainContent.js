import React from 'react'
import LeftSidebar from '../leftSidebar/leftSidebar'
import SearchResult from '../searchResult/searchResult'


import './mainContent.scss'

const MainContent = () => {
    return (
        <div className='mainContent'>
            <LeftSidebar />
            <SearchResult />
        </div>
    )
}

export default MainContent
