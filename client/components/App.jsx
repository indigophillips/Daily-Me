import React from 'react'
import {Route, Link} from 'react-router-dom'
import Widget1 from './widget1'

class App extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Route exact path='/' Component={Widget1} />
      </div>
    )
  }
}

export default App
