import React from 'react';
import Widget from '../Widget';
import './style.scss'

function FlexSystem24() {
    return (
        <div className='page-container' style={{ marginTop: '40px' }}>
            <div className='displayFlex'>
                <Widget col={4} />
                <div className='col-1' />
                <Widget col={4} />
                <div className='col-2' />
                <Widget col={4} />
            </div>
            <div className='displayFlex'>
                <Widget col={11} />
                <div className='col-2' />
                <Widget col={11} />
            </div>
            <Widget col={24} />
            <Widget col={24} />
        </div>
    )
}

export default FlexSystem24