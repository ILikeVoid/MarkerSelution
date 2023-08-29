import React from 'react'
import s from './HomePage.module.scss'
import BrandsCarousel from '../../components/BrandsCarousel/BrandsCarousel'
import Title from '../../components/Title/Title'
import ParentCategoriesList from '../../components/ParentCategoriesList/ParentCategoriesList'

const HomePage = () => {
	return (
		<div className={s.home}>
			<Title />
			<BrandsCarousel />
			<ParentCategoriesList/>
		</div>
	)
}

export default HomePage
