import React from 'react'
import s from './CatalogPage.module.scss'
import { NavLink } from 'react-router-dom'
import { Items as Categories } from '../../assets/data/categoriesData'

const CatalogPage = () => {

	return (
		<div className={s.catalog}>
			<div className='container mx-auto'>
				<h1>Каталог</h1>
				<div className={s.catalog_items}>
					<div className={s.catalog_nav}>
						<nav>
							{Categories.map(category => (
								<NavLink key={category.id}
												 className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
												 to={`category/${category.id}`}>
									{category.name}
								</NavLink>
							))}
						</nav>
					</div>
					<div className={s.categories}>
						{Categories.map(item => <NavLink to={`category/${item.id}`} key={item.id} className={s.category}>
							<div className={s.img_block}><img src={item.img} alt='' /></div>
							<span>{item.name}</span>
						</NavLink>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogPage
