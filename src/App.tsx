import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import SolutionsPage from './pages/SolutionsPage/SolutionsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/solutions' element={<SolutionsPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
			</Routes>
		</div>
	)
}

export default App
