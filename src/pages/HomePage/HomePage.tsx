import React from 'react'
import s from './HomePage.module.scss'

const HomePage = () => {
	return (
		<div className={s.home}>
			<section className={s.title}>
				<video
					src='https://saurer-markingsolutions.com/wp-content/uploads/2022/08/Laser_Frontplatte_Home_neu.mp4'
					autoPlay
					muted
					playsInline
					loop
				></video>
				<div className={s.title_items}>
					<div className='container mx-auto'>
					<h1>INDUSTRIELLE<br/> KENNZEICHNUNG</h1>
					<p>
						Markiertechnologie & Erkennungssysteme aus einer Hand ✓<br/> Ihr
						Spezialist zur permanenten Kennzeichnung von Werkstoffen, Bauteilen,<br/>
						Werkzeugen, Messmitteln und mehr.
					</p>
					<button>Mehr erfahren</button>
					</div>
				</div>
			</section>
		</div>
	)
}

export default HomePage
