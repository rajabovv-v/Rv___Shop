import React from 'react'
import OffersContent from './OffersContent'
import OffersProducts from './OffersProducts'

function Offers() {

    return (
        <section className='offers'>
            <div className="container">
                <div className="offers-wrapper">
                    <OffersContent/>
                    <OffersProducts/>
                </div>
            </div>
        </section>
    )
}

export default Offers