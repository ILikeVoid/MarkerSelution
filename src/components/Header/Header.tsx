import React, { useEffect, useRef, useState } from 'react'
import s from './Header.module.scss'
import logo from '../../assets/images/logo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { CSSTransition } from 'react-transition-group'
import MobileMenu from '../MobileMenu/MobileMenu'

const Header = () => {
	const [menuVisible, setMenuVisible] = useState(false)

	const wrapperRef = useRef<HTMLDivElement>(null)

	const navigate = useNavigate()

	useEffect(() => {
		const handleOutside = (e: any) => {
			if (!wrapperRef.current?.contains(e.target)) {
				setMenuVisible(false)
			}
		}

		document.addEventListener('mousedown', handleOutside)

		return () => {
			document.removeEventListener('mousedown', handleOutside)
		}
	})

	return (
		<>
			<div className={s.header} ref={wrapperRef}>
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
						<MenuIcon className={s.burger_menu} onClick={() => setMenuVisible(!menuVisible)} fontSize='large' />
					</div>
				</div>
				<CSSTransition in={menuVisible} timeout={400}
											 classNames={{ enterActive: s.mobileMenuEnterActive, exitActive: s.mobileMenuExitActive }}
											 mountOnEnter unmountOnExit>
					<MobileMenu />
				</CSSTransition>
			</div>
		</>
	)
}

export default Header
