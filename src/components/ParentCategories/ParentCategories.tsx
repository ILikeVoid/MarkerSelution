import React from 'react'
import s from "./ParentCategories.module.scss"
import { NavLink } from 'react-router-dom'
import { useGetParentQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

const ParentCategories = () => {
	const { data: parents = [] } = useGetParentQuery()

	return (
		<div className={s.categories}>
			{parents.map(parent => <NavLink to={`parent/${parent.id}`} key={parent.id} className={s.category}>
				<div className={s.img_block}><img src={`http://192.168.100.24/${parent.image}`} alt='' /></div>
				<span>{parent.title}</span>
			</NavLink>)}
		</div>
	)
}

export default ParentCategories