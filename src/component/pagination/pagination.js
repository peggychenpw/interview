import React from 'react';
import { withRouter } from "react-router-dom"
import "./pagination.scss"

const Pagination = (props) => {

    const { history, sortBy, rowPerPage, totalItem, paginate, currentPage } = props

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItem / rowPerPage); i++) {
        pageNumbers.push(i);
    }


    const clickPage = async (number) => {
        await paginate(number)
        history.push({
            pathname: '/search',
            search: `?currentPage=${number}&rowPerPage=${rowPerPage}&sortBy=${sortBy}`,
        })
    }

    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-li'>
                        <div onClick={() => clickPage(number)} className={currentPage === number ? 'page-div-current' : 'page-div'}>
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default withRouter(Pagination);
