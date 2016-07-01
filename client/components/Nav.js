import React from 'react'
import Radium from 'radium'

const Nav = () => (
  <div style={{
    width: '100%',
    height: 50,
    top: 0,
    left: 0,
    background: '#333',
    padding: '0 1rem'
  }}>
    <h1 style={{ lineHeight: '50px' }}>Nav</h1>
  </div>
)

export default Radium(Nav)
