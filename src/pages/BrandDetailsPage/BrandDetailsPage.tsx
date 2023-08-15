import React from 'react'
import { useParams } from 'react-router-dom'
import s from './BrandDetailsPage.module.scss'
import { useGetBrandDetailsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import BrandDetails from '../../components/BrandDetails/BrandDetails'

const BrandDetailsPage = () => {
	const { brandId } = useParams()

	const { data } = useGetBrandDetailsQuery(Number(brandId))

	console.log(data)

	return (
		<div className={s.dd}>
			<div className='container mx-auto'>
				{data && <BrandDetails id={data.id} name={data.name} image={data.image} />}
			</div>
		</div>
	)
}

export default BrandDetailsPage
