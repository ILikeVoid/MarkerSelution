import React from 'react'
import s from './BrandsCarousel.module.scss'
import './slick.css'
import './slick-theme.css'
import Slider from 'react-slick'
import { NavLink } from 'react-router-dom'
import { useGetBrandsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'

const BrandsCarousel = () => {
	const { data = [] } = useGetBrandsQuery()

	const settings = {
		infinite: true,
		speed: 1000,
		slidesToShow: 6,
		slidesToScroll: 6,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 706,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
					dots: false
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false
				}
			}
		]
	}

	return (
		<section className={s.carousel}>
			<div className='container mx-auto'>
				<h2>Производители</h2>
				<Slider {...settings}>
					{data?.map(brand =>
						<NavLink to={`brand/${brand.id}`} key={brand.id}>
							<div className={s.brand_item}>
								<img src={brand.image} alt='' />
							</div>
						</NavLink>
					)}
				</Slider>
			</div>
		</section>
	)
}

export default BrandsCarousel
