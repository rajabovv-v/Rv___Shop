import React from 'react'
import ProductsCard from './ProductsCard'
import ProductsContent from './ProductsContent'

function Products({category, list}) {

  return (
    <section className='products'>
      <div className="container">
        <div className="products-wrapper">
          <ProductsContent category={category}/>
          <ProductsCard  list={list}/>
        </div>
      </div>
    </section>
  )
}

export default Products