import React, { Component, propTypes } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <h1>Magic Basic Land Gallery</h1>
        <ul>
          <li><Link to='/gallery/plains'>Plains</Link></li>
          <li><Link to='/gallery/island'>Island</Link></li>
          <li><Link to='/gallery/swamp'>Swamp</Link></li>
          <li><Link to='/gallery/mountain'>Mountain</Link></li>
          <li><Link to='/gallery/forest'>Forest</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
