import React from 'react'
import Nav from '../components/Nav'
import normalize from 'normalize.css'
import reboot from '../global.css'
import { Style } from 'radium'

class App extends React.Component {
  render () {
    return (
      <div>
        <Style rules={normalize} />
        <Style rules={reboot} />
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default App
