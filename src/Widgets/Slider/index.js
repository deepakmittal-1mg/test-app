import React, { Fragment } from "react";
import './style.scss'
import { sliderData } from '../data'

function Slider() {
    return (
        <Fragment>
            <div className='container-fluid widget-container marginTop-24'>
                <div className="max-col-12 slider-container">
                    {
                        sliderData.map(cardData => (
                            <div style={{ height: '100%' }}>
                                <div className='col-2 card-container'>
                                    <img style={{width:'100%'}} className='marginTop-16' src={cardData.imageUrl} />
                                    <div className='marginTop-16 textCenter textPrimary' style={{fontSize:'14px'}}>{cardData.text}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className='container-fluid widget-container marginTop-24'>
                <div className="flex">
                    <div><div className="col-1"/></div>
                    <div className="max-col-10 slider-container">
                    {
                        sliderData.map(cardData => (
                            <div style={{ height: '100%' }}>
                                <div className='col-2 card-container'>
                                    <img className='marginTop-16' src={cardData.imageUrl} />
                                    <div className='marginTop-16 textCenter textPrimary'>{cardData.text}</div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div><div className="col-1"/></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Slider