import React, { useState } from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { CSSTransition } from 'react-transition-group'

const Header = () => {

	const navigate = useNavigate()

	return (
		<>
			<div className={s.header}>
				<div className='md:container md:mx-auto'>
					<div className={s.header_items}>
						<img
							className='cursor-pointer'
							onClick={() => navigate('/')}
							src={logo}
							alt=''
						/>
						<nav>
							<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
											 to='catalog'>Продукты</NavLink>
							<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
											 to='solutions'>Решения для маркировки</NavLink>
							<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
											 to='contacts'>Контакты</NavLink>
						</nav>
						<MenuIcon className={s.burger_menu} onClick={() => alert('drew')} fontSize='large' />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
