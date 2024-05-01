import React, { useEffect } from 'react'
import { Banner, Offers,  RecommendedList } from './components'
import { useDispatch } from 'react-redux'
import { getBannersList, getCategoriesList, getCategoryRecommendedList, getProductOffersList, getProductRecommendedList } from '../../store/actions/homeActions'
import ProductsSection from './components/products/ProductsSection'

function HomePage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoriesList())
        dispatch(getBannersList())
        dispatch(getProductRecommendedList())
        dispatch(getProductOffersList())
        dispatch(getCategoryRecommendedList())
    }, [])


    return (
        <div>
            <Banner />
            <Offers />
            <ProductsSection/>
           <RecommendedList/>
        </div>
    )
}

export default HomePage