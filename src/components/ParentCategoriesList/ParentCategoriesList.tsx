import React from 'react'
import s from './ParentCategoriesList.module.scss'
import { useGetParentQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'
import { NavLink } from 'react-router-dom'

const ParentCategoriesList = () => {

	const { data: parents = [] } = useGetParentQuery()

	return (
		<div className={s.parent_list}>
			<div className='container mx-auto'>
				<h2>Разделы товаров</h2>
				<div className={s.parent_list_items}>
					{parents.map(parent => <NavLink key={parent.id} to={`catalog/parent/${parent.id}`} className={s.parent}>
						<div className={s.img_block}><img src={`http://192.168.100.24/${parent.image}`} alt='' /></div>
						<div className={s.items}><p>{parent.title}</p></div>
					</NavLink>)}
				</div>
			</div>
		</div>
	)
}

export default ParentCategoriesList