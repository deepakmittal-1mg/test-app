import React from 'react';
import './css/index.scss'

import Columns from './Columns';
import HomePage from './HomePage';
import ProductPage from './ProductPage'

function App() {
  return (
    <React.Fragment>
      <Columns />
      {/* <HomePage/> */}
      <ProductPage/>
    </React.Fragment>
  )
}

export default App