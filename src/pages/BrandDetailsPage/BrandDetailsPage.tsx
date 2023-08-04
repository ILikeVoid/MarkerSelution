import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './BrandDetailsPage.module.scss'
import { useGetBrandDetailsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import BrandDetails from '../../components/BrandDetails/BrandDetails'
import brandImage from '../../assets/images/brands/brand-1.jpg'

const BrandDetailsPage = () => {
	const { brandId } = useParams()

	const { data } = useGetBrandDetailsQuery(Number(brandId))


	return (
		<div className={s.dd}>
			<div className='container mx-auto'>
				{/*{data ? <BrandDetails id={data.id} name={data.name} image={data.image} /> : <div></div>}*/}
				<BrandDetails id={1} name="Baumer" image={brandImage} />
			</div>
		</div>
	)
}

export default BrandDetailsPage
