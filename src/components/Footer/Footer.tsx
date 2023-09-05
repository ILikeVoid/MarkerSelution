import React, { useState } from 'react'
import s from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import { useGetBrandsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { useGetParentQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

const Footer = () => {
	const [catalogVisible, setCatalogVisible] = useState(false)
	const [brandsVisible, setBrandsVisible] = useState(false)

	const { data: brands = [] } = useGetBrandsQuery()
	const { data: parents = [] } = useGetParentQuery()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className={s.footer}>
			<div className={`container mx-auto ${s.footer_items}`}>
				<div className={s.catalog}>
					<h3>Каталог</h3>
					<div className={s.catalog_items}>
						{parents.map(parent =>
							<NavLink onClick={scrollToTop} to={`catalog/parent/${parent.id}`} key={parent.id}>{parent.title}</NavLink>)}
					</div>
				</div>
				<div className={s.adaptive_catalog}>
					<div className={s.items_head} onClick={() => setCatalogVisible(!catalogVisible)}>
						<h3>Каталог</h3>
						{catalogVisible ? <ExpandLessIcon fontSize='large' /> : <ExpandMoreIcon fontSize='large' />}
					</div>
					{catalogVisible &&
						<div className={s.catalog_items}>
							{parents.map(parent =>
								<NavLink onClick={scrollToTop} to={`catalog/${parent.id}`} key={parent.id}>{parent.title}</NavLink>)}
						</div>
					}
				</div>
				<div className={s.brands}>
					<h3>Бренды</h3>
					<div className={s.brands_items}>
						{brands?.map(brand =>
							<NavLink onClick={scrollToTop} to={`brand/${brand.id}`} key={brand.id}>{brand.name}</NavLink>)}
					</div>
				</div>
				<div className={s.adaptive_brands}>
					<div className={s.items_head} onClick={() => setBrandsVisible(!brandsVisible)}>
						<h3>Бренды</h3>
						{brandsVisible ? <ExpandLessIcon fontSize='large' /> : <ExpandMoreIcon fontSize='large' />}
					</div>
					{brandsVisible &&
						<div className={s.brands_items}>
							{brands?.map(brand =>
								<NavLink onClick={scrollToTop} to={`brand/${brand.id}`} key={brand.id}>{brand.name}</NavLink>)}
						</div>
					}
				</div>
				<div className={s.any}>
					<span>Almira © 2030 Поставщик комплектующих и компонентов для автоматизации производства</span>
					<span>Вся информация на сайте – собственность Almira2030.kz. Публикация информации с сайта Almira2030.kz без разрешения запрещена. Все права защищены</span>
					<span>Все товары , Список товаров категории Лазерные датчики расстояния Информация на сайте не является публичной офертой.</span>
				</div>
			</div>
		</div>
	)
}

export default Footer