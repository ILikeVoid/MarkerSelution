//Brand types
export type IBrands = {
	id: number
	name: string
	image: string
	description?: string
}

//Categories types.
export type ICategories = {
	id: number
	name: string
	category: string
	img: string
}


//Product types.
export interface IProducts {
	id: number
	name: string
}