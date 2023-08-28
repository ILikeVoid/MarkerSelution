import s from './Products.module.scss'
import { FC } from 'react'
import { useGetCategoryProductsQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

type IProducts = {
	parentId: number
}

const Products: FC<IProducts> = ({ parentId }) => {

	const { data } = useGetCategoryProductsQuery(parentId)

	console.log(data)

	return (
		<div className={s.products}>Products</div>
	)
}

export default Products