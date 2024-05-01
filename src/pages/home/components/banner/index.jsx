import React from 'react'
import BannerCategories from './BannerCategories'
import BannerSlider from './BannerSlider'

function Banner() {

    return (
        <section className='banner'>
            <div className="container">
                <div className="banner-wrapper">
                    <BannerCategories/>
                    <BannerSlider/>
                </div>
            </div>
        </section>
    )
}

export default Banner