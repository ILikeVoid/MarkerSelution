import s from './Products.module.scss'
import React, { FC } from 'react'
import { ICategoryProducts } from '../../core/types'


const Products: FC<ICategoryProducts> = ({ next, results, count, previous }) => {


	return (
		<div className={s.products}>
			{results?.map(result =>
				<div key={result.id} className={s.product}>
					<div className={s.img_block}><img src={`http://192.168.100.24/${result.photo}`} alt='' /></div>
					<p>{result.title}</p>
					<button>Заказать</button>
				</div>)}
		</div>
	)
}

export default Products