import React, { FC } from 'react'
import { IBrands } from '../../core/types'
import s from './BrandDetails.module.scss'

const BrandDetails: FC<IBrands> = ({ id, name, image }) => {

	return (
		<div key={id} className={s.brand} >
			<h1>{name}</h1>
			<div className={s.brand_items}>
				<img src={image} alt='' />
				<p>Официальный дилер {name} в Казахстане</p>
			</div>
		</div>
	)
}

export default BrandDetails
