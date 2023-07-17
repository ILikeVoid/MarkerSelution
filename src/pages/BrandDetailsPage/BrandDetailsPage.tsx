import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './BrandDetailsPage.module.scss'
import { Brands } from '../../assets/data/brandsData'
import { IBrands } from '../../core/types'
import BrandDetails from '../../components/BrandDetails/BrandDetails'

const BrandDetailsPage = () => {
	const [brand, setBrand] = useState<IBrands[]>()

	const { brandId } = useParams()

	useEffect(() => {
		if (brandId) {
			setBrand(Brands.filter(brand => brand.id === Number(brandId)))
		}
	}, [brandId])

	return (
		<div className={s.dd}>
			<div className='container mx-auto'>
				{brand &&
					brand.map(item => (
						<BrandDetails
							id={item.id}
							name={item.name}
							img={item.img}
						/>
					))}
			</div>
		</div>
	)
}

export default BrandDetailsPage
