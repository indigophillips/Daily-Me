import React from 'react'
import EditTask from './EditTask'
import { deleteTask } from '../apiClient'

class Task extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  handleChange () {
    this.setState({
      isHidden: true
    })
    this.props.onChange()
  }

  deleteThisTask(task) {
    this.setState({ error: null })
    deleteTask(task.id)
    .then(this.props.onChange)
  }

  render() {
    return (
      <div className="task individualTask row">
        <div className="taskInput">
          {this.props.task.task}
        </div>
        <div className="taskButtons">
          <button id="editTaskButton" onClick={this.toggleHidden.bind(this)}><i className="far fa-edit"></i></button>
          <button id="deleteTask" onClick={this.deleteThisTask.bind(this, this.props.task)} onChange={this.onChange}><i className="fa fa-trash" aria-hidden="true"></i></button>
        </div>
        {!this.state.isHidden && <EditTask task={this.props.task} onChange={this.handleChange.bind(this)}  />}
      </div>
    )
  }
}

export default Task
