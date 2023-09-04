import React, { FC } from 'react'
import s from './PagePagination.module.scss'
import { Pagination } from '@mui/material'

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	setCurrentPage: Function
}

const PagePagination: FC<PaginationProps> = ({ currentPage, totalPages, setCurrentPage }) => {



	return (
		<>
			<p>Страница {currentPage} из {totalPages}</p>

		</>
	)
}

export default PagePagination