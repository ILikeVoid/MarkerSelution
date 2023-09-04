import React from 'react'
import { useParams } from 'react-router-dom'
import s from './BrandDetailsPage.module.scss'
import { useGetBrandDetailsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import BrandDetails from '../../components/BrandDetails/BrandDetails'

const BrandDetailsPage = () => {
	const { brandId } = useParams()

	const { data } = useGetBrandDetailsQuery(Number(brandId))

	console.log(typeof brandId)

	return (
		<div className={s.dd}>
			<div className='container mx-auto'>
				{data && brandId && <BrandDetails brandId={brandId} brand={data} />}
			</div>
		</div>
	)
}

export default BrandDetailsPage
