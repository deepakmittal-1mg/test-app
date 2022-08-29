import React from 'react';
import Columns from './Columns';
import './css/index.scss'
import FlexSystem from './FlexSystem'
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