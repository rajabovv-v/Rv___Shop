import { Link } from 'react-router-dom'
import { ArrowIcon, } from '../../../assets/icons'
import { useSelector } from 'react-redux'
import BrandList from './BrandList'


function CategorySidebar() {
    const { categories } = useSelector(state => state.products)

    return (
        <div className='categories-page category-sidebar'>
            <div className="category-sidebar__top">
                <div className="category-sidebar__head">
                    <div className="category-sidebar__row">
                        <h2 className='category-sidebar__title'>Category</h2>
                        <span>
                            <ArrowIcon />
                        </span>
                    </div>

                    {
                        categories.list.map(item => (
                            <Link key={item.id} to={`/category/${item.slug}-${item.id}`}>
                                <p className="category-sidebar__subtitle">{item.title}</p>
                            </Link>
                        ))
                    }
                </div>
                <BrandList />

                {/* <div className="category-sidebar__range">
                    <div className="category-sidebar__row">
                        <h2 className='category-sidebar__title'>Price range</h2>
                        <span>
                            <ArrowIcon />
                        </span>
                    </div>
                    <input type="range" className='category-sidebar__range__input' />
                    <input type="range" className='category-sidebar__range__input' />
                    <div className="category-sidebar__range__row">
                        <div className='category-sidebar__range__count'>
                            <p className='category-sidebar__range__min'>min</p>
                            <span className='category-sidebar__range__counter'>0</span>
                        </div>
                        <div className='category-sidebar__range__count'>
                            <p className='category-sidebar__range__max'>min</p>
                            <span className='category-sidebar__range__counter'>0</span>
                        </div>
                    </div>
                    <button className='category-sidebar__range__btn'>Apply</button>
                </div> */}
                {/* 
                <div className="category-sidebar__rating">

                    <div className="category-sidebar__row">
                        <h2 className='category-sidebar__title'>Ratings</h2>
                        <span>
                            <ArrowIcon />
                        </span>
                    </div>
                    <div className='category-sidebar__rating__item'>
                        <div className='category-sidebar__rating__row'>
                            <input type="checkbox" id='rating-1' className='category-sidebar__rating__check' />
                            <label htmlFor="rating-1" className='category-sidebar__rating__label'>
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                            </label>
                        </div>
                        <div className='category-sidebar__rating__row'>
                            <input type="checkbox" id='rating-2' className='category-sidebar__rating__check' />
                            <label htmlFor="rating-2" className='category-sidebar__rating__label'>
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <BlackRatingIcon />
                            </label>
                        </div>
                        <div className='category-sidebar__rating__row'>
                            <input type="checkbox" id='rating-3' className='category-sidebar__rating__check' />
                            <label htmlFor="rating-3" className='category-sidebar__rating__label'>
                                <RatingIcon />
                                <RatingIcon />
                                <RatingIcon />
                                <BlackRatingIcon />
                                <BlackRatingIcon />
                            </label>
                        </div>
                        <div className='category-sidebar__rating__row'>
                            <input type="checkbox" id='rating-4' className='category-sidebar__rating__check' />
                            <label htmlFor="rating-4" className='category-sidebar__rating__label'>
                                <RatingIcon />
                                <RatingIcon />
                                <BlackRatingIcon />
                                <BlackRatingIcon />
                                <BlackRatingIcon />
                            </label>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default CategorySidebar