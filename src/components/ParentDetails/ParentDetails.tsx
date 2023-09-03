import React from 'react'
import s from './ParentDetails.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import {
	useGetCategoryProductsQuery,
	useGetParentChildrenQuery
} from '../../redux/sevices/features/categoriesApi/categoriesApi'
import Products from '../Products/Products'
import loading from '../../assets/images/loading.svg'
import PagePagination from '../PagePagination/PagePagination'

const ParentDetails = () => {
	const { parentId } = useParams()

	const { data: children = [], isLoading: childLoading } = useGetParentChildrenQuery(Number(parentId))
	const { data: categoryProducts, isLoading: categoryProductsLoading } = useGetCategoryProductsQuery(Number(parentId))

	console.log(children)
	console.log(categoryProducts)

	if (childLoading || categoryProductsLoading) {
		return <div className={s.loading}><img src={loading} alt='Loading' /></div>
	} else {
		return (
			<div className={s.parent}>
				<div className={s.parent_items}>
					{children?.map(child => <NavLink to={`child/${child.id}`} key={child.id} className={s.child}>
							<div className={s.img_block}><img src={`http://192.168.100.24/${child.image}`} alt='' /></div>
							<p>{child.title}</p>
						</NavLink>
					)}
				</div>
				<PagePagination />
				<Products childProducts={categoryProducts} childCategories={children}/>
			</div>
		)
	}
}

export default ParentDetails