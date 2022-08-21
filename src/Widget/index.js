import React from 'react';
import './style.scss'

function Widget(props) {
    const col = props.col || 5
    return (
        <div className='widget-container'>
            <div style={{backgroundColor: 'yellowgreen'}}>
                <div className={`col-${col}`}>Heading</div>
                <div className={`col-${col}`}>Sub Heading</div>

                <div className='displayFlex'>
                    <div className={`col-${col/2}`}>Button 1</div>
                    <div className={`col-${col/2}`}>Button 2</div>
                </div>
            </div>
        </div>
    )
}

export default Widget
