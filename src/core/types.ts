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
export interface IDocumentation {
	id: number
	file: string
	product: number
}

export interface ISchemes {
	id: number
	image: string
	product: number
}

export interface IImages {
	id: number
	images: string
}

export interface IProducts {
	id?: number
	title: string
	slug?: string
	article: string
	code: string
	description?: string
	characteristics?: string
	category: number
	brand: number
	photo?: string
	documentation?: IDocumentation[]
	schemes?: ISchemes[]
	images?: IImages[]
}