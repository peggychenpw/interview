import { useState, useEffect } from 'react'
import { withRouter } from "react-router-dom"
import SortGroup from '../sortGroup/sortGroup'
import StrokeBox from '../strokeBox/strokeBox'
import TourList from '../tourList/tourList'

import axios from 'axios'
import './searchResult.scss'
import Pagination from '../pagination/pagination'

const SearchResult = ({ history }) => {
    const [loading, setLoading] = useState(false);
    const [tourList, setTourList] = useState([])
    const [sort, setSort] = useState("rating_desc")
    const [currentPage, setCurrentPage] = useState(1);


    // Set rowPerPage & totalItem as fake search response for page and item count setting
    const rowPerPage = 10;
    const totalItem = 100;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const fetchList = async () => {
        const res = await axios.get(`https://interview.tripresso.com/tour/search?page=${currentPage}&row_per_page=${rowPerPage}&sort=${sort}`);
        return res;
    };


    const clickSortRateDesc = () => {
        setSort("rating_desc")
        setCurrentPage(1)
    }

    const clickSortRateAsc = () => {
        setSort("rating_asc")
        setCurrentPage(1)
    }

    const clickSortPriceDesc = () => {
        setSort("price_desc")
        setCurrentPage(1)
    }

    const clickSortPriceAsc = () => {
        setSort("price_asc")
        setCurrentPage(1)
    }

    const historyChange = async () => {
        const rawData = await fetchList();
        const list = await rawData.data.data.tour_list
        setTourList(list)
        history.push({
            pathname: '/search',
            search: `?currentPage=${currentPage}&rowPerPage=${rowPerPage}&sortBy=${sort}`,
        })
    }

    const rollBack = () => {
        setTimeout(() => window.scrollTo(0, 270), 100)
    }

    useEffect(() => {
        (async () => {
            setLoading(true);
            await historyChange();
            setLoading(false);
            rollBack();
        })()
    }, [sort, currentPage])



    return (
        <div className='searchResult'>
            <StrokeBox />
            <SortGroup clickSortRateDesc={clickSortRateDesc} clickSortRateAsc={clickSortRateAsc}
                clickSortPriceDesc={clickSortPriceDesc} clickSortPriceAsc={clickSortPriceAsc}
            />
            <TourList currenTourList={tourList} loading={loading} />
            <Pagination sortBy={sort} setSort={setSort} currentPage={currentPage} rowPerPage={rowPerPage} totalItem={totalItem} paginate={paginate} className='pagination' />
        </div>

    )
}

export default withRouter(SearchResult)
