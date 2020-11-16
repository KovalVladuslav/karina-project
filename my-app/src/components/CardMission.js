import React from 'react'

import '../styles/components/CardMission.scss'

const CardHeader = () => {
    return (
        <div className={'card_mission'}>
            <div className={'card_mission_wrapper'}>
                <h2>Наше виденье</h2>
                <p>Мы видим вас свободной, уверенной в себе, успешной личностью. Cвободная вы - счастливая вы</p>
            </div>
            <div className={'divider divider_vertical d-md-none'}/>
            <div className={'divider divider_horizontal d-none d-md-block'}/>
            <div className={'card_mission_wrapper'}>
                <h2>Наша миссия</h2>
                <p>Мы мечтаем сделать счастливой каждую девушку, быть поддержкой на пути поиска себя</p>
            </div>
        </div>
    )
}

export default CardHeader