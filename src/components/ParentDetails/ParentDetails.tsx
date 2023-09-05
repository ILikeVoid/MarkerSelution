import React, { useState } from 'react'
import s from './ParentDetails.module.scss'
import { NavLink, useParams } from 'react-router-dom'
import {
	useGetCategoryProductsQuery,
	useGetParentChildrenQuery
} from '../../redux/sevices/features/categoriesApi/categoriesApi'
import Products from '../Products/Products'
import loading from '../../assets/images/loading.svg'

const ParentDetails = () => {
	const { parentId } = useParams()
	const [currentPage, setCurrentPage] = useState(1)

	const { data: children = [], isLoading: childLoading } = useGetParentChildrenQuery(Number(parentId))
	const {
		data: categoryProducts,
		isLoading: categoryProductsLoading
	} = useGetCategoryProductsQuery({ categoryId: Number(parentId), currentPage: currentPage })

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	if (childLoading || categoryProductsLoading) {
		return <div className={s.loading}><img src={loading} alt='Loading' /></div>
	} else {
		return (
			<div className={s.parent}>
				<div className={s.parent_items}>
					{children?.map(child => <NavLink onClick={scrollToTop} to={`child/${child.id}`} key={child.id} className={s.child}>
							<div className={s.img_block}><img src={`http://192.168.100.24/${child.image}`} alt='' /></div>
							<p>{child.title}</p>
						</NavLink>
					)}
				</div>
				<Products products={categoryProducts} childCategories={children} currentPage={currentPage}
									setCurrentPage={setCurrentPage} />
			</div>
		)
	}
}

export default ParentDetails