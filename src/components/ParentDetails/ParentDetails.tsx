import React from 'react'
import s from './ParentDetails.module.scss'
import { useParams } from 'react-router-dom'
import { useGetParentChildrenQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'
import Products from '../Products/Products'

const ParentDetails = () => {
	const { parentId } = useParams()

	const { data: children = [] } = useGetParentChildrenQuery(Number(parentId))

	console.log(children)

	return (
		<div className={s.parent}>
			<div className={s.parent_items}>
				{children?.map(child => <div key={child.id} className={s.child}>
					<div className={s.img_block}><img src={`http://192.168.100.24/${child.image}`} alt='' /></div>
					<span>{child.title}</span>
				</div>
				)}
			</div>
			<Products parentId={Number(parentId)}/>
		</div>
	)
}

export default ParentDetails