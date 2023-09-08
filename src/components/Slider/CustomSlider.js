import React from 'react'
import Slider from "react-slick";
import banner1 from '../../images/assetsss/F5Vv9R4b0AA7U7J.png'
import banner2 from '../../images/assetsss/F5Vv9R4b0AA7U7J.png'
import banner3 from '../../images/assetsss/F5Vv9R4b0AA7U7J.png'
import banner4 from '../../images/assetsss/F5Vv9R4b0AA7U7J.png'
import banner5 from '../../images/assetsss/F5Vv9R4b0AA7U7J.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CustomSlider.scss'

const CustomSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
    };

    return (
        <Slider {...settings} >
            <div className='image-container'>
                <img src={banner1} className='banner' alt='Banner 1' />
            </div>
            <div className='image-container'>
                <img src={banner2} className='banner' alt='Banner 2' />
            </div>
            <div className='image-container'>
                <img src={banner3} className='banner' alt='Banner 3' />
            </div>
            <div className='image-container'>
                <img src={banner4} className='banner' alt='Banner 4' />
            </div>
            <div className='image-container'>
                <img src={banner5} className='banner' alt='Banner 5' />
            </div>
        </Slider>
    )
}

export default CustomSlider