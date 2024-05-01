
import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function RecommendedList() {
    const { productsRecommended } = useSelector(state => state.home)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="recommended-list">
            <div className="container">
                <div className="recommended-list-wrapper">
                    <div className="recommended-list-top">
                        {loading ? <Skeleton width={130} /> : <h1 className='recommended-list-top__title'>Products</h1>}
                    </div>
                    <div className="recommended-list-items">
                        {productsRecommended.list.map(item => (
                            <Link to={`/product/${item.slug}`} key={item.id}>
                                <div className="recommended-list-item" >
                                    {
                                        loading ? <Skeleton width={175} height={170} style={{ padding: "14px 24px", marginBottom: 10 }} /> : <div className="recommended-list-item__image">
                                            <img src={item.mainImage} alt={item.title} className='recommended-list-item__img' />
                                        </div>
                                    }
                                    <div className="recommended-list-item__content">
                                        {loading ? <Skeleton width={150} /> : <p className="recommended-list-item__price">{item.price.toLocaleString()} UZS</p>}
                                        {loading ? <Skeleton width={150} height={30} style={{marginTop: 10}} /> : <p className="recommended-list-item__subtitle">{item.model}</p>}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedList