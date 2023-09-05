import React, { FC, useState } from 'react'
import { IBrands } from '../../core/types'
import s from './BrandDetails.module.scss'
import { useGetBrandProductsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import Products from '../Products/Products'

type IPropsBrand = {
	brandId: string
	brand: IBrands
}


const BrandDetails: FC<IPropsBrand> = ({ brandId, brand }) => {
	const [currentPage, setCurrentPage] = useState(1)

	const { data: brandProducts } = useGetBrandProductsQuery({ brandId: Number(brandId), currentPage: currentPage })

	return (
		<div key={brand.id} className={s.brand}>
			<h1>{brand.name}</h1>
			<div className={s.brand_items}>
				<img src={brand.image} alt='' />
				<p>Официальный дилер {brand.name} в Казахстане</p>
			</div>
			<div className={s.brand_products}>
				<h2>Товары бренда {brand.name}</h2>
				<Products products={brandProducts} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
			</div>
		</div>
	)
}

export default BrandDetails
