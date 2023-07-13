import React, { useState } from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CatalogList from '../CatalogList/CatalogList'
import { CSSTransition } from 'react-transition-group'

const Header = () => {
	const [catalogListVisible, setCatalogListVisible] = useState(false)

	const navigate = useNavigate()

	return (
		<>
			<div className={s.header}>
				<div className='container mx-auto'>
					<div className={s.header_items}>
						<img
							className='cursor-pointer'
							onClick={() => navigate('/')}
							src={logo}
							alt=''
						/>
						<nav>
							<NavLink
								to='catalog'
								onMouseEnter={() => setCatalogListVisible(true)}
								onClick={() => setCatalogListVisible(false)}
							>
								Продукты
								<KeyboardArrowDownIcon />
							</NavLink>
							<NavLink
								to='solutions'
								onClick={() => setCatalogListVisible(false)}
							>
								Решения для маркировки
							</NavLink>
							<NavLink to='contacts'>Контакты</NavLink>
						</nav>
					</div>
				</div>
				<CSSTransition
					in={catalogListVisible}
					timeout={450}
					classNames={{
						enterActive: s.citiesEnterActive,
						exitActive: s.citiesExitActive
					}}
					mountOnEnter
					unmountOnExit
				>
					<CatalogList setCatalogListVisible={setCatalogListVisible} />
				</CSSTransition>
			</div>
		</>
	)
}

export default Header
