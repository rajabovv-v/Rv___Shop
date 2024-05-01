import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

function ProductDescription({ product }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])

    return (
        <div>
            {loading ?
                <Skeleton count={10} />
                :
                <p className="tab-menu__description">
                    {product.desc}
                </p>}
        </div>
    )
}

export default ProductDescription