import React from 'react'
import s from "./CatalogNavbar.module.scss"
import { NavLink } from 'react-router-dom'
import { useGetParentQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

const CatalogNavbar = () => {
	const { data: parents = [] } = useGetParentQuery()

	return (
		<div className={s.catalog_nav}>
			<nav>
				{parents.map(category => (
					<NavLink key={category.id}
									 className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
									 to={`parent/${category.id}`}>
						{category.title}
					</NavLink>
				))}
			</nav>
		</div>
	)
}

export default CatalogNavbar