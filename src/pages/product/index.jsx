import React, { useEffect } from 'react'
import { ProductHeader, ReleatedItems, TabMenu } from './components'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productGet, productRecommendeds } from '../../store/actions/productActions'
import { PageLoading } from '../../components'

function ProductPage() {
    const { product, loading } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const { slug } = useParams()

    useEffect(() => {
        dispatch(productGet(slug))
    }, [slug])

    useEffect(() => {
        dispatch(productRecommendeds(product?.category?.id))
    }, [product])

    if (loading || !product.id) {
        return <PageLoading/>
    }

    return (
        <div className='product-page'>
            <ProductHeader product={product} />
            <TabMenu product={product} />
            <ReleatedItems />
        </div>
    )
}

export default ProductPage