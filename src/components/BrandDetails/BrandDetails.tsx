import React, { FC } from 'react'
import { IBrands } from '../../core/types'
import s from './BrandDetails.module.scss'
import { lipProducts } from '../../assets/data/lip-products'


const BrandDetails: FC<IBrands> = ({ id, name, image }) => {

	return (
		<div key={id} className={s.brand}>
			<h1>{name}</h1>
			<div className={s.brand_items}>
				<img src={image} alt='' />
				<p>Официальный дилер {name} в Казахстане</p>
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
