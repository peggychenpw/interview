import React from 'react';
import { withRouter } from "react-router-dom"

const Pagination = ({ history, sortBy, rowPerPage, totalItem, paginate }) => {
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
                    <li key={number} className='page-item' style={{ cursor: 'pointer' }}>
                        <div onClick={() => clickPage(number)} className='page-link' >
                            {number}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default withRouter(Pagination);
