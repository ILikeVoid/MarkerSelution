import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './BrandDetailsPage.module.scss'
import { IBrands } from '../../core/types'
import BrandDetails from '../../components/BrandDetails/BrandDetails'
import { useGetBrandsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'

const BrandDetailsPage = () => {
	const [brand, setBrand] = useState<IBrands[]>()

	const { brandId } = useParams()

	const { data = [] } = useGetBrandsQuery()

	useEffect(() => {
		if (brandId) {
			setBrand(data?.filter(brand => brand.id === Number(brandId)))
		}
	}, [brandId])

	return (
		<div className={s.dd}>
			<div className='container mx-auto'>
				{brand &&
					brand.map(item => (
						<BrandDetails id={item.id} name={item.name} image={item.image} />
					))}
			</div>
		</div>
	)
}

export default BrandDetailsPage
