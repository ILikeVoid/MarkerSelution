import React from 'react'
import s from './CatalogPage.module.scss'
import { NavLink } from 'react-router-dom'
import { useGetCategoriesQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

const CatalogPage = () => {

	const { data: categories = [] } = useGetCategoriesQuery()

	let newCategories = categories.filter(item => item.parent === null)

	return (
		<div className={s.catalog}>
			<div className='container mx-auto'>
				<h1>Каталог</h1>
				<div className={s.catalog_items}>
					<div className={s.catalog_nav}>
						<nav>
							{newCategories.map(category => (
								<NavLink key={category.id}
												 className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
												 to={`category/${category.id}`}>
									{category.title}
								</NavLink>
							))}
						</nav>
					</div>
					<div className={s.categories}>
						{newCategories.map(item => <NavLink to={`category/${item.id}`} key={item.id} className={s.category}>
							<div className={s.img_block}><img src={item.image} alt='' /></div>
							<span>{item.title}</span>
						</NavLink>)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CatalogPage
