import React from 'react'
import s from './CatalogPage.module.scss'
import { Items } from '../../assets/data/categoriesData'
import { NavLink } from 'react-router-dom'

const CatalogPage = () => {
	return (
		<div className={s.catalog}>
			<div className='container mx-auto'>
				<h1>Каталог товаров</h1>
				<div className={s.catalog_items}>
					<div>
						<nav>
							{Items.map(item => (
								<NavLink to='#' key={item.id}>
									{item.name}
								</NavLink>
							))}
						</nav>
					</div>
					<div className={s.catalog_list}>
						{Items.map(item => (
							<div className={s.item} key={item.id}>
								<div className={s.img_block}>
									<img src={item.img} alt='' />
								</div>
								<p>{item.name}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogPage
