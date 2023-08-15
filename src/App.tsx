import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import SolutionsPage from './pages/SolutionsPage/SolutionsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import BrandDetailsPage from './pages/BrandDetailsPage/BrandDetailsPage'
import Footer from './components/Footer/Footer'
import ParentDetailsPage from './pages/ParentDetailsPage/ParentDetailsPage'


function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/solutions' element={<SolutionsPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/brand/:brandId' element={<BrandDetailsPage />} />
				<Route path='/category/:childrenId' element={<ParentDetailsPage />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
