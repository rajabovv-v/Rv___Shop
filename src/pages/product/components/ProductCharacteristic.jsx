import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductCharacteristic({ product }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div className='product-characteristic characteristic'>
            <ul className="characteristic-list">
                {
                    product.attributes.map((item, i) => (
                        loading ? <Skeleton /> :
                            <li className="characteristic-list__item" key={i}>
                                <span className="characteristic-title">{item.title}</span>
                                <span className="characteristic-value">{item.value}</span>
                            </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductCharacteristic