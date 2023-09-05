import s from './Products.module.scss'
import React, { FC, useEffect, useState } from 'react'
import { ICategories, ICategoryProducts } from '../../core/types'
import { NavLink } from 'react-router-dom'
import CharacteristicList from '../CharacteristicList/CharacteristicList'
import { Pagination } from '@mui/material'

type IProps = {
	products?: ICategoryProducts
	childCategories?: ICategories[],
	currentPage: number
	setCurrentPage: Function
}

const Products: FC<IProps> = ({ products, childCategories, currentPage, setCurrentPage }) => {
	const [childCategoriesAvailable, setChildCategoriesAvailable] = useState(true)

	let totalPages = Math.ceil(Number(products?.count) / 50)

	useEffect(() => {
		if (childCategories?.length === 0 || childCategories === undefined) {
			setChildCategoriesAvailable(false)
		} else {
			setChildCategoriesAvailable(true)
		}
	}, [childCategories])

	function handlePageChange(e: React.ChangeEvent<unknown>, p: number) {
		setCurrentPage(p)
	}

	console.log(products)

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	if (products?.results?.length === 0) {
		return <div className={s.no_product_text}>Нет товаров</div>
	} else {
		return (
			<div style={childCategoriesAvailable ? { marginTop: '80px' } : { marginTop: 0 }}>
				<span>Страница {currentPage} из {totalPages}</span>
				<Pagination count={totalPages} variant='outlined' shape='rounded' onChange={handlePageChange} />
				<div className={s.products}>
					{products?.results?.map(result =>
						<NavLink to={`/product/${result.id}`} key={result.id} className={s.product} onClick={scrollToTop}>
							<div className={s.product_items}>
								<div className={s.img_block}><img src={`http://192.168.100.24/${result.photo}`} alt='' /></div>
								<p>{result.title}</p>
								<CharacteristicList data={result.characteristics} />
							</div>
							<span
								className={s.price}>{result.price ? result.price?.toLocaleString() + ' тнг.' : 'Цена под заказ'} </span>
							<a onClick={event => event.stopPropagation()}
								 href={`https://api.whatsapp.com/send/?phone=77021117118&text=Здравствуйте%2C+меня+интересует+товар+${result.title}`}>Заказать</a>
						</NavLink>
					)}
				</div>
				<Pagination count={totalPages} variant='outlined' shape='rounded' onChange={handlePageChange} style={{marginTop: "10px"}}/>
			</div>
		)
	}
}

export default Products