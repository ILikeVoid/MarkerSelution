import React, { FC } from 'react'
import { IBrands } from '../../core/types'
import s from './BrandDetails.module.scss'
import { lipProducts } from '../../assets/data/lip-products'

type IPropsBrand = {
	brandId: string
	brand: IBrands
}


const BrandDetails: FC<IPropsBrand> = ({brandId, brand}) => {


	return (
		<div key={brand.id} className={s.brand}>
			<h1>{brand.name}</h1>
			<div className={s.brand_items}>
				<img src={brand.image} alt='' />
				<p>Официальный дилер {brand.name} в Казахстане</p>
			</div>
			<div className={s.brand_products}>
				{lipProducts.map(product =>
					<div key={product.id} className={s.product}>
						<div className={s.product_items}>
							<div className={s.image_block}>
								<img src={product.image} alt='' />
							</div>
							<span>{product.name}</span>
							<button>Заказать</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default BrandDetails
