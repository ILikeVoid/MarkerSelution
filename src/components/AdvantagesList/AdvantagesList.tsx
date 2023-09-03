import React from 'react'
import s from './AdvantagesList.module.scss'

const AdvantagesList = () => {
	return (
		<div className='container mx-auto'>
			<div className={s.advantages}>
				<div className={s.cart}>ГЕОГРАФИЯ КЛИЕНТОВ ПО ВСЕМУ КАЗАХСТАНУ. СКИДКИ КОНЕЧНЫМ КЛИЕНТАМ. ПОДБОР АНАЛОГОВ</div>
				<div className={s.cart}>РАБОТАЕМ НАПРЯМУЮ С ВЕДУЩИМИ МИРОВЫМИ ПРОИЗВОДИТЕЛЯМИ. ТОЛЬКО БЕЛЫЕ ПОСТАВКИ</div>
				<div className={s.cart}>МИНИМАЛЬНЫЕ СРОКИ ПОСТАВКИ И МИНИМАЛЬНЫЕ ЦЕНЫ. 7 ЛЕТ НА РЫНКЕ</div>
			</div>
		</div>
	)
}

export default AdvantagesList