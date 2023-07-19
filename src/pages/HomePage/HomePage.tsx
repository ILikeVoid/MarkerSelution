import React from 'react'
import s from './HomePage.module.scss'
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel'
import Title from '../../components/Title/Title'

const HomePage = () => {
	return (
		<div className={s.home}>
			<Title />
			<BrandsCarousel />
		</div>
	)
}

export default HomePage
