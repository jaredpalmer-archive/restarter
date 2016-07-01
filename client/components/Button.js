import React from 'react'
import Radium from 'radium'

const Button = ({ children, onClick }) => (
  <button style={s.button} onClick={onClick}>
    {children}
  </button>
)

const s = {
  button: {
    background: '#111',
    border: '0.5rem solid #FFF',
    color: '#FFF',
    boxSizing: 'border-box',
    lineHeight: 1,
    textTransform: 'uppercase',
    display: 'inline',
    fontSize: '1rem',
    margin: 0,
    padding: '0.8rem 1rem 0.8rem 1rem',
    outlineOffset: 0,
    cursor: 'pointer',
    transition: '0.1s linear',
    width: '8rem',
    borderRadius: '.8rem',
    ':focus': {
      outline: 0
    },
    ':hover': {
      background: '#222',
      color: '#fff'
    }
  }
}

export default Radium(Button)
