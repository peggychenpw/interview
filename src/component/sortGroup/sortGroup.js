import React from 'react'
import { Button, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'
import './sortGroup.scss'

const SortGroup = (props) => {
    const { clickSortRateDesc, clickSortRateAsc, clickSortPriceDesc, clickSortPriceAsc } = props
    return (
        <ButtonGroup size="lg" className="sortBox">
            <Button variant='white' className="sort" >排序</Button>
            <DropdownButton variant='white' as={ButtonGroup} title="精選評分" id="bg-nested-dropdown" className="rating dropdown btn-group">
                <Dropdown.Item className="dropdown-item"
                    onClick={() => clickSortRateDesc()} >評價：高至低</Dropdown.Item>
                <Dropdown.Item className="dropdown-item"
                    onClick={() => clickSortRateAsc()}>評價：低至高</Dropdown.Item>
            </DropdownButton>
            <DropdownButton variant='white' as={ButtonGroup} title="價格" id="bg-nested-dropdown" className="price dropdown btn-group" >
                <Dropdown.Item className="dropdown-item" onClick={() => clickSortPriceDesc()}>價格：高至低</Dropdown.Item>
                <Dropdown.Item className="dropdown-item" onClick={() => clickSortPriceAsc()}>價格：低至高</Dropdown.Item>
            </DropdownButton>
            <Button variant='white' className="duration">天數</Button>
            <Button variant='white' className="departureDate">出發日期</Button>
        </ButtonGroup>
    )
}

export default SortGroup

