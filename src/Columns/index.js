import React, { useState } from 'react';
import './style.scss'

function Columns() {
    const [showGrid, setShowGrid] = useState(true)

    const renderColoumns = () => {
        return [...Array(24).keys()].map(() => <div className="columns-div col-1" />)
    }

    return (
        <React.Fragment>

            {
                showGrid && (
                    <div className='page-container columns-container'>
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