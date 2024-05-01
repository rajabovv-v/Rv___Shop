import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

function ProductsCard({ list }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 0,5)
    }, [])

    return (
        <div className="products-card__row">
            {
                list.map(item => (
                    <Link to={`/product/${item.slug}`} key={item.id}>
                        <div className="products-card" >
                            {loading ?
                                <Skeleton width={86} height={60} /> :
                                <div className="products-card__contents">
                                    <p className="products-card__title">{item.title}</p>
                                    <small className='products-card__subtitle'>{item.price.toLocaleString()} UZS</small>
                                </div>}
                            {
                                loading ? <Skeleton width={96} height={90} style={{marginTop: 10, marginLeft: 20}} /> : <div className="products-card__image">
                                    <img src={item.mainImage} alt={item.title} />
                                </div>
                            }
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ProductsCard