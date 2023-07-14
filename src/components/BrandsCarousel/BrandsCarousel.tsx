import React from 'react'
import s from './BrandsCarousel.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { Brands } from './brandsData'

const BrandsCarousel = () => {
	const settings = {
		className: s.gg,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	}

	return (
		<div className={s.carousel}>
			<div className='container mx-auto'>
				<h2>Производители</h2>
				<Slider {...settings}>
					{Brands.map(item => (
						<div className={s.item} key={item.id}>
							<div className={s.brand}>
								<div className={s.img_block}>
								<img src={item.img} alt='' />
								</div>
								<p>{item.name}</p>
							</div>
						</div>
					))}
				</Slider>
			</div>
		</div>
	)
}

export default BrandsCarousel
