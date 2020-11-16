import React from 'react'

import '../styles/components/CardAboutUs.scss'

const CardAboutUs = () => {
    return (
        <div className={'card_about_us'}>
            <h2>О курсе</h2>
            <p>Мы создали надёжный инструмент для того, чтобы вы смогли расскрыть в себе успешную леди в любом возрасте!</p>
            <p className={'card_about_us_text'}>Поэтому, этот курс подойдёт девушкам и женщинам любой возрастной категории</p>
            <iframe src="https://www.youtube.com/embed/iDnhX2E7XuY" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
    )
}

export default CardAboutUs