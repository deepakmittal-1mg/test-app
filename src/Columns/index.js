import React, { useState } from 'react';
import './style.scss'

function Columns() {
    const [showGrid, setShowGrid] = useState(true)

    const renderColoumns = () => {
        return [...Array(12).keys()].map(() => <div className="columns-div col-1" />)
    }

    return (
        <React.Fragment>

            {
                showGrid && (
                    <div className='columns-container'>
                        {renderColoumns()}
                    </div>
                )
            }

            <button className='grid-button' onClick={() => setShowGrid(!showGrid)}>
                {showGrid ? "Hide" : "Show"}
            </button>
            
        </React.Fragment>
    )

}

export default Columns