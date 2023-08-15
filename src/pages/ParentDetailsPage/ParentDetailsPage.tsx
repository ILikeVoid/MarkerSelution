import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetParentChildrenQuery } from '../../redux/sevices/features/categoriesApi/categoriesApi'

const ParentDetailsPage = () => {
	const { childrenId } = useParams()
	const { data: childes = [] } = useGetParentChildrenQuery(Number(childrenId))

	console.log(childes)

	return (
		<div>
			<h1>Parent Details</h1>
		</div>
	)
}

export default ParentDetailsPage