import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function OffersProducts() {
    const { productOffers } = useSelector(state => state.home);

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="offers-products">
            {
                productOffers.list.map(item => (
                    <Link to={`/product/${item.slug}`} key={item.id}>
                        <div className="offers-product" >
                            {
                                loading ? <Skeleton  width={140} height={140} /> : <div className="offers-product__image">
                                    <img src={item.mainImage} alt={item.title} />
                                </div>
                            }
                            <div className="offers-product__content">
                                {loading ? <Skeleton width={50} style={{marginTop: 10}} height={20} /> : <p className="offers-product__title">{item.title.split(' ').slice(0, 2).join(' ')}</p>}
                                {loading ? <Skeleton width={40} height={20} /> : <p className='offers-product__percent'>-{item.discount}%</p>}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default OffersProducts