import s from './ProductDescription.module.scss'
import React, { FC, useEffect, useState } from 'react'
import { IProducts } from '../../core/types'
import ProductDocs from '../ProductDocs/ProductDocs'

type IProductProps = {
	product?: IProducts
}

type CharacteristicsType = {
	[key: string]: string
};

const CharacteristicList = ({ data }: { data: CharacteristicsType }) => {
	function splitArrayInHalf<T>(arr: T[]): [T[], T[]] {
		const middleIndex = Math.floor(arr.length / 2)
		const firstHalf = arr.slice(0, middleIndex)
		const secondHalf = arr.slice(middleIndex)
		return [firstHalf, secondHalf]
	}

	const originalArray = Object.entries(data)
	const [firstHalf, secondHalf] = splitArrayInHalf(originalArray)

	const firstCharacteristicsList = firstHalf.map(([key, value]) => (
		<li key={key} className={s.characteristic_items}>
			<p><span><strong>{key}</strong></span><span className={s.value}>{value}</span></p>
		</li>
	))

	const secondCharacteristicsList = secondHalf.map(([key, value]) => (
		<li key={key} className={s.characteristic_items}>
			<p><span><strong>{key}</strong></span><span className={s.value}>{value}</span></p>
		</li>
	))

	return (
		<div className={s.characteristic}>
			<ul>{firstCharacteristicsList}</ul>
			<ul>{secondCharacteristicsList}</ul>
		</div>
	)
}

const ProductDescription: FC<IProductProps> = ({ product }) => {
	const [characteristic, setCharacteristic] = useState(true)
	const [docs, setDocs] = useState(false)


	return (
		<div className={s.description}>
			<nav>
				<div className={characteristic ? s.active_link : s.link } onClick={() => {
					setCharacteristic(true)
					setDocs(false)
				}}>Характеристики
				</div>
				<div className={docs ? s.active_link : s.link } onClick={() => {
					setDocs(true)
					setCharacteristic(false)
				}}>Чертежи и документы
				</div>
			</nav>
			{characteristic && product?.characteristics && <CharacteristicList data={product?.characteristics} />}
			{docs && <ProductDocs/>}
		</div>
	)
}

export default ProductDescription