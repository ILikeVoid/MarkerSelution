import React from 'react'
import CatalogNavbar from '../CatalogNavbar/CatalogNavbar'
import { Outlet } from 'react-router-dom'
import s from './CatalogLayout.module.scss'
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs'

const CatalogLayout = () => {
	return (
		<div className={s.catalog}>
			<div className='container mx-auto'>
				<BreadCrumbs />
				<h1>Каталог</h1>
				<div className={s.catalog_items}>
					<CatalogNavbar />
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default CatalogLayout