import React from 'react'
import Radium from 'radium'
import Button from './Button'

const HomeView = () => (
  <div style={{
    margin: '20px 0',
    width: 220
  }}>
    <h1 style={{
      fontFamily: '-apple-system-body, "Helvetica Neue", san-serif',
      fontSize: '1.6rem',
      margin: 0,
      padding: 0
    }}>Home</h1>
  <Button>1</Button>
  </div>
)

export default Radium(HomeView)
