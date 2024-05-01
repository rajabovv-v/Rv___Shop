import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '.'
import { useEffect } from 'react'
import { getCategoryRecommendedProducts } from '../../../../store/actions/homeActions'
import Skeleton from 'react-loading-skeleton'

function ProductsSection() {
    const dispatch = useDispatch()
    const { categoryRecommended, categoryRecommendedProducts } = useSelector(state => state.home)

    useEffect(() => {
        dispatch(getCategoryRecommendedProducts(categoryRecommended.list.map(item => item.id)))
    }, [categoryRecommended.list])

    return (
        <section>
            {
          categoryRecommended.list.map(item => (
                    <Products
                        category={item}
                        key={item.id}
                        list={categoryRecommendedProducts.list.filter(el => el.category_id === item.id)}
                    />
                ))
            }
        </section>
    )
}

export default ProductsSection