import React from 'react'

function Overview(props) {
    const arr = [
        'Uses and benefits',
        'Side effects',
        'How to use',
        'How drug works',
        'Safety advice',
        'Missed dose',
        'All substitutes',
        'Uses and benefits',
        'Side effects',
        'How to use',
        'How drug works',
        'Safety advice',
        'Missed dose',
        'All substitutes',

    ];
    return (    
        <div className='widget-container box-shadow max-col-2'>
            <div className='col-2 l5SemiBold marginTop-12 '>Overview</div>
            {
                arr.map(text => <div className='col-2 marginTop-24'>{text}</div>)
            }
        </div>
    )
}

export default Overview