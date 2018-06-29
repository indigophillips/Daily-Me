import React from 'react'
import {Route, Link} from 'react-router-dom'
import Widget1 from './NewsBox'
import TaskList from './TaskList'

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Link to='/'>Home</Link>
        <Widget1 />
        <TaskList />
      </div>
    )
  }
}

export default App
