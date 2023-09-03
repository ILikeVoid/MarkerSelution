import React from 'react'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import SolutionsPage from './pages/SolutionsPage/SolutionsPage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import BrandDetailsPage from './pages/BrandDetailsPage/BrandDetailsPage'
import Footer from './components/Footer/Footer'
import CatalogLayout from './components/CatalogLayout/CatalogLayout'
import ParentCategories from './components/ParentCategories/ParentCategories'
import ParentDetails from './components/ParentDetails/ParentDetails'
import ChildrenDetails from './components/ChildrenDetails/ChildrenDetails'
import ProductDetails from './components/ProductDetails/ProductDetails'
import DeepChildDetails from './components/DeepChildDetails/DeepChildDetails'


function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/solutions' element={<SolutionsPage />} />
				<Route path='/contacts' element={<ContactsPage />} />
				<Route path='/catalog' element={<CatalogLayout />}>
					<Route index element={<ParentCategories />} />
					<Route path='parent/:parentId' element={<ParentDetails />} />
					<Route path='parent/:parentId/child/:childId' element={<ChildrenDetails />} />
					<Route path='parent/:parentId/child/:childId/deep-child/:childId' element={<DeepChildDetails />} />
				</Route>
				<Route path='product/:productId' element={<ProductDetails />} />
				<Route path='/brand/:brandId' element={<BrandDetailsPage />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
