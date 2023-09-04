import React, { useState } from 'react'
import s from './DeepChildDetails.module.scss'
import { useGetCategoryProductsQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'
import { useParams } from 'react-router-dom'
import loading from '../../assets/images/loading.svg'
import Products from '../Products/Products'

const DeepChildDetails = () => {
	const { childId } = useParams()
	const [currentPage, setCurrentPage] = useState(1)

	const {
		data: deep_child_products,
		isLoading: childProductsLoading
	} = useGetCategoryProductsQuery({ categoryId: Number(childId), currentPage: currentPage})

	console.log(deep_child_products)

	if (childProductsLoading) {
		return <div className={s.loading}><img src={loading} alt='Loading' /></div>
	} else {
		return <Products childProducts={deep_child_products} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
	}
}

export default DeepChildDetails