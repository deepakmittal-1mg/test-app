import React from 'react';
import './css/index.scss'

import Columns from './Columns';
import HomePage from './HomePage';
import ProductPage from './ProductPage'

function App() {
  return (
    <React.Fragment>
      <div className='app-container'>
        <Columns />
        {/* <HomePage/> */}
        <ProductPage />
      </div>
    </React.Fragment>
  )
}

export default App