import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { ArrowIcon } from '../../../assets/icons'
import { getIds } from '../../../utils/helpers'

function BrandList() {
    const { brands } = useSelector(state => state.products)
    const [isLong, setIsLong] = useState(false)
    const [params, setParams] = useSearchParams()


    const handleBrand = (id, { target }) => {
        if (target.checked) {
            if (params.get('brand_id')) {
                params.set('brand_id', params.get('brand_id') + ',' + id)
            }else{
                params.set('brand_id', id)
            }
        } else {
            params.set('brand_id', getIds(params.get('brand_id')).filter(item => item !== id).join(','))
        }

        setParams(params)
    }

    useEffect(() => {
        setIsLong(brands.list.length > 5)
    }, [brands.list])

    const handleSeeAll = () => {
        setIsLong(!isLong)
    }

    return (
        <div className="category-sidebar__item">
            <div className='category-sidebar__row'>
                <h2 className="category-sidebar__title">Brands</h2>
                <span>
                    <ArrowIcon />
                </span>
            </div>
            <List list={isLong ? brands.list.slice(0, 5) : brands.list} handleBrand={handleBrand} />
            <button className='category-all__button' onClick={handleSeeAll}>{isLong ? 'See' : 'Close'} all</button>
        </div >
    )
}

export default BrandList

function List({ list, handleBrand }) {
    const [params] = useSearchParams()
    const [filteredList, setFilteredList] = useState(getIds(params.get('brand_id')))

    useEffect(() => {
        setFilteredList(getIds(params.get('brand_id')))
    }, [params.get('brand_id')])

    return (
        <form className='category-sidebar__item__form'>
            {
                list.map(({ id, title }) => (
                    <div className="category-sidebar__item-row" key={id}>
                        <input
                            type="checkbox"
                            id='form__item1'
                            checked={filteredList.some(item => item === id)}
                            className='category-sidebar__item__input'
                            onChange={(e) => handleBrand(id, e)}
                        />
                        <label htmlFor="form__item1" className='category-sidebar__item__label'>{title}</label>
                    </div>
                ))
            }
        </form>
    )
}