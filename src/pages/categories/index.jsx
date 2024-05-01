import { useParams, useSearchParams } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon, GridViewIcon, ListViewIcon } from '../../assets/icons'
import CategoryItems from './components/CategoryItems'
import CategorySidebar from './components/CategorySidebar'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getBrands, getCategories, getProducts } from '../../store/actions/productsActions'
import { getIds } from '../../utils/helpers'

function CategoriesPage() {
  const { products, categories, brands } = useSelector(state => state.products)
  const [active, setActive] = useState(true)
  const dispatch = useDispatch()
  const params = useParams()
  const categoryId = +params.id.split('-').at(-1)
  const [searchParams, setSearchParams] = useSearchParams()
  let fitleredBrands = getIds(searchParams.get('brand_id'))
  let sortBy = searchParams.get('sortBy')

  const handleBrandDelete = (id) => {
    searchParams.set('brand_id', fitleredBrands.filter(item => item !== id).join(','))
    setSearchParams(searchParams)
  }

  const handleAsc = ({ target }) => {
    if (target.value !== 'none') {
      searchParams.set('sortBy', target.value)
    } else {
      searchParams.delete('sortBy')
    }
    setSearchParams(searchParams)
  }

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getBrands())
  }, [])

  useEffect(() => {
    dispatch(getProducts({ category_id: categoryId, brand_arr: fitleredBrands, sortBy }))
  }, [params, searchParams])

  return (
    <div className='categories-page'>
      <div className="container">
        <div className="categories-page__wrapper">
          <CategorySidebar />
          <div className="categories-page__content">

            <div className='categories-page__top'>
              <h2 className='categories-page__title'>{products.list.length} items in <span>{categories.list.find(item => item.id === categoryId)?.title}</span></h2>

              <form className='categories-page__forms'>
                <select name="categories__input" id='select' className='categories-page__select' onChange={handleAsc}>
                  <option value="none" className='categories-page__option'>Hech qaysisi</option>
                  <option value="asc" className='categories-page__option'>Arzon</option>
                  <option value="desc" className='categories-page__option'>Qimmat</option>
                </select>
                <button type='button' className={active ? 'categories-page__btn active' : 'categories-page__btn'} onClick={() => setActive(true)} >
                  <GridViewIcon />
                </button>
                <button className={active ? 'categories-page__btn' : 'categories-page__btn active'} type='button' onClick={() => setActive(false)}>
                  <ListViewIcon />
                </button>
              </form>
            </div>

            <div className="categories-filter">
              {
                brands.list.filter(item => fitleredBrands.includes(item.id)).map(item => (
                  <button className="categories-filter__button" key={item.id} onClick={() => handleBrandDelete(item.id)}>
                    <span>{item.title}</span>
                    <span>
                      <CloseIcon />
                    </span>
                  </button>
                ))
              }

            </div>

            <CategoryItems active={active} />

            <div className='categories-page__bottom'>
              <select id='categories-select' className='categories-page__select'>
                <option className='categories-page__option'>Show 10</option>
              </select>

              <div className="categories-page__bottom-row">
                <button className='categories-page__button'>
                  <ChevronLeftIcon />
                </button>
                <span className='categories-page__number extra'>1</span>
                <span className='categories-page__number'>2</span>
                <span className='categories-page__number'>3</span>

                <button className='categories-page__button'>
                  <ChevronRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesPage