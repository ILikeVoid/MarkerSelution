import React from 'react'
import s from "./CharacteristicList.module.scss"

type CharacteristicsType = {
	[key: string]: string;
};

const CharacteristicList = ({ data }: { data: CharacteristicsType }) => {
	const characteristicsList = Object.entries(data).map(([key, value]) => (
		<li key={key} className={s.characteristic_items}>
			<strong>{key}</strong> <span>{value}</span>
		</li>
	));

	return (
		<div className={s.characteristic}>
			<ul>{characteristicsList.reverse().slice(2,7)}</ul>
		</div>
	);
}


export default CharacteristicList