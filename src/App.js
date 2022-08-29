import React from 'react';
import './css/index.scss'

import Columns from './Columns';
import HomePage from './HomePage';

function App() {
  return (
    <React.Fragment>
      <Columns />
      <HomePage/>
    </React.Fragment>
  )
}

export default App