import React from 'react'
import s from './MobileMenu.module.scss'
import { NavLink } from 'react-router-dom'

const MobileMenu = () => {
	return (
		<div className={s.mobile_menu}>
			<nav>
				<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
								 to='catalog'>Продукты</NavLink>
				<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
								 to='solutions'>Решения для маркировки</NavLink>
				<NavLink className={({ isActive, isPending }) => isPending ? s.pending : isActive ? s.active : ''}
								 to='contacts'>Контакты</NavLink>
			</nav>
		</div>
	)
}

export default MobileMenu