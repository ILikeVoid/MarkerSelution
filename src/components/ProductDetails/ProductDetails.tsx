import React from 'react'
import s from './ProductDetails.module.scss'
import { useGetProductQuery } from '../../redux/sevices/features/productsApi/productsApi'
import { NavLink, useParams } from 'react-router-dom'
import { useGetBrandDetailsQuery } from '../../redux/sevices/features/brandsApi/brandsApi'
import shipping from '../../assets/images/shipping.svg'
import buy from '../../assets/images/buy.svg'

const ProductDetails = () => {
	const { productId } = useParams()

	const { data: product } = useGetProductQuery(Number(productId))
	const { data: brandInfo } = useGetBrandDetailsQuery(Number(product?.brand))

	console.log(product)

	return (
		<div className={s.product}>
			<div className='container mx-auto'>
				<h2>{product?.title}</h2>
				<div className={s.product_items}>
					<div className={s.product_images}>
						<img src={product?.photo} alt='' />
					</div>
					<div className={s.product_info}>
						<p className='flex items-center gap-2'>Артикул: <p className={s.data}>{product?.article}</p></p>
						<p className='flex items-center gap-2'>Код товара: <p className={s.data}>{product?.code}</p></p>
						<div className={s.brand}>
							<p>Бренд: <NavLink to={`/brand/${brandInfo?.id}`}>{brandInfo?.name}</NavLink></p>
							<img src={brandInfo?.image} alt='' />
						</div>
						<p className='flex items-center gap-2'>Срок доставки: <p className={s.data}>по запросу</p></p>
					</div>
					<div className={s.price}>
						<div className={s.product_price}>
							<p>{product?.price?.toLocaleString()} тнг.</p>
							<div className={s.nds}>Цена с НДС 20%</div>
							<a
								href={`https://api.whatsapp.com/send/?phone=77021117118&text=Здравствуйте%2C+меня+интересует+товар+${product?.title}`}>Заказать</a>
						</div>
						<div className={s.any_info}>
							<div className={s.col}>
								<div><img src={shipping} alt='' /></div>
								<div>
									<span>Бесплатная доставка от 30 000₽</span>
									<p className='flex items-center gap-2'>Доставка CDEK:<p className={s.sum}> Рассчитать</p></p>
									<a href=''>Подробнее о стоимости и вариантах доставки</a>
								</div>
							</div>
							<div className={s.col}>
								<div><img src={buy} alt='' /></div>
								<div>
									<p className='flex items-center gap-2'>Способы отплаты:<p style={{ color: 'black' }}> банковским
										переводом</p></p>
									<a>Подробнее о способах оплаты</a></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails