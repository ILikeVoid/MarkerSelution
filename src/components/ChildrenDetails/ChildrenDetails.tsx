import React, { useState } from 'react'
import s from './ChildrenDetails.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import {
	useGetCategoryProductsQuery,
	useGetParentChildrenQuery
} from '../../redux/sevices/features/categoriesApi/categoriesApi'
import loading from '../../assets/images/loading.svg'
import Products from '../Products/Products'

const ChildrenDetails = () => {
	const { childId } = useParams()
	const [currentPage, setCurrentPage] = useState(1)

	const { data: childProducts, isLoading: childLoading } = useGetCategoryProductsQuery({categoryId: Number(childId), currentPage: currentPage})
	const { data: childCategories, isLoading: childCategoriesLoading } = useGetParentChildrenQuery(Number(childId))

	console.log(childProducts?.results)

	if (childLoading || childCategoriesLoading) {
		return <div className={s.loading}><img src={loading} alt='Loading' /></div>
	} else {
		return (
			<div className={s.child}>
				<div className={s.child_items}>
					{childCategories?.map(child => <NavLink to={`deep-child/${child.id}`} key={child.id} className={s.child_category}>
							<div className={s.img_block}><img src={`http://192.168.100.24/${child.image}`} alt='' /></div>
							<p>{child.title}</p>
						</NavLink>
					)}
				</div>
				<Products products={childProducts} childCategories={childCategories} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
			</div>
		)
	}
}

export default ChildrenDetails