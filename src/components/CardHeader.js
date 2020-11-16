import React from 'react'

import '../styles/components/CardHeader.scss'

const CardHeader = () => {
    return (
        <div className={'card_header'}>
            <i className={'card_header_decor card_header_decor_top'}/>
            <i className={'card_header_menu'}/>
            <h1>Lady school</h1>
            <span>женский онлай курс</span>
            <i className={'card_header_decor card_header_decor_bottom'}/>
        </div>
    )
}

export default CardHeader
