import React, { FC } from 'react'
import s from './CatalogList.module.scss'
import { Items } from '../../assets/data/data'

type IProps = {
	setCatalogListVisible: Function
}

const CatalogList: FC<IProps> = ({ setCatalogListVisible }) => {
	return (
		<div className={s.catalogList} onMouseLeave={() => setCatalogListVisible(false)}>
			<div className='container mx-auto'>
				<div className={s.catalog_items}>
					{Items.map((item) =>
						<div className={s.item} key={item.id}>
							<div className={s.img_block}><img src={item.img} alt='' /></div>
							<p>{item.name}</p>
						</div>)}
				</div>
			</div>
		</div>
	)
}
export default CatalogList