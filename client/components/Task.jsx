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
      <div className="task">{this.props.task.task}
        <input type="submit" id="editTask" value="Edit" id="editTask" onClick={this.toggleHidden.bind(this)} />
        {!this.state.isHidden && <EditTask task={this.props.task} onChange={this.handleChange.bind(this)}  />}
        <input type="submit" value="Delete" id="deleteTask" onClick={this.deleteThisTask.bind(this, this.props.task)} onChange={this.onChange} />
      </div>
    )
  }
}

export default Task
